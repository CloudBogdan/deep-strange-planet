import { Color } from "../../config";
import { noise } from "../../engine/Generator";
import { inRange, Vector2 } from "../../engine/utils/math";
import { RawRady } from "../raws/RawRady";
import { DangerOre } from "./DangerOre";

export class Rady extends DangerOre {
    constructor(position: Vector2) {
        super("rady", position);

        this.particlesColors = [Color.GREY, Color.GREEN];
    }

    static rules(x: number, y: number): boolean {
        const res = noise(x / 2, y / 2, 5, 3);
        const mask = noise(x / 6 - 5, y / 6 + 10);

        return inRange(res - mask/4, .85, 1);
    }

    onBreak() {
        super.onBreak();

        this.dropItem(RawRady);
    }
}