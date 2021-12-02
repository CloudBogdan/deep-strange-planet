import { Config } from "../../config";
import { Game } from "../../engine";
import { asImage, Vector2 } from "../../engine/utils/math";
import { MaxToolLevel } from "../entities/Player";
import { RobotItem } from "../item/RobotItem";
import { MaxGearLevel } from "./Gear";
import { Recipe, Recycler } from "./Recycler";

const recipes = (recycler: Recycler)=> ({
    // Storage up
    "storage-level-up": new Recipe({
        recipe: ()=> [
            { "raw-cidium": { count: 1 }, "raw-osmy": { count: 1 } }, // Level 2
            // { "raw-cidium": { count: 8 }, "raw-osmy": { count: 2 } }, // Level 2
            { "raw-cidium": { count: 12 }, "raw-osmy": { count: 6 }, "raw-grade-cidium": { count: 2 } }, // Level 3
        ][recycler.storage.level - 1] as any,
        // On craft
        onCraft: (game: Game)=> {
            recycler.storage.upgrade(1);
        },
        // Render icon
        icon: (game, pos, opacity)=> {
            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("gear-storage-1")),
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
    "tool-level-up": new Recipe({
        recipe: ()=> [
            { "raw-cidium": { count: 14 }  }, // Level 2
            { "raw-cidium": { count: 14 }, "raw-osmy": { count: 4 }, "raw-grade-cidium": { count: 1 } }, // Level 3
            { "raw-cidium": { count: 12 }, "raw-osmy": { count: 8 }, "raw-antin": { count: 3 } }, // Level 4
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
        recipe: ()=> ({ "raw-osmy": { count: 8 }, "raw-antin": { count: 4 }, "raw-nerius": { count: 3 } } as any),
        onCraft: ()=> {
            if (!recycler.player) return

            recycler.player.hasBottle = true;
        },
        icon: (game, pos, opacity)=> {
            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("bottle")),
                position: pos,
                width: .8,
                height: .8,
                layer: "ui",
                framed: false,
                opacity
            });
        },
        isRemoved: ()=> recycler.player ? recycler.player.hasBottle : false
    }),

    // Craft robot
    "item-robot": new Recipe({
        recipe: ()=> ({ "raw-cidium": { count: 1 } } as any),
        // recipe: ()=> ({ "raw-osmy": { count: 6 }, "raw-cidium": { count: 12 }, "raw-nerius": { count: 5 } } as any),
        onCraft: (game)=> {
            game.add(new RobotItem(recycler.position))
            game.initChildren();
        },
        icon: (game, pos, opacity)=> {
            game.renderer.drawSprite({
                texture: asImage(game.getAssetByName("robot")),
                position: pos,
                layer: "ui",
                opacity
            });
        },
        isRemoved: ()=> recycler.player ? recycler.player.hasBottle : false
    }),
    
});

export default recipes;