import { Vector2 } from "../../engine/utils/math";
import { Item } from "./Item";

export class Card extends Item {
    constructor(position: Vector2) {
        super("card", position);
    }
}