import { Color, Config } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { RawAntin } from "../raws/RawAntin";
import { Ore } from "./Ore";

export class Antin extends Ore {
    constructor(position: Vector2) {
        super("antin", position);

        // this.needToolLevel = 3;
        // this.hp = 52;
        this.particlesColors = [Color.GREY, Color.RED];
    }

    onBreak(game: Game) {
        super.onBreak(game);

        this.dropRawOre(game, RawAntin);
    }
}