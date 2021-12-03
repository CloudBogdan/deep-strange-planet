import { Vector2 } from "../../engine/utils/math";
import { ItemParent } from "../item/ItemParent";

export type RawType = 
    "raw-cidium" | "raw-osmy" | "raw-grade-cidium" | "raw-antin" |
    "raw-rady" | "raw-nerius" | "raw-manty";

export class Raw extends ItemParent {
    rawType: RawType
    
    constructor(type: RawType, position: Vector2) {
        super(type, type, position);

        this.rawType = type;
    }
}