import { noise } from "../../engine/Generator";
import { inRange, Vector2 } from "../../engine/utils/math";
import { RawManty } from "../raws/RawManty";
import { DangerOre } from "./DangerOre";

export class Manty extends DangerOre {
    constructor(position: Vector2) {
        super("manty", position);

        this.randomRotate = false;
    }

    static rules(x: number, y: number): boolean {
        const res = noise(x / 2, y / 2, 2);
        
        return inRange(res, 0, .5);
    }

    onBreak() {
        super.onBreak();

        this.dropItem(RawManty);
    }
}