import { Vector2 } from "../../engine/utils/math";
import { DangerRaw } from "./DangerRaw";

export class RawManty extends DangerRaw {
    constructor(position: Vector2) {
        super("raw-manty", position);
    }
}