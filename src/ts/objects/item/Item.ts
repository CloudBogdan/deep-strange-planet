import { ISpriteProps } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { ItemParent } from "./ItemParent";

export type ItemType = 
    "item-robot" | "battery";

export class Item extends ItemParent {
    itemType: ItemType
    
    constructor(type: ItemType, position: Vector2, props?: ISpriteProps) {
        super(type, type.replace("item-", ""), position, props);

        this.itemType = type;
    }
}