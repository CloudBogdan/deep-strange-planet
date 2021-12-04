import { Vector2 } from "../../engine/utils/math";
import { Item } from "./Item";

export class Drill extends Item {
    constructor(position: Vector2) {
        super("drill", position)
    }
}