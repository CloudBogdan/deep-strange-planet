import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class FetusStone extends Ore {
    constructor(position: Vector2) {
        super("fetus-stone", position);
    
        this.allowGrowVine = true;
        this.randomRotate = false;
    }
}