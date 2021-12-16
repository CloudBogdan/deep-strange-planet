import { Color } from "../../config";
import { noise } from "../../engine/Generator";
import { inRange, Vector2 } from "../../engine/utils/math";
import { RawAntin } from "../raws/RawAntin";
import { Ore } from "./Ore";

export class Antin extends Ore {
    constructor(position: Vector2) {
        super("antin", position);

        this.particlesColors = [Color.GREY, Color.RED];
    }

    static rules(x: number, y: number): boolean {
        const res = noise(x / 2, y / 2, 4, 3);
        const mask = noise(x / 8 - 2, y / 8 + 10);
        
        return inRange(res + mask/4, 0, .6);
    }

    onBreak() {
        super.onBreak();

        this.dropItem(RawAntin);
    }
}