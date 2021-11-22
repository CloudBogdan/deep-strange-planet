import { Config } from "../../config";
import { Game, Sprite } from "../../engine";
import { random, Vector2, compareNames } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Item } from "../item/Item";

export type RawType = 
    "raw-cidium" | "raw-osmy" | "raw-grade-cidium" | "raw-antin" |
    "raw-rady" | "raw-nerius";

export class Raw extends Item {
    rawType: RawType
    foldToPosition: Vector2
    
    constructor(type: RawType, position: Vector2) {
        super(`${ type }`, type, {
            position: position.expand(),
            colliderType: "dynamic",
        });

        this.rawType = type;
        this.foldToPosition = Vector2.zero();
    }

    update(game: Game) {
        super.update(game);

        if (!this.allowPickup) {
            this.moveTo(this.foldToPosition);
            if (this.foldToPosition.distance(this.position) < 30)
                game.removeChildById(this.id);
        }
    }
}