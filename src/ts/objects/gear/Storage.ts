import { Game, ISpriteProps } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Raw } from "../raws/Raw";
import { Gear, Level } from "./Gear";

type InteractType = "store" | "view";

export class Storage extends Gear {
    contains: {
        [key: string]: number
    }
    interactType: InteractType
    
    constructor(level: Level, props?: ISpriteProps) {
        super("Хранилище ресурсов", "storage", level, props);
        this.contains = {};
        this.interactType = "view";
    }

    update(game: Game) {
        super.update(game);

        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";

        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        this.interactType = player.inventory.totalCount == 0 ? "view" : "store";
        // const player = game.getChildById<Player>("player");

        // if (!player) return;
        // if (this.playerIsNear)

        // Object.keys(player.inventory).map(slot=> {
        //     this.allowInteract = player.inventory[slot] > 0;
        // })
    }

    onInteract(game: Game, player: Player | undefined) {
        super.onInteract(game, player);
        if (!player) return;

        game.getChildrenByName<Raw>("raw").map(raw=> {
            // Destroy on fold in storage
            if (!raw.picked) return;

            raw.allowPickup = false;
            raw.picked = false;
            raw.foldToPosition = this.position;
        });
        Object.keys(player.inventory).map(slot=> {
            // rawsCount += player.inventory[slot]
            
            if (this.contains[slot])
                this.contains[slot] += player.inventory[slot];
            else
                this.contains[slot] = player.inventory[slot];
        })
        
        if (player.inventory.totalCount <= 0) return;
        
        this.spawnText(game, player.inventory.totalCount.toString());
        
        player.inventory = { totalCount: 0 };
    }
}