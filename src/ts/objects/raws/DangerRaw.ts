import { Game } from "../../engine";
import { random, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Raw, RawType } from "./Raw";

export class DangerRaw extends Raw {
    constructor(type: RawType, position: Vector2) {
        super(type, position);
    }

    update(game: Game) {
        super.update(game);
        
        const player = game.getChildById<Player>("player");
        if (!player) return;
        if (player.hasBottle) return;

        // If is picked, player get damage (1-2)
        if (game.clock.elapsed % 80 == 0 && this.picked)
            player.hit(game, Math.floor(random(1, 3)));
    }
}