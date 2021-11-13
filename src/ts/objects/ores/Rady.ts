import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Ore } from "./Ore";

export class Rady extends Ore {
    constructor(position: Vector2) {
        super("rady", position);

        this.needToolLevel = 2;
        this.hp = 58;
    }

    onBreak(game: Game) {
        super.onBreak(game);

        const player = game.getChildById<Player>("player");
        if (!player) return;

        player.hp -= 4;
    }
}