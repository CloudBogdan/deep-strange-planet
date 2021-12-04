import { GeneratorConfig, Config } from "../config";
import { Game } from "../engine";
import { inRange } from "../engine/utils/math";
import { Antin } from "../objects/ores/Antin";
import { Basalt } from "../objects/ores/Basalt";
import { BurntBasalt } from "../objects/ores/BurntBasalt";
import { Cidium } from "../objects/ores/Cidium";
import { CrackedStone } from "../objects/ores/CrackedStone";
import { DeepStone } from "../objects/ores/DeepStone";
import { Destrony } from "../objects/ores/Destrony";
import { FetusStone } from "../objects/ores/FetusStone";
import { Manty } from "../objects/ores/Manty";
import { MushroomStone } from "../objects/ores/MushroomStone";
import { Nerius } from "../objects/ores/Nerius";
import { Osmy } from "../objects/ores/Osmy";
import { Rady } from "../objects/ores/Rady";
import { Stone } from "../objects/ores/Stone";
import { StonyGround } from "../objects/ores/StonyGround";

export function initGenerator(game: Game) {

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
            // height: [0, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT-15],
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT-15],
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
            // height: [0, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT * 3],
            height: [12, GeneratorConfig.BASALT_LAYER_HEIGHT/2],
            divider: 5,
            block: Cidium
        },

        // Osmy - deep stone layer
        {
            value: [0, .7],
            // height: [0, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            height: [50, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            divider: 4,
            block: Osmy,
            rules(noiseX, noiseY, getValue) {
                // return true;
                return getValue(noiseX+1, noiseY+2, 4) > .85;
            }
        },
        {
            value: [.9, 1],
            // height: [0, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            height: [100, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            divider: 3,
            block: Nerius
        },
        
        // Antin - basalt layer
        {
            value: [0, .6],
            // height: [0, Config.WORLD_HEIGHT - 40],
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT + 10, Config.WORLD_HEIGHT - 22],
            divider: 3,
            block: Antin,
            rules(noiseX, noiseY, getValue) {
                return inRange(getValue(noiseX+1, noiseY, 5), 0, .4);
            }
        },
        // Rady - basalt layer
        {
            value: [0, .3],
            // height: [0, Config.WORLD_HEIGHT - 5],
            height: [200, Config.WORLD_HEIGHT - 5],
            divider: 2,
            block: Rady
        },
        // > Manty layer
        {
            value: [0, .3],
            // height: [0, Config.WORLD_HEIGHT - 1],
            height: [Config.WORLD_HEIGHT - 5, Config.WORLD_HEIGHT - 1],
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
    
}