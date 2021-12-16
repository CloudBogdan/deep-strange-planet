import { GeneratorConfig, Config } from "../config";
import { Game } from "../engine";
import { noise } from "../engine/Generator";
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

export function caveRules(x: number, y: number, offsetX?: number, offsetY?: number): boolean {
    const ox = offsetX || 0;
    const oy = offsetY || 0;
    
    const res = noise((x + ox) / 30, (y + oy) / 12, 4, 3);
    const mask = noise((x + ox) / 16, (y + oy) / 16);

    return inRange(res + mask/5, 0, .6);
}

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
        // // Fetus stone
        {
            height: [30, GeneratorConfig.BASALT_LAYER_HEIGHT-20],
            block: FetusStone,
            rules: FetusStone.rules
            // rules(noiseX, noiseY, getValue) {
            //     return (
            //         inRange(getValue(noiseX, noiseY+1, 10), 0, .5) &&
            //         inRange(getValue(noiseX, noiseY, 8), 0, .8) 
            //         // inRange(getValue(noiseX, noiseY, 2), 0, .3)
            //     );
            // }
        },
        // Mushroom stone
        {
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT-15],
            block: MushroomStone,
            rules: MushroomStone.rules
        },
        
        // > Ores
        // Cidium
        {
            height: [12, GeneratorConfig.BASALT_LAYER_HEIGHT/2],
            block: Cidium,
            rules: Cidium.rules
        },

        // Osmy - deep stone layer
        {
            height: [50, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            block: Osmy,
            rules: Osmy.rules
        },
        {
            height: [100, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
            block: Nerius,
            rules: Nerius.rules
        },
        
        // Antin - basalt layer
        {
            height: [GeneratorConfig.BASALT_LAYER_HEIGHT + 10, Config.WORLD_HEIGHT - 22],
            block: Antin,
            rules: Antin.rules
        },
        // Rady - basalt layer
        {
            height: [200, Config.WORLD_HEIGHT - 5],
            block: Rady,
            rules: Rady.rules
        },
        // > Manty layer
        {
            height: [Config.WORLD_HEIGHT - 5, Config.WORLD_HEIGHT - 1],
            block: Manty,
            rules: Manty.rules
        },
        {
            value: [0, .5],
            height: [Config.WORLD_HEIGHT - 1, Config.WORLD_HEIGHT - 1],
            divider: 2,
            block: Manty
        },

        // > Caves
        {
            height: [5, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
            block: null,
            rules: caveRules
        },
    ];
    
}