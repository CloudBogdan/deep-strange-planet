import { Color } from "../../config";
import { Vector2 } from "../../engine/utils/math";
import { StalactiteOre } from "./StalactiteOre";

export class Basalt extends StalactiteOre {
    constructor(position: Vector2, data: any) {
        super("basalt", position, data);

        this.particlesColors = [Color.GREY];
    }
}