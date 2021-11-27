import { Vector2 } from "../../engine/utils/math";
import { Item } from "../item/Item";

export type RawType = 
    "raw-cidium" | "raw-osmy" | "raw-grade-cidium" | "raw-antin" |
    "raw-rady" | "raw-nerius" | "raw-manty";

export class Raw extends Item {
    rawType: RawType
    foldToPosition: Vector2
    
    constructor(type: RawType, position: Vector2) {
        super(`${ type }`, type, position);

        this.rawType = type;
        this.foldToPosition = Vector2.zero();
    }

    update() {
        super.update();

        if (!this.allowPickup) {
            this.moveTo(this.foldToPosition);
            if (this.foldToPosition.distance(this.position) < 30)
                this.game.removeChildById(this.id);
        }
    }
}