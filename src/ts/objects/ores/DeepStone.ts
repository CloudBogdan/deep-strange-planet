import { Vector2 } from "../../engine/utils/math";
import { InfectedOre } from "./InfectedOre";

export class DeepStone extends InfectedOre {
    constructor(position: Vector2, data: any) {
        super("deep-stone", position, data);
        this.randomRotate = false;
        this.allowDecorations = true;
    }
}