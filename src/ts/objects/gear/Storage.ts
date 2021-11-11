import { Game, ISpriteProps } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Raw } from "../raws/Raw";
import { Gear, Level } from "./Gear";

export class Storage extends Gear {
    contains: {
        [key: string]: number
    }
    
    constructor(level: Level, props?: ISpriteProps) {
        super("Хранилище ресурсов", "storage", level, props);
        this.contains = {};
    }

    update(game: Game) {
        super.update(game);

        const player = game.getChildById<Player>("player");

        if (!player) return;
        if (this.playerIsNear)

        Object.keys(player.inventory).map(slot=> {
            this.allowInteract = player.inventory[slot] > 0;
        })
    }

    onInteract(game: Game, player: Player | undefined) {
        super.onInteract(game, player);
        if (!player) return;
        let rawsCount = 0;

        game.getChildrenByName<Raw>("raw").map(raw=> {
            // Destroy on fold in storage
            if (!raw.picked) return;

            raw.allowPickup = false;
            raw.picked = false;
            raw.foldToPosition = this.position;
        });
        
        Object.keys(player.inventory).map(slot=> {
            if (this.contains[slot])
                this.contains[slot] += player.inventory[slot];
            else
                this.contains[slot] = player.inventory[slot];
            rawsCount += player.inventory[slot]
        })

        if (rawsCount <= 0) return;
        
        this.spawnText(game, rawsCount.toString());
        
        player.inventory = {};
    }
}