import { Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class Stone extends Ore {
    constructor(position: Vector2) {
        super("stone", position);
        
        this.allowDecorations = true;
    }
}