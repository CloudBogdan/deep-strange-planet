import { Color } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { RawGradeCidium } from "../raws/RawGradeCidium";
import { RawOsmy } from "../raws/RawOsmy";
import { Ore } from "./Ore";

export class Osmy extends Ore {
    constructor(position: Vector2) {
        super("osmy", position);

        // this.needToolLevel = 2;
        this.randomRotate = false;
        // this.hp = 36;
        this.particlesColors = [Color.BLACK, Color.BLUE];
    }

    onBreak() {
        super.onBreak();

        this.dropRawOre(RawOsmy);
        this.dropRawOre(RawGradeCidium, 100);
    }
}