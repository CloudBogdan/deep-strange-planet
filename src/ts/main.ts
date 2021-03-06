import { initAssets } from "./managers/assets";
import { Game, Text } from "./engine";
import { Player } from "./objects/entities/Player";
import { initLevel } from "./managers/level";
import { Color, Config } from "./config";
import { initDome } from "./managers/dome";
import { asImage, Vector2 } from "./engine/utils/math";
import { initGenerator } from "./managers/generator";
import { Renderer } from "./engine/Renderer";
import { UI } from "./engine/components/UI";
import { initMenu } from "./stages/menu";

const game = new Game();

const player = game.add<Player>(new Player());
const level = initLevel(game);
const menu = initMenu(game, player);

game.addInit(()=> {
    
    initAssets(game);
    initDome(game);
    initGenerator(game);
    menu.init();
    
    game.camera.follow(player.position);
});
game.addUpdate(()=> {
    if (!game.paused)
        game.camera.follow(player.position, .1);
    else
        game.camera.follow(new Vector2(-300, -50).add(player.position), 1);
    game.generator.generateChunksAt(game.camera.position);

    menu.update();
});
game.addRender(renderer=> {

    level.render();
    menu.render();
    
    renderer.drawText({
        text: `${ game.clock.fps } fps`,
        font: "18px Pixel",
        position: new Vector2(15, innerHeight - 30),
        align: "left",
        layer: "ui"
    });
    if (Config.IS_DEV || player.god)
        renderDebug(renderer);

});

function renderDebug(renderer: Renderer) {
    renderer.drawText({
        text: [
            `Delta: ${ game.clock.delta }`,
            `Height: ${ Math.floor(player.position.y / Config.SPRITE_SIZE + 1) }`,
            `Pos: ${ Math.floor(player.position.x / Config.SPRITE_SIZE) }, ${ Math.floor(player.position.y / Config.SPRITE_SIZE + 1) }`,
        ].join("\n"),
        font: "20px Pixel",
        lineHeight: 30,
        position: new Vector2(innerWidth - 30, innerHeight - 140),
        align: "right",
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
