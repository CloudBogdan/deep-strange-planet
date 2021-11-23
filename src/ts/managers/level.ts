import { Config } from "../config";
import { Game, Sprite } from "../engine";
import { Vector2 } from "../engine/utils/math";
import { Player } from "../objects/entities/Player";

export function initLevel(game: Game) {

    const ground = game.add<Sprite>(new Sprite("ground", "ground", {
        width: 4,
        height: 4,
        position: new Vector2(-Config.SPRITE_SIZE * 10, -Config.SPRITE_SIZE * .5 * 3),
        repeat: Math.round(Config.WORLD_WIDTH) + 2,
        layer: "bg"
    }));

    function update(player: Player) {

        const op = (1 - player.position.y / 240) * .3;
        ground.opacity = op > 0 ? op : 0;

    }

    return { update };

}