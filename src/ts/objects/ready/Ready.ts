import { Vector2 } from "../../engine/utils/math";
import { ItemParent } from "../item/ItemParent";

export type ReadyType = "ready-cidium";

export class Ready extends ItemParent {
    readyType: ReadyType
    
    constructor(type: ReadyType, position: Vector2) {
        super(type, type, position);

        this.readyType = type;
    }
}