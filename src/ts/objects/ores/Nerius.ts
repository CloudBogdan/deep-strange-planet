import { Color } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
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

    onBreak(game: Game) {
        super.onBreak(game);

        this.dropRawOre(game, RawNerius);
        // this.dropRawOre(game, RawGradeCidium, 100);
    }
}