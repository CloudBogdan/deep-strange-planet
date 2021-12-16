import { Color } from "../../config";
import { Game } from "../../engine";
import { noise } from "../../engine/Generator";
import { inRange, Vector2 } from "../../engine/utils/math";
import { RawCidium } from "../raws/RawCidium";
import { Ore } from "./Ore";

export class Cidium extends Ore {
    constructor(position: Vector2) {
        super("cidium", position);

        // this.hp = 20;
        this.particlesColors = [Color.BLACK, Color.YELLOW];
        this.allowDecorations = true;
    }

    static rules(x: number, y: number): boolean {
        const res = noise(x / 5, y / 5, 4, 4);
        const mask = noise(x, y + 4);
        
        return inRange(res - mask/4, .7, 1);
    }

    onBreak() {
        super.onBreak();

        this.dropItem(RawCidium);
    }
}