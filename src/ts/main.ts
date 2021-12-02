import { initAssets } from "./managers/assets";
import { Game } from "./engine";
import { Player } from "./objects/entities/Player";
import { SpawnParticles } from "./engine/components/Particles";
import { initLevel } from "./managers/level";
import { Stone } from "./objects/ores/Stone";
import { CrackedStone } from "./objects/ores/CrackedStone";
import { Color, Config, GeneratorConfig } from "./config";
import { DeepStone } from "./objects/ores/DeepStone";
import { Cidium } from "./objects/ores/Cidium";
import { initDome } from "./managers/dome";
import { Osmy } from "./objects/ores/Osmy";
import { Basalt } from "./objects/ores/Basalt";
import { inRange, Vector2 } from "./engine/utils/math";
import { Antin } from "./objects/ores/Antin";
import { Rady } from "./objects/ores/Rady";
import { BurntBasalt } from "./objects/ores/BurntBasalt";
import { Nerius } from "./objects/ores/Nerius";
import { StonyGround } from "./objects/ores/StonyGround";
import { Robot } from "./objects/entities/Robot";
import { Destrony } from "./objects/ores/Destrony";
import { Manty } from "./objects/ores/Manty";
import { FetusVine } from "./objects/plants/FetusVine";
import { FetusStone } from "./objects/ores/FetusStone";
import { MushroomStone } from "./objects/ores/MushroomStone";

const game = new Game();

const player = game.add<Player>(new Player());
// const robot = game.add<Robot>(new Robot(new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2 - Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE)));
const level = initLevel(game);

let lastLoop = Date.now();
let fps = 0;

game.addInit(()=> {
    
    initAssets(game);
    initDome(game);
    
    game.generator.settings = [
        // > Stones
        {
            value: [0, 1],
            height: [0, 43],
            block: Stone,
        },
        {
            value: [.5, .6],
            height: [5, 90],
            divider: 5,
            block: CrackedStone
        },
        {
            value: [.5, .6],
            height: [0, 14],
            divider: 5,
            block: StonyGround
        },

        // > Deepest stones
        // Deep stone blend layer
        {
            value: [.8, 1],
            height: [30, 43],
            divider: 2,
            block: DeepStone
        },
        // Deep stone layer
        {
            value: [0, 1],
            height: [42, GeneratorConfig.BASALT_LAYER_HEIGHT],
            block: DeepStone
        },

        // Basalt blend layer
        {
            value: [.7, 1],
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT, GeneratorConfig.BASALT_LAYER_HEIGHT],
            divider: 3,
            block: Basalt
        },
        // Basalt layer
        {
            value: [0, 1],
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
            block: Basalt
        },

        // Burnt basalt blend layer
        {
            value: [.8, 1],
            height: [GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
            divider: 3,
            block: BurntBasalt
        },
        // Burnt basalt layer
        {
            value: [0, 1],
            height: [GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT, Config.WORLD_HEIGHT],
            block: BurntBasalt
        },
        // > Destrony layer
        {
            value: [0, 1],
            height: [Config.WORLD_HEIGHT, Config.WORLD_HEIGHT],
            block: Destrony
        },

        // > Other
        // Fetus stone
        {
            value: [0, 1],
            height: [30, GeneratorConfig.BASALT_LAYER_HEIGHT-20],
            divider: 2,
            block: FetusStone,
            rules(noiseX, noiseY, getValue) {
                return (
                    inRange(getValue(noiseX, noiseY+1, 10), 0, .5) &&
                    inRange(getValue(noiseX, noiseY, 8), 0, .8) 
                    // inRange(getValue(noiseX, noiseY, 2), 0, .3)
                );
            }
        },
        // Mushroom stone
        {
            value: [0, 1],
            height: [0, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT-15],
            // height: [GeneratorConfig.BASALT_LAYER_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT-15],
            divider: 2,
            block: MushroomStone,
            rules(noiseX, noiseY, getValue) {
                return (
                    inRange(getValue(noiseX, noiseY-1, 10), 0, .5) &&
                    inRange(getValue(noiseX, noiseY, 8), 0, .6) 
                    // inRange(getValue(noiseX, noiseY, 2), 0, .3)
                );
            }
        },
        
        // > Ores
        // Cidium
        {
            value: [.95, 1],
            height: [0, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT * 3],
            // height: [12, GeneratorConfig.BASALT_LAYER_HEIGHT/2],
            divider: 5,
            block: Cidium
        },

        // Osmy - deep stone layer
        {
            value: [0, .7],
            height: [0, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            // height: [50, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            divider: 4,
            block: Osmy,
            rules(noiseX, noiseY, getValue) {
                // return true;
                return getValue(noiseX+1, noiseY+2, 4) > .85;
            }
        },
        {
            value: [.9, 1],
            height: [0, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            // height: [100, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            divider: 3,
            block: Nerius
        },
        
        // Antin - basalt layer
        {
            value: [0, .6],
            height: [0, Config.WORLD_HEIGHT - 40],
            // height: [GeneratorConfig.BASALT_LAYER_HEIGHT + 10, Config.WORLD_HEIGHT - 22],
            divider: 3,
            block: Antin,
            rules(noiseX, noiseY, getValue) {
                return inRange(getValue(noiseX+1, noiseY, 5), 0, .4);
            }
        },
        // Rady - basalt layer
        {
            value: [0, .3],
            height: [0, Config.WORLD_HEIGHT - 5],
            // height: [200, Config.WORLD_HEIGHT - 5],
            divider: 2,
            block: Rady
        },
        // > Manty layer
        {
            value: [0, .3],
            height: [0, Config.WORLD_HEIGHT - 1],
            // height: [Config.WORLD_HEIGHT - 5, Config.WORLD_HEIGHT - 1],
            divider: 2,
            block: Manty
        },
        {
            value: [0, .5],
            height: [Config.WORLD_HEIGHT - 1, Config.WORLD_HEIGHT - 1],
            divider: 2,
            block: Manty
        },

        // > Holes
        {
            value: [0, .5],
            height: [5, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - 20],
            block: null,
        },
        {
            value: [0, .4],
            height: [GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT, Config.WORLD_HEIGHT - 40],
            divider: 5,
            block: null,
        },
    ];
    game.camera.follow(player.position);
    
});
game.addUpdate(()=> {
    const thisLoop = Date.now();
    if (game.clock.elapsed % 30 == 0)
        fps = +(1000 / (thisLoop - lastLoop)).toFixed(1);
    lastLoop = thisLoop;

    level.update(player);
    
    game.camera.follow(player.position, .1);
    game.generator.generateChunksAt(game.camera.position);
});
game.addRender(renderer=> {

    renderer.drawText({
        text: fps.toString(),
        font: "20px Pixel",
        position: new Vector2(40, 40),
        layer: "ui"
    });
    renderer.drawText({
        text: `Height: ${ Math.floor(player.position.y / Config.SPRITE_SIZE + 1) }`,
        font: "20px Pixel",
        position: new Vector2(70, 80),
        layer: "ui"
    });
    
    // for (let y = 0; y < Config.WORLD_HEIGHT / Config.CHUNK_SIZE; y ++)
    // for (let x = 0; x < Config.WORLD_WIDTH / Config.CHUNK_SIZE; x ++)
    //     renderer.drawRect({
    //         position: new Vector2(x*Config.CHUNK_SIZE*Config.SPRITE_SIZE, y*Config.CHUNK_SIZE*Config.SPRITE_SIZE).add(Vector2.all(Config.SPRITE_SIZE*1.5)),
    //         width: Config.CHUNK_SIZE,
    //         height: Config.CHUNK_SIZE,
    //         color: "rgba(0, 0, 0, 0)",
    //         stroke: { width: 2, color: Color.RED }
    //     });

});

game.init();

// ! Debug
window.addEventListener("keydown", e=> {
    
    if (e.code == "KeyG")
        console.log(game);
    if (e.code == "KeyP")
        console.log(player);
    if (e.code == "KeyI")
        console.log(player.inventory);
    if (e.code == "KeyM")
        console.log(player);

});
