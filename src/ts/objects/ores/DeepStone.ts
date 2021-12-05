import { Vector2 } from "../../engine/utils/math";
import { InfectedOre } from "./InfectedOre";

export class DeepStone extends InfectedOre {
    constructor(position: Vector2) {
        super("deep-stone", position);
        this.randomRotate = false;
        this.allowDecorations = true;
    }
}