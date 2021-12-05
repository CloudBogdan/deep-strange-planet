import { Config } from "../config";
import { Game } from "../engine";
import { asImage, clamp, Vector2 } from "../engine/utils/math";

export function initLevel(game: Game) {

    function render() {

        const op = (1 - game.camera.position.y / 240) * .3;
        
        for (let i = 0; i < Config.WORLD_WIDTH; i ++)
            game.renderer.drawSprite({
                width: 4,
                height: 4,
                frame: new Vector2(i % 2, 0),
                texture: asImage(game.getAssetByName("ground")),
                position: new Vector2(-Config.SPRITE_SIZE * 10 + (i * Config.SPRITE_SIZE * 4), -Config.SPRITE_SIZE * .5 * 3),
                opacity: clamp(op, 0, 1),
                layer: "bg"
            })

    }

    return { render };

}