import { Color } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { RawRady } from "../raws/RawRady";
import { DangerOre } from "./DangerOre";

export class Rady extends DangerOre {
    constructor(position: Vector2) {
        super("rady", position);

        this.particlesColors = [Color.GREY, Color.GREEN];
    }

    onBreak() {
        super.onBreak();

        this.dropRawOre(RawRady);
    }
}