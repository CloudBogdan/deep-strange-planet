import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class Basalt extends Ore {
    constructor(position: Vector2) {
        super("basalt", position);

        this.hp = 40;
    }
}