import { Color } from "../../config";
import { Vector2 } from "../../engine/utils/math";
import { RawGradeCidium } from "../raws/RawGradeCidium";
import { RawOsmy } from "../raws/RawOsmy";
import { Ore } from "./Ore";

export class Osmy extends Ore {
    constructor(position: Vector2) {
        super("osmy", position);

        this.randomRotate = false;
        this.particlesColors = [Color.BLACK, Color.BLUE];
        this.allowDecorations = true;
    }

    onBreak() {
        super.onBreak();

        this.dropItem(RawOsmy);
        this.dropItem(RawGradeCidium, 15);
    }
}