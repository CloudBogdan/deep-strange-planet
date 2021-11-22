import { Config } from "../../config";
import { Game } from "../../engine";
import { asImage, Vector2 } from "../../engine/utils/math";
import { MaxToolLevel } from "../entities/Player";
import { MaxGearLevel } from "./Gear";
import { Recipe, Recycler } from "./Recycler";

const recipes = (recycler: Recycler)=> ({
    // Storage up
    "storage-level-up": new Recipe({
        recipe: ()=> [
            { "raw-cidium": 1, "raw-osmy": 1 }, // Level 2
            // { "raw-cidium": 6, "raw-osmy": 2 }, // Level 2
            { "raw-cidium": 12, "raw-osmy": 6, "raw-grade-cidium": 2 }, // Level 3
        ][recycler.storage.level - 1] as any,
        // On craft
        onCraft: (game: Game)=> {
            recycler.storage.upgrade(game, 1);
        },
        // Render icon
        icon: (game, pos)=> {
            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("gear-storage-1")),
                position: pos,
                width: 2,
                height: 2,
                scale: Vector2.all(.7),
                layer: "ui"
            });
            game.renderer.drawText({
                text: `${ recycler.storage.level + 1 }ур.`,
                position: pos.add(Vector2.all(Config.SPRITE_SIZE * .3)),
                layer: "ui"
            });
        },
        isRemoved: ()=> recycler.storage.level >= MaxGearLevel
    }),

    // Tool up
    "tool-level-up": new Recipe({
        recipe: ()=> [
            { "raw-cidium": 4  }, // Level 2
            { "raw-cidium": 14, "raw-osmy": 4, "raw-grade-cidium": 1 }, // Level 3
            { "raw-cidium": 2, "raw-osmy": 8, "raw-grade-cidium": 4, "raw-antin": 3 }, // Level 4
        ][recycler.player ? recycler.player?.toolLevel - 1 : 0] as any,
        onCraft: ()=> {
            if (!recycler.player) return;

            recycler.player.upgradeTool(1);
        },
        icon: (game, pos)=> {
            if (!recycler.player) return;

            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("tools")),
                position: pos,
                layer: "ui"
            });
            game.renderer.drawText({
                text: `${ recycler.player.toolLevel + 1 }ур.`,
                position: pos.add(Vector2.all(Config.SPRITE_SIZE * .3)),
                layer: "ui"
            });
        },
        isRemoved: ()=> recycler.player ? recycler.player.toolLevel >= MaxToolLevel : false
    }),

    // Craft bottle
    "bottle": new Recipe({
        recipe: ()=> ({ "raw-osmy": 8, "raw-antin": 4, "raw-nerius": 3 } as any),
        onCraft: ()=> {
            if (!recycler.player) return

            recycler.player.hasBottle = true;
        },
        icon: (game, pos)=> {
            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("bottle")),
                position: pos,
                width: .8,
                height: .8,
                layer: "ui"
            });
        },
        isRemoved: ()=> recycler.player ? recycler.player.hasBottle : false
    }),

    // Craft robot
    "robot": new Recipe({
        recipe: ()=> ({ "raw-osmy": 6, "raw-cidium": 12, "raw-nerius": 5 } as any),
        onCraft: ()=> {
            
        },
        icon: (game, pos)=> {
            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("robot-stay")),
                position: pos,
                layer: "ui"
            });
        },
        isRemoved: ()=> recycler.player ? recycler.player.hasBottle : false
    }),
    
});

export default recipes;