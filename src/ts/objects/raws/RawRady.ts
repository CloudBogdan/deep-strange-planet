import { Game } from "../../engine";
import { random, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Raw } from "./Raw";

export class RawRady extends Raw {
    constructor(position: Vector2) {
        super("raw-rady", position);
    }

    update(game: Game) {
        super.update(game);
        
        const player = game.getChildById<Player>("player");
        if (!player) return;
        if (player.hasBottle) return;

        // If is picked, player get damage (2-4)
        if (game.clock.elapsed % 80 == 0 && this.picked)
            player.hit(game, Math.floor(random(2, 5)));
    }
}