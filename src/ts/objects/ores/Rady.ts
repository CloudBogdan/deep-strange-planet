import { Color } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { RawRady } from "../raws/RawRady";
import { Ore } from "./Ore";

export class Rady extends Ore {
    constructor(position: Vector2) {
        super("rady", position);

        // this.needToolLevel = 2;
        // this.hp = 58;
        this.particlesColors = [Color.GREY, Color.GREEN];
    }

    hit(game: Game, damage: number, player: Player) {
        super.hit(game, damage, player);

        player.hit(1);
    }
    onBreak(game: Game) {
        super.onBreak(game);

        this.dropRawOre(game, RawRady);

        const player = game.getChildById<Player>("player");
        if (!player) return;

        player.hit(4);
    }
}