import { Config } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { RawAntin } from "../raws/RawAntin";
import { Ore } from "./Ore";

export class Antin extends Ore {
    constructor(position: Vector2) {
        super("antin", position);

        this.needToolLevel = 3;
        this.hp = 52;
    }

    onBreak(game: Game) {
        super.onBreak(game);

        const player = game.getChildById<Player>("player");

        this.dropRawOre(game, RawAntin);
        // if (player && this.position.distance(player.position) < Config.SPRITE_SIZE * 1.5)
        // if (player)
            // player.velocity.copy(player.velocity.add(player.position.sub(this.position).normalize().mul(26)));
    }
}