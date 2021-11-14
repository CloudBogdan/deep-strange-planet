import { Game, ISpriteProps } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Raw } from "../raws/Raw";
import { Gear, Level } from "./Gear";

type InteractType = "store" | "view";
enum MaxStorageTotalCount {
    "1-level" = 4,
    "2-level" = 28,
    "3-level" = 42,
}

export class Storage extends Gear {
    contains: Player["inventory"]
    interactType: InteractType
    maxTotalCount: number
    
    constructor(level: Level, props?: ISpriteProps) {
        super("Хранилище ресурсов", "storage", level, props);
        this.contains = { totalCount: 0, slots: {} };
        this.interactType = "view";
        this.maxTotalCount = MaxStorageTotalCount[`${ level }-level`];
    }

    update(game: Game) {
        super.update(game);
        
        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        this.interactType = (player.inventory.totalCount == 0 || this.contains.totalCount >= this.maxTotalCount) ? "view" : "store";
        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
    }

    onInteract(game: Game, player: Player) {
        super.onInteract(game, player);

        if (this.interactType == "store") 
            this.store(game, player);
        else if (this.interactType == "view")
            console.log(this.contains.totalCount, this.contains.slots);
    }

    store(game: Game, player: Player) {
        if (this.contains.totalCount >= this.maxTotalCount) return;
        
        let storedCount = 0;
        let totalStoredCount = 0;
        
        [...Object.keys(player.inventory.slots)].map(slot=> {
            this.contains.slots[slot] = this.contains.slots[slot] || 0
            
            // Add items
            if (this.contains.totalCount >= this.maxTotalCount) {
                player.spawnText(game, "Хранилище перепольнено", new Vector2(0, -50));
                return;
            }

            storedCount = player.inventory.slots[slot] + this.contains.totalCount <= this.maxTotalCount ? player.inventory.slots[slot] : (this.maxTotalCount - this.contains.totalCount);
            this.contains.slots[slot] += storedCount;
            this.contains.totalCount += storedCount;
            totalStoredCount += storedCount;
            
        });
        
        [...game.getChildrenByName<Raw>("raw")].filter(r=> r.picked).map((raw, index)=> {
            if (!(index <= storedCount)) return;
            // Destroy on fold in storages
            raw.allowPickup = false;
            raw.picked = false;
            raw.foldToPosition = this.position;
        });
        
        if (player.inventory.totalCount <= 0) return;
        
        player.spawnText(game, totalStoredCount.toString());
        player.inventory = { totalCount: 0, slots: {} };
    }
}