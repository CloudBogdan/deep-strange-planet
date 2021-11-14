import { Color } from "../../config";
import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class BurntBasalt extends Ore {
    constructor(position: Vector2) {
        super("burnt-basalt", position);

        this.needToolLevel = 4;
        this.hp = 80;
        this.particlesColors = [Color.DARK_GREY];
    }
}