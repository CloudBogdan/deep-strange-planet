import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Player, ToolLevel } from "../entities/Player";
import { Ore, OreType } from "./Ore";

export class DangerOre extends Ore {
    constructor(type: OreType, position: Vector2) {
        super(type, position);
    }

    hit(damage: number, level: ToolLevel) {
        super.hit(damage, level);

        const player = this.game.getChildById<Player>("player");
        if (!player) return;

        if (!player.hasBottle)
            player.hit(1);
    }
}