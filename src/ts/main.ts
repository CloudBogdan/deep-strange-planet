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

const game = new Game();

const menuUI = new UI();
menuUI.updateTemplate([1, 1]);

const player = game.add<Player>(new Player());
const level = initLevel(game);

game.addInit(()=> {
    
    menuUI.init(game);
    
    initAssets(game);
    initDome(game);
    initGenerator(game);
    
    game.camera.follow(player.position);
    
    // UI actions
    game.gamepad.onKeyDown("menu-ui", "enter", ()=> {

        if (menuUI.focused.row == 0)
            game.paused = false;

    });
});
game.addUpdate(()=> {
    if (!game.paused)
        game.camera.follow(player.position, .1);
    else
        game.camera.follow(new Vector2(-300, -50).add(player.position), 1);
    game.generator.generateChunksAt(game.camera.position);

    menuUI.allowSelectSlots = game.paused && player.respawnTimer <= 0;
});
game.addRender(renderer=> {

    level.render();
    
    // Render UI
    if (menuUI.allowSelectSlots) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2);
        const menuPos = new Vector2(windowCenter.x / 2, windowCenter.y);
    
        renderer.drawRect({
            position: windowCenter,
            width: innerWidth / size,
            height: innerHeight / size,
            color: "rgba(0, 0, 0, .5)",
            layer: "ui"
        })
        renderer.drawSprite({
            texture: asImage(game.getAssetByName("menu")),
            width: 6,
            height: 6,
            position: menuPos,
            layer: "ui"
        })
        
        // About text
        if (menuUI.focused.row == 1)
            renderer.drawText({
                text: [
                    `> Идея: Bogdanov`,
                    `> Худоник: Bogdanov`,
                    `> Программист: Bogdanov`,
                    `> Саунд-дизайнер: Bogdanov`,
                    `> Оператор: Bogdanov`,
                    `> Бариста: Bogdanov`,
                    `> Псих-поддержка: Bogdanov`,
                ].join("\n"),
                font: "28px Pixel",
                position: new Vector2(innerWidth / 1.75, innerHeight / 2 - 50),
                layer: "ui"
            })
        
        // Play button
        const playPos = new Vector2(-size / 2, size / 2).add(menuPos);
        menuUI.renderSlot(playPos, 0, 0, ()=> {

            renderer.drawText({
                text: "Иследовать",
                position: playPos.add(new Vector2(0, -5)),
                layer: "ui"
            })
            
        }, 3.2, 1.2);
        // About button
        const aboutPos = new Vector2(-size, size * 1.5).add(menuPos);
        menuUI.renderSlot(aboutPos, 1, 0, ()=> {

            renderer.drawText({
                text: "Об игрe",
                position: aboutPos.add(new Vector2(0, -5)),
                layer: "ui"
            })
            
        }, 2);
        
    }
    
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
