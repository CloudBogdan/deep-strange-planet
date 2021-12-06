import { initAssets } from "./managers/assets";
import { Game } from "./engine";
import { Player } from "./objects/entities/Player";
import { initLevel } from "./managers/level";
import { Color, Config } from "./config";
import { initDome } from "./managers/dome";
import { Vector2 } from "./engine/utils/math";
import { initGenerator } from "./managers/generator";
import { Renderer } from "./engine/Renderer";

const game = new Game();

const player = game.add<Player>(new Player());
const level = initLevel(game);

game.addInit(()=> {
    
    initAssets(game);
    initDome(game);
    initGenerator(game);
    
    game.camera.follow(player.position);
    
});
game.addUpdate(()=> {
    game.camera.follow(player.position, .1);
    game.generator.generateChunksAt(game.camera.position);
});
game.addRender(renderer=> {

    level.render();
    
    if (Config.IS_DEV)
        renderDebug(renderer);

});

function renderDebug(renderer: Renderer) {
    renderer.drawText({
        text: game.clock.fps.toString(),
        font: "20px Pixel",
        position: new Vector2(30, 40),
        align: "left",
        layer: "ui"
    });
    renderer.drawText({
        text: `Height: ${ Math.floor(player.position.y / Config.SPRITE_SIZE + 1) }`,
        font: "20px Pixel",
        position: new Vector2(30, 80),
        align: "left",
        layer: "ui"
    });
    
    // renderChunks(renderer);
}
function renderChunks(renderer: Renderer) {
    for (let y = 0; y < Config.WORLD_HEIGHT / Config.CHUNK_SIZE; y ++)
        for (let x = 0; x < Config.WORLD_WIDTH / Config.CHUNK_SIZE; x ++)
            renderer.drawRect({
                position: new Vector2(x*Config.CHUNK_SIZE*Config.SPRITE_SIZE, y*Config.CHUNK_SIZE*Config.SPRITE_SIZE).add(Vector2.all(Config.SPRITE_SIZE*1.5)),
                width: Config.CHUNK_SIZE,
                height: Config.CHUNK_SIZE,
                color: "rgba(0, 0, 0, 0)",
                stroke: { width: 2, color: Color.RED }
            });
}

game.init();

// ! Debug
if (Config.IS_DEV)
    window.addEventListener("keydown", e=> {
        
        if (e.code == "KeyG")
            console.log(game);
        if (e.code == "KeyP")
            console.log(player);
        if (e.code == "KeyI")
            console.log(player.inventory);

    });
