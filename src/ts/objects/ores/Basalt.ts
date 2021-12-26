import { Color } from "../../config";
import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class Basalt extends Ore {
    constructor(position: Vector2, data: any) {
        super("basalt", position, data);

        this.particlesColors = [Color.GREY];
    }
}