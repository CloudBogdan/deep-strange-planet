import { Vector2 } from "../../engine/utils/math";
import { Plant } from "./Plant";

export class FetusVine extends Plant {
    constructor(position: Vector2) {
        super("fetus-vine", position);
    }
}