import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Raw } from "./Raw";

export class RawNerius extends Raw {
    constructor(position: Vector2) {
        super("raw-nerius", position);
    }

    update(game: Game) {
        super.update(game);

        // const player = game.getChildById<Player>("player");
        // if (!player) return;

        // player.moveSpeed = this.picked ? 2 : 5;
    }
}