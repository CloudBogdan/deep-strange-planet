import { Config } from "../config";
import { Game, Sprite } from "../engine";
import { Vector2 } from "../engine/utils/math";
import { Recycler } from "../objects/gear/Recycler";
import { Storage } from "../objects/gear/Storage";
import { Upgrader } from "../objects/gear/Upgrader";

export function initDome(game: Game) {
    const domePosition = new Vector2(Math.round(Config.WORLD_X_CENTER), -Config.SPRITE_SIZE * 1.5);

    game.add<Sprite>(new Storage(1, {
        position: domePosition.add(new Vector2(-150, 0))
    }));

    game.add<Sprite>(new Upgrader(1, {
        flip: { x: true, y: false },
        position: domePosition.add(new Vector2(50, -70))
    }));
    game.add<Sprite>(new Recycler(1, {
        flip: { x: true, y: false },
        position: domePosition.add(new Vector2(140, 0))
    }));
    
    // Dome
    game.add<Sprite>(new Sprite("dome", "dome", {
        width: 8,
        height: 8,
        position: domePosition,
        layer: "particles"
    }));

}