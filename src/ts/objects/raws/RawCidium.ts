import { Vector2 } from "../../engine/utils/math";
import { Raw } from "./Raw";

export class RawCidium extends Raw {
    constructor(position: Vector2) {
        super("raw-cidium", position);
    }
}