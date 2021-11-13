import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class DeepStone extends Ore {
    constructor(position: Vector2) {
        super("deep-stone", position);
        this.randomRotate = false;
        this.needToolLevel = 2;
        this.hp = 26
    }
}