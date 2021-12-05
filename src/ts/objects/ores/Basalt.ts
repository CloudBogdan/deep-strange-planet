import { Color } from "../../config";
import { Vector2 } from "../../engine/utils/math";
import { InfectedOre } from "./InfectedOre";

export class Basalt extends InfectedOre {
    constructor(position: Vector2, data: any) {
        super("basalt", position, data);

        this.particlesColors = [Color.GREY];
    }
}