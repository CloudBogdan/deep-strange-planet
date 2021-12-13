import { Config } from "../../config";
import { Game } from "../../engine";
import { asImage, Vector2 } from "../../engine/utils/math";
import { MaxToolLevel } from "../entities/Player";
import { RobotItem } from "../item/RobotItem";
import { MaxGearLevel } from "./Gear";
import { Recipe, Recycler } from "./Recycler";

const recipes = (recycler: Recycler)=> ({

    // Craft ready cidium
    "ready-cidium": new Recipe({
        recipe: ()=> ({
            "raw-cidium": { count: 2 },
        }),
    }),

    // Craft battery
    "battery": new Recipe({
        recipe: ()=> ({
            "ready-cidium": { count: 1 },
            "raw-cidium": { count: 2 },
        }),
    }),

    // Craft drill
    "drill": new Recipe({
        recipe: ()=> ({
            // "ready-cidium": { count: 1 },
            "ready-cidium": { count: 2 },
            "raw-nerius": { count: 2 },
        }),
    }),

    // Craft box
    "box": new Recipe({
        recipe: ()=> ({
            "ready-cidium": { count: 1 },
            "raw-nerius": { count: 4 },
        }),
    }),

    // Craft card
    "card": new Recipe({
        recipe: ()=> ({
            "ready-cidium": { count: 2 },
            "raw-osmy": { count: 3 },
            "raw-grade-cidium": { count: 1 },
        }),
    }),
    
    // Storage up
    "recipe-storage-level-up": new Recipe({
        recipe: ()=> [
            { "ready-cidium": { count: 2 }, "raw-osmy": { count: 3 } }, // Level 2
            { "ready-cidium": { count: 4 }, "raw-osmy": { count: 3 }, "raw-grade-cidium": { count: 2 } }, // Level 3
        ][recycler.storage.level - 1] as any,
        // On craft
        onCraft: ()=> {
            recycler.storage.upgrade(1);
        },
        // Render icon
        icon: (game, pos, opacity)=> {
            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("storage-level-up")),
                position: pos,
                width: 2,
                height: 2,
                scale: Vector2.all(.7),
                layer: "ui",
                opacity
            });
            game.renderer.drawText({
                text: `${ recycler.storage.level + 1 }ур.`,
                position: pos.add(Vector2.all(Config.SPRITE_SIZE * .3)),
                layer: "ui",
            });
        },
        isRemoved: ()=> recycler.storage.level >= MaxGearLevel
    }),

    // Tool up
    "recipe-tool-level-up": new Recipe({
        recipe: ()=> [
            { "ready-cidium": { count: 3 }  }, // Level 2
            { "ready-cidium": { count: 2 }, "card": { count: 1 }, "raw-grade-cidium": { count: 1 } }, // Level 3
            { "ready-cidium": { count: 3 }, "raw-osmy": { count: 4 }, "drill": { count: 1 }, "raw-antin": { count: 3 } }, // Level 4
        ][recycler.player ? recycler.player?.toolLevel - 1 : 0] as any,
        onCraft: ()=> {
            if (!recycler.player) return;

            recycler.player.upgradeTool(1);
        },
        icon: (game, pos, opacity)=> {
            if (!recycler.player) return;

            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("tools")),
                position: pos,
                layer: "ui",
                opacity
            });
            game.renderer.drawText({
                text: `${ recycler.player.toolLevel + 1 }ур.`,
                position: pos.add(Vector2.all(Config.SPRITE_SIZE * .3)),
                layer: "ui",
            });
        },
        isRemoved: ()=> recycler.player ? recycler.player.toolLevel >= MaxToolLevel : false
    }),

    // Craft bottle
    "bottle": new Recipe({
        recipe: ()=> ({
            "ready-cidium": { count: 3 },
            "box": { count: 1 },
            "raw-antin": { count: 4 },
            "raw-grade-cidium": { count: 2 }
        }),
        onCraft: ()=> {
            if (!recycler.player) return
            recycler.player.hasBottle = true;
        },
        isRemoved: ()=> recycler.player ? recycler.player.hasBottle : false
    }),

    // Craft robot
    "item-robot": new Recipe({
        recipe: ()=> ({
            "battery": { count: 1 },
            "drill": { count: 1 },
            "box": { count: 1 },
            "card": { count: 1 }
        }),
        isRemoved: ()=> recycler.player ? recycler.player.hasBottle : false
    }),
    
});

export default recipes;