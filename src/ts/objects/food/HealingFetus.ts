import { randomInt, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Food } from "./Food";

export class HealingFetus extends Food {
    constructor(position: Vector2) {
        super("food-fetus", position);
    }

    onEat(player: Player) {
        super.onEat(player);

        player.heal(randomInt(1, 2));
    }
}