import { Config } from "../../config";
import { MaxToolLevel, Player } from "../entities/Player";
import { MaxGearLevel } from "./Gear";
import { Recipe, Recycler } from "./Recycler";

function recipes(recycler: Recycler): Recycler["recipes"] {

    // return {};
    // const player = recycler.game.getChildById<Player>("player");
    // if (!player) return {};
    
    return {

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
        "recipe-storage-upgrade": new Recipe({
            recipe: ()=> [
                { "ready-cidium": { count: 2 }, "raw-osmy": { count: 3 } }, // Level 2
                { "ready-cidium": { count: 4 }, "raw-osmy": { count: 3 }, "raw-grade-cidium": { count: 2 } }, // Level 3
            ][recycler.storage.level - 1] as any,
            // On craft
            onCraft: ()=> {
                recycler.storage.upgrade(1);
            },
            type: "upgrade",
            upgradeLevel: recycler.storage.level + 1,
            iconSize: 1.4,
            isRemoved: ()=> recycler.storage.level >= MaxGearLevel
        }),

        // Tool up
        "recipe-tools-upgrade": new Recipe({
            recipe: ()=> [
                { "ready-cidium": { count: 3 }  }, // Level 2
                { "ready-cidium": { count: 2 }, "card": { count: 1 }, "raw-grade-cidium": { count: 1 } }, // Level 3
                { "ready-cidium": { count: 3 }, "raw-osmy": { count: 4 }, "drill": { count: 1 }, "raw-antin": { count: 3 } }, // Level 4
            ][recycler.player.toolLevel - 1] as any,
            onCraft: ()=> {
                recycler.player.upgradeTool(1);
            },
            type: "upgrade",
            upgradeLevel: recycler.player.toolLevel + 1,
            isRemoved: ()=> recycler.player.toolLevel >= MaxToolLevel
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
                recycler.player.hasBottle = true;
            },
            isRemoved: ()=> recycler.player.hasBottle
        }),

        // Craft gps
        "gps": new Recipe({
            recipe: ()=> ({
                "ready-cidium": { count: 3 },
                "raw-osmy": { count: 2 },
                "box": { count: 1 },
                "card": { count: 1 },
            }),
            onCraft: ()=> {
                recycler.player.hasGps = true;
            },
            isRemoved: ()=> recycler.player.hasGps
        }),

        // Craft robot
        "item-robot": new Recipe({
            recipe: ()=> ({
                "battery": { count: 1 },
                "drill": { count: 1 },
                "box": { count: 1 },
                "card": { count: 1 }
            }),
        }),
    
    }
}


export default recipes;