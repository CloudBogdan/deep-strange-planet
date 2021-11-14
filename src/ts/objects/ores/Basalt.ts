import { Color } from "../../config";
import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class Basalt extends Ore {
    constructor(position: Vector2) {
        super("basalt", position);

        this.needToolLevel = 3;
        this.hp = 40;
        this.particlesColors = [Color.GREY];
    }
}