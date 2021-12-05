import { Vector2 } from "../../engine/utils/math";
import { InfectedOre } from "./InfectedOre";

export class Stone extends InfectedOre {
    constructor(position: Vector2, data: any) {
        super("stone", position, data);
        
        this.allowDecorations = true;
    }
}