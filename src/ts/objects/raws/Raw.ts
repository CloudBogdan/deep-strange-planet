import { Vector2 } from "../../engine/utils/math";
import { Item } from "../item/Item";

export type RawType = 
    "raw-cidium" | "raw-osmy" | "raw-grade-cidium" | "raw-antin" |
    "raw-rady" | "raw-nerius" | "raw-manty";

export class Raw extends Item {
    rawType: RawType
    
    constructor(type: RawType, position: Vector2) {
        super(`${ type }`, type, position);

        this.rawType = type;
    }
}