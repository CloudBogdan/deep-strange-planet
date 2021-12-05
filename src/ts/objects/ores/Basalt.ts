import { Color } from "../../config";
import { Vector2 } from "../../engine/utils/math";
import { InfectedOre } from "./InfectedOre";

export class Basalt extends InfectedOre {
    constructor(position: Vector2) {
        super("basalt", position);

        this.particlesColors = [Color.GREY];
    }
}