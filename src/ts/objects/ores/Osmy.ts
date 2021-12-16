import { Color } from "../../config";
import { noise } from "../../engine/Generator";
import { inRange, Vector2 } from "../../engine/utils/math";
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

    static rules(x: number, y: number): boolean {
        const res = noise(x / 3, y / 3, 5, 4);
        const mask = noise(x / 2, y / 5 + 4);

        return inRange(res - mask/3, .65, 1);
    }

    onBreak() {
        super.onBreak();

        this.dropItem(RawOsmy);
        this.dropItem(RawGradeCidium, 35);
    }
}