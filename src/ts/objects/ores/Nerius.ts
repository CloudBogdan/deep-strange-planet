import { Color } from "../../config";
import { Game } from "../../engine";
import { noise } from "../../engine/Generator";
import { inRange, Vector2 } from "../../engine/utils/math";
import { RawGradeCidium } from "../raws/RawGradeCidium";
import { RawNerius } from "../raws/RawNerius";
import { RawOsmy } from "../raws/RawOsmy";
import { Ore } from "./Ore";

export class Nerius extends Ore {
    constructor(position: Vector2) {
        super("nerius", position);

        this.randomRotate = false;
        this.particlesColors = [Color.BLACK, "#fff"];
    }

    static rules(x: number, y: number): boolean {
        const res = noise(x / 6, y / 6, 5, 4);
        const mask = noise(x + 5, y + 3);
        
        return inRange(res - mask/4, .7, 1);
    }

    onBreak() {
        super.onBreak();

        this.dropItem(RawNerius);
    }
}