import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { RawManty } from "../raws/RawManty";
import { DangerOre } from "./DangerOre";

export class Manty extends DangerOre {
    constructor(position: Vector2) {
        super("manty", position);

        this.randomRotate = false;
    }

    onBreak() {
        super.onBreak();

        this.dropRawOre(RawManty);
    }
}