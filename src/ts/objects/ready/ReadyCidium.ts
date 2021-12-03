import { Vector2 } from "../../engine/utils/math";
import { Ready } from "./Ready";

export class ReadyCidium extends Ready {
    constructor(position: Vector2) {
        super("ready-cidium", position);
    }
}