import { initAssets } from "./managers/assets";
import { Game } from "./engine";
import { Player } from "./objects/entities/Player";
import { SpawnParticles } from "./engine/components/Particles";
import { initLevel } from "./managers/level";
import { Stone } from "./objects/ores/Stone";
import { CrackedStone } from "./objects/ores/CrackedStone";
import { Config } from "./config";
import { DeepStone } from "./objects/ores/DeepStone";
import { Cidium } from "./objects/ores/Cidium";
import { initDome } from "./managers/dome";

const game = new Game();

const player = game.add<Player>(new Player());
const level = initLevel(game);

let lastLoop = Date.now();
let fps = 0;

game.addInit(()=> {
    
    initAssets(game);
    initDome(game);
    
    game.generator.settings = [
        // Stones
        {
            value: [0, 1],
            height: [0, 43],
            ore: Stone,
        },
        {
            value: [.5, .6],
            height: [5, Config.WORLD_HEIGHT],
            divider: 5,
            ore: CrackedStone
        },
        {
            value: [.8, 1],
            height: [30, 43],
            divider: 2,
            ore: DeepStone
        },
        {
            value: [0, 1],
            height: [42, Config.WORLD_HEIGHT],
            ore: DeepStone
        },
        
        // Ores
        {
            value: [.85, 1],
            height: [12, Config.WORLD_HEIGHT - 10],
            // height: [0, Config.WORLD_HEIGHT - 10],
            divider: 5,
            ore: Cidium
        },

        // Holes
        {
            value: [0, .5],
            height: [5, Config.WORLD_HEIGHT],
            ore: null,
        },
    ];
    game.camera.follow(player.position);

    setInterval(()=> {
        document.querySelector("span")!.innerHTML = fps.toString();
    }, 500);
    
});
game.addUpdate(()=> {
    const thisLoop = Date.now();
    fps = +(1000 / (thisLoop - lastLoop)).toFixed(1);
    lastLoop = thisLoop;

    level.update(player);
    
    game.camera.follow(player.position, .1);
    game.generator.generateChunksAt(player.position);
});

/*
function removeChunks() {
    chunks.map((chunk, index)=> {

        if (player.position.expand().distance(chunk.pos.mul(Config.SPRITE_SIZE * 5).expand()) > 900) {
            game.removeChildrenByGroupName(chunk.id);
            chunks.splice(index, 1);
        }
    
    });
}
*/

game.init();

// ! Debug
window.addEventListener("keydown", e=> {
    
    if (e.code == "KeyG")
        console.log(game);
    if (e.code == "KeyP")
        SpawnParticles(game, game.camera.position);
    if (e.code == "KeyM")
        console.log(player);

});
