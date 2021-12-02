import { Config } from "../config";
import { Game, Sprite } from "../engine";
import { Vector2 } from "../engine/utils/math";
import { OxygenGenerator } from "../objects/gear/OxygenGenerator";
import { Recycler } from "../objects/gear/Recycler";
import { Storage } from "../objects/gear/Storage";

export function initDome(game: Game) {
    const domePosition = new Vector2(Math.round(Config.WORLD_X_CENTER), -Config.SPRITE_SIZE * 1.5);

    const storage = game.add<Storage>(new Storage(1, {
        position: domePosition.add(new Vector2(-150, 0))
    }));

    
    game.add<Sprite>(new OxygenGenerator({
        position: domePosition.add(new Vector2(0, -100))
    }));
    game.add<Sprite>(new Recycler(3, storage, {
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