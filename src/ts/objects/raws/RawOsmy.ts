import { Vector2 } from "../../engine/utils/math";
import { Osmy } from "../ores/Osmy";
import { Raw } from "./Raw";

export class RawOsmy extends Raw {
    constructor(position: Vector2) {
        super("raw-osmy", position);
        this.parent = Osmy as any;
    }
}