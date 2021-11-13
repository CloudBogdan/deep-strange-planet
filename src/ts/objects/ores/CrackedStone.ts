import { Vector2 } from "../../engine/utils/math";
import { FallingOre } from "./FallingORe";
import { Ore } from "./Ore";

export class CrackedStone extends FallingOre {
    constructor(position: Vector2) {
        super("cracked-stone", position);

        this.hp = 6;
    }
}