import { Config } from "../config";
import { Game, Sprite } from "../engine";
import { Vector2 } from "../engine/utils/math";
import { Documentation } from "../objects/gear/Documentation";
import { OxygenGenerator } from "../objects/gear/OxygenGenerator";
import { Recycler } from "../objects/gear/Recycler";
import { Storage } from "../objects/gear/Storage";

export function initDome(game: Game) {
    const domePosition = new Vector2(Config.HOME_POSITION_X, Config.HOME_POSITION_Y);

    game.add<Sprite>(new OxygenGenerator({
        position: domePosition.add(new Vector2(-60, -100))
    }));
    game.add<Sprite>(new Documentation({
        position: domePosition.add(new Vector2(60, -100))
    }));

    const storage = game.add<Storage>(new Storage({
        position: domePosition.add(new Vector2(-140, -10))
    }));
    game.add<Sprite>(new Recycler(storage, {
        flip: { x: true, y: false },
        position: domePosition.add(new Vector2(140, 0))
    }));
    
    // Dome
    game.add<Sprite>(new Sprite("dome", "dome", {
        width: 8,
        height: 8,
        position: domePosition,
        layer: "particles",
        colliderType: "none"
    }));

}