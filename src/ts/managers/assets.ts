import { Game } from "../engine"; // @ts-ignore
// I can't setup declare module :(
// > Player
import player_stay_img from "../../images/player/stay.png"; // @ts-ignore
import player_walk_img from "../../images/player/walk.png"; // @ts-ignore

// > Entities
import robot_img from "../../images/entities/robot.png"; // @ts-ignore

// > Stones
import stone_img from "../../images/ores/stone.png"; // @ts-ignore
import stony_ground_img from "../../images/ores/stony-ground.png"; // @ts-ignore
import basalt_img from "../../images/ores/basalt.png"; // @ts-ignore
import deep_stone_img from "../../images/ores/deep-stone.png"; // @ts-ignore
import burnt_basalt_img from "../../images/ores/burnt-basalt.png"; // @ts-ignore
import destrony_img from "../../images/ores/destrony.png"; // @ts-ignore
import manty_img from "../../images/ores/manty.png"; // @ts-ignore
import fetus_stone_img from "../../images/ores/fetus-stone.png"; // @ts-ignore
import mushroom_stone_img from "../../images/ores/mushroom-stone.png"; // @ts-ignore
import cracked_stone_img from "../../images/ores/cracked-stone.png"; // @ts-ignore

// > Ores
import cidium_img from "../../images/ores/cidium.png"; // @ts-ignore
import osmy_img from "../../images/ores/osmy.png"; // @ts-ignore
import antin_img from "../../images/ores/antin.png"; // @ts-ignore
import rady_img from "../../images/ores/rady.png"; // @ts-ignore
import nerius_img from "../../images/ores/nerius.png"; // @ts-ignore

// > Raw
import raw_cidium_img from "../../images/raw/raw-cidium.png"; // @ts-ignore
import raw_grade_cidium_img from "../../images/raw/raw-grade-cidium.png"; // @ts-ignore
import raw_osmy_img from "../../images/raw/raw-osmy.png"; // @ts-ignore
import raw_antin_img from "../../images/raw/raw-antin.png"; // @ts-ignore
import raw_rady_img from "../../images/raw/raw-rady.png"; // @ts-ignore
import raw_nerius_img from "../../images/raw/raw-nerius.png"; // @ts-ignore
import raw_manty_img from "../../images/raw/raw-manty.png"; // @ts-ignore

// > Ready
import ready_cidium_img from "../../images/ready/ready-cidium.png"; // @ts-ignore

// > Items
import battery_img from "../../images/items/battery.png"; // @ts-ignore
import drill_img from "../../images/items/drill.png"; // @ts-ignore

// > Plants
import fetus_vine_img from "../../images/flora/fetus-vine.png"; // @ts-ignore
import mushroom_img from "../../images/flora/mushroom.png"; // @ts-ignore
import infection_img from "../../images/flora/infection.png"; // @ts-ignore
import datura_img from  "../../images/flora/datura.png"; // @ts-ignore
import datura_tongue_img from  "../../images/flora/datura-tongue.png"; // @ts-ignore

// > Food
import food_fetus_img from "../../images/food/food-fetus.png"; // @ts-ignore

// > Environment
import ground_img from "../../images/environment/ground.png"; // @ts-ignore
import dome_img from "../../images/environment/dome.png"; // @ts-ignore
import under_stone_img from "../../images/environment/under-stone.png"; // @ts-ignore
import disputes_img from "../../images/environment/disputes.png"; // @ts-ignore

// > Gear
import gear_storage_1_img from "../../images/gear/gear-storage-1.png"; // @ts-ignore
import gear_recycler_1_img from "../../images/gear/gear-recycler-1.png"; // @ts-ignore
import gear_oxygen_generator_1_img from "../../images/gear/gear-oxygen-generator-1.png"; // @ts-ignore
import gear_storage_1_outline_img from "../../images/gear/gear-storage-1-outline.png"; // @ts-ignore
import gear_recycler_1_outline_img from "../../images/gear/gear-recycler-1-outline.png"; // @ts-ignore
import gear_oxygen_generator_1_outline_img from "../../images/gear/gear-oxygen-generator-1-outline.png"; // @ts-ignore

// > UI
import interact_img from "../../images/ui/interact.png"; // @ts-ignore
import close_img from "../../images/ui/close.png"; // @ts-ignore
import drop_img from "../../images/ui/drop.png"; // @ts-ignore
import craft_img from "../../images/ui/craft.png"; // @ts-ignore
import button_img from "../../images/ui/button.png"; // @ts-ignore
import tools_img from "../../images/ui/tools.png"; // @ts-ignore
import bottle_img from "../../images/ui/bottle.png"; // @ts-ignore
import damage_img from "../../images/ui/damage.png"; // @ts-ignore
import level_up_img from "../../images/ui/level-up.png"; // @ts-ignore
import storage_ui_img from "../../images/ui/storage-ui.png"; // @ts-ignore
import recycler_ui_img from "../../images/ui/recycler-ui.png"; // @ts-ignore
import description_ui_img from "../../images/ui/description-ui.png"; // @ts-ignore
import oxygen_generator_ui_img from "../../images/ui/oxygen-generator-ui.png"; // @ts-ignore

// > Audio
import stone_hit_mp from "../../audio/stone-hit.mp3"; // @ts-ignore
import stone_break1_mp from "../../audio/stone-break/stone-break-1.mp3"; // @ts-ignore
import stone_break2_mp from "../../audio/stone-break/stone-break-2.mp3"; // @ts-ignore
import stone_break3_mp from "../../audio/stone-break/stone-break-3.mp3"; // @ts-ignore
import fall_stone_break_mp from "../../audio/stone-break/fall-stone-break.mp3"; // @ts-ignore
import plant_break_mp from "../../audio/plants/plant-break.mp3"; // @ts-ignore
import plant_hit_mp from "../../audio/plants/plant-hit.mp3"; // @ts-ignore
import wave_mp from "../../audio/plants/wave.mp3"; // @ts-ignore
import bonk_mp from "../../audio/bonk.mp3"; // @ts-ignore
import hit_mp from "../../audio/hit/hit.mp3"; // @ts-ignore

import step1_mp from "../../audio/steps/1.mp3"; // @ts-ignore
import step2_mp from "../../audio/steps/2.mp3"; // @ts-ignore
import step3_mp from "../../audio/steps/3.mp3"; // @ts-ignore

import storage_mp from "../../audio/gear/storage.mp3"; // @ts-ignore
import store_mp from "../../audio/gear/store.mp3"; // @ts-ignore
import crafting_mp from "../../audio/gear/craft.mp3"; // @ts-ignore
import error_mp from "../../audio/gear/error.mp3"; // @ts-ignore

import motor_mp from "../../audio/robot/motor.mp3"; // @ts-ignore
import motor_start_mp from "../../audio/robot/motor-start.mp3"; // @ts-ignore

export function initAssets(game: Game) {
    
    // > Player
    game.loadAsset("player-stay", [player_stay_img]);
    game.loadAsset("player-walk", [player_walk_img]);

    // > Entities
    game.loadAsset("robot", [robot_img]);

    // > Stones
    game.loadAsset("stone", [stone_img]);
    game.loadAsset("stony-ground", [stony_ground_img]);
    game.loadAsset("basalt", [basalt_img]);
    game.loadAsset("deep-stone", [deep_stone_img]);
    game.loadAsset("burnt-basalt", [burnt_basalt_img]);
    game.loadAsset("destrony", [destrony_img]);
    game.loadAsset("manty", [manty_img]);
    game.loadAsset("fetus-stone", [fetus_stone_img]);
    game.loadAsset("mushroom-stone", [mushroom_stone_img]);
    game.loadAsset("cracked-stone", [cracked_stone_img]);

    // > Ores
    game.loadAsset("cidium", [cidium_img]);
    game.loadAsset("osmy", [osmy_img]);
    game.loadAsset("antin", [antin_img]);
    game.loadAsset("rady", [rady_img]);
    game.loadAsset("nerius", [nerius_img]);

    // > Raws
    game.loadAsset("raw-cidium", [raw_cidium_img]);
    game.loadAsset("raw-grade-cidium", [raw_grade_cidium_img]);
    game.loadAsset("raw-osmy", [raw_osmy_img]);
    game.loadAsset("raw-antin", [raw_antin_img]);
    game.loadAsset("raw-rady", [raw_rady_img]);
    game.loadAsset("raw-nerius", [raw_nerius_img]);
    game.loadAsset("raw-manty", [raw_manty_img]);

    // > Ready
    game.loadAsset("ready-cidium", [ready_cidium_img]);

    // > Items
    game.loadAsset("battery", [battery_img]);
    game.loadAsset("drill", [drill_img]);

    // > Plants
    game.loadAsset("fetus-vine", [fetus_vine_img]);
    game.loadAsset("mushroom", [mushroom_img]);
    game.loadAsset("datura", [datura_img]);
    game.loadAsset("datura-tongue", [datura_tongue_img]);
    game.loadAsset("infection", [infection_img]);

    // > Food
    game.loadAsset("food-fetus", [food_fetus_img]);
    
    // > Environment
    game.loadAsset("ground", [ground_img])
    game.loadAsset("dome", [dome_img])
    game.loadAsset("under-stone", [under_stone_img]);
    game.loadAsset("disputes", [disputes_img])

    // > Gear
    game.loadAsset("gear-storage-1", [gear_storage_1_img])
    game.loadAsset("gear-recycler-1", [gear_recycler_1_img])
    game.loadAsset("gear-oxygen-generator-1", [gear_oxygen_generator_1_img])
    game.loadAsset("gear-storage-1-outline", [gear_storage_1_outline_img])
    game.loadAsset("gear-recycler-1-outline", [gear_recycler_1_outline_img])
    game.loadAsset("gear-oxygen-generator-1-outline", [gear_oxygen_generator_1_outline_img])

    // > UI
    game.loadAsset("interact", [interact_img])
    game.loadAsset("close", [close_img])
    game.loadAsset("drop", [drop_img])
    game.loadAsset("craft", [craft_img])
    game.loadAsset("button", [button_img])
    game.loadAsset("tools", [tools_img])
    game.loadAsset("bottle", [bottle_img])
    game.loadAsset("damage", [damage_img])
    game.loadAsset("storage-ui", [storage_ui_img])
    game.loadAsset("level-up", [level_up_img])
    game.loadAsset("recycler-ui", [recycler_ui_img])
    game.loadAsset("description-ui", [description_ui_img])
    game.loadAsset("oxygen-generator-ui", [oxygen_generator_ui_img])

    // > Audio
    game.loadAsset("stone-hit", stone_hit_mp, "audio")
    game.loadAsset("stone-break-1", stone_break1_mp, "audio")
    game.loadAsset("stone-break-2", stone_break2_mp, "audio")
    game.loadAsset("stone-break-3", stone_break3_mp, "audio")
    game.loadAsset("fall-stone-break", fall_stone_break_mp, "audio")
    game.loadAsset("plant-break", plant_break_mp, "audio")
    game.loadAsset("plant-hit", plant_hit_mp, "audio")
    game.loadAsset("wave", wave_mp, "audio")
    game.loadAsset("bonk", bonk_mp, "audio")
    game.loadAsset("hit", hit_mp, "audio")

    game.loadAsset("step-1", step1_mp, "audio")
    game.loadAsset("step-2", step2_mp, "audio")
    game.loadAsset("step-3", step3_mp, "audio")
    game.loadAsset("storage", storage_mp, "audio")
    game.loadAsset("error", error_mp, "audio")
    
    game.loadAsset("store", store_mp, "audio")
    game.loadAsset("crafting", crafting_mp, "audio")

    game.loadAsset("motor", motor_mp, "audio")
    game.loadAsset("motor-start", motor_start_mp, "audio")

}