import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class StonyGround extends Ore {
    constructor(position: Vector2) {
        super("stony-ground", position);
        
    }
}