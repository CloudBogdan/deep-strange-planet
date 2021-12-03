import { Vector2 } from "../../engine/utils/math";
import { Item } from "./Item";

export class Battery extends Item {
    constructor(position: Vector2) {
        super("battery", position);
    }
}