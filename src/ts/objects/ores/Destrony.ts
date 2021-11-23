import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore"

export class Destrony extends Ore {
    constructor(position: Vector2) {
        super("destrony", position);
        this.unbreakable = true;
        this.randomRotate = false;
    }
}