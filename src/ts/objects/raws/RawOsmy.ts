import { Vector2 } from "../../engine/utils/math";
import { Raw } from "./Raw";

export class RawOsmy extends Raw {
    constructor(position: Vector2) {
        super("raw-osmy", position);
    }
}