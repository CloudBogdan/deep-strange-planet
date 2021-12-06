import { Vector2 } from "../../engine/utils/math";
import { Item } from "./Item";

export class Box extends Item {
    constructor(position: Vector2) {
        super("box", position);
    }
}