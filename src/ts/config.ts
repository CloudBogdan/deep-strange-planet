import { ToolLevel } from "./objects/entities/Player";
import { GearLevel } from "./objects/gear/Gear";

export const VERSION = "1.2.1";
export enum Config {
    ALLOW_DARK = 1, // ! IS DEV!
    IS_DEV = 0, // ! IS DEV!
    TEST_GEARS = 0, // ! IS DEV!
    ALLOW_HUNK = 0, // ! IS DEV!
    
    // World size and chunks size in blocks
    WORLD_WIDTH = 140,
    WORLD_HEIGHT = 320,
    CHUNK_SIZE = 4,
    
    SPRITE_SCALE = 5,
    SPRITE_PIXEL_SIZE = 16,
    SPRITE_SIZE = SPRITE_PIXEL_SIZE * SPRITE_SCALE,
    PARTICLES_GRAVITY = .4,
    WORLD_X_CENTER = WORLD_WIDTH * SPRITE_SIZE / 2, // In pixels

    HOME_POSITION_X = Math.floor(WORLD_X_CENTER),
    HOME_POSITION_Y = -Config.SPRITE_SIZE * 1.5,

    OXYGEN_GENERATOR_BATTERY_DEFUSE_TICK = 400,
    OXYGEN_GENERATOR_OXYGEN_DEFUSE_TICK = 250,

    VINE_GROW_TICK = IS_DEV ? 100 : 220,
    VINE_GROW_CHANCE = IS_DEV ? 60 : 12,
    VINE_MIN_LENGTH = 4,
    VINE_MAX_LENGTH = 8,

    MAX_STALACTITE_LENGTH = 4,
    STALACTITE_GROW_TICK = 300,
    STALACTITE_GROW_CHANCE = 10,

    INFECTION_GROW_TICK = IS_DEV ? 100 : 200,
    INFECTION_GROW_CHANCE = IS_DEV ? 100 : 12,
    
    ROBOT_PICKUP_DISTANCE = SPRITE_SIZE,
    ROBOT_DAMAGE = 4,
    ROBOT_HIT_SPEED = 10,
    ROBOT_ALLOW_PICKUP_DELAY = 20,

    PICKUP_DISTANCE = 50,
    WIRE_LENGTH = 60,
    GEAR_INTERACT_DISTANCE = 85,
    DOME_DIAMETER = SPRITE_SIZE * 6,
    GROUND_HEIGHT = SPRITE_SIZE * 2,
    OXYGEN_HUNGRY_TIME = IS_DEV ? 4 : 60,
    GPS_MARKERS_DISTANCE = 400,
    MAX_GPS_MARKERS = 20,
    
    ITEMS_LIVE_TIME = 800,
    ORE_FALL_DELAY = 30,
    DEFAULT_ANIMATION_SPEED = 8,
    RESPAWN_TIME = IS_DEV ? 4 : 12
}
export enum GeneratorConfig {
    LAYERS_BLEND_HEIGHT = 10,
    DEEP_STONE_LAYER_HEIGHT = 70,
    BASALT_LAYER_HEIGHT = 190,
    BURNT_BASALT_LAYER_HEIGHT = Config.WORLD_HEIGHT - 5,
}
export enum Color {
    STONE_LAYER_COLOR = "#090d23",
    BASALT_LAYER_COLOR = "#1b1d27",
    BURNT_BASALT_LAYER_COLOR = "#040508",

    WHITE = "#fff",
    BLACK = "#0f1531",
    GREY = "#2c2f3d",
    DARK_GREY = "#13151e",
    YELLOW = "#fbc67e",
    ORANGE = "#ff935c",
    BLUE = "#b9c5ff",
    RED = "#fb7e88",
    GREEN = "#6aff81",
    YELLOW_LIGHT = "#fde3bf",
    BLUE_LIGHT = "#e0e6ff",
    RED_LIGHT = "#f9cace",
    GREEN_LIGHT = "#d4ffdb",
}
export const OreSettings: { [key: string]: { hp: number, tool?: ToolLevel } } = {
    "stone": { hp: 10 },
    "stony-ground": { hp: 8 },
    "antin": { hp: 52, tool: 3 },
    "basalt": { hp: 40, tool: 3 },
    "burnt-basalt": { hp: 80, tool: 4 },
    "manty": { hp: 108, tool: 4 },
    "cidium": { hp: 20 },
    "cracked-stone": { hp: 6 },
    "deep-stone": { hp: 26, tool: 2 },
    "osmy": { hp: 36, tool: 2 },
    "nerius": { hp: 32, tool: 2 },
    "rady": { hp: 58, tool: 4 },
    "root-stone": { hp: 14 },
    "mushroom-stone": { hp: 32, tool: 3 },
    "stalactite": { hp: 26, tool: 2 },
}
export const ItemSettings: { [key: string]: { lineColor: Color, storage: GearLevel } } = {
    "raw-cidium": {
        lineColor: Color.YELLOW_LIGHT,
        storage: 1
    },
    "raw-grade-cidium": {
        lineColor: Color.YELLOW_LIGHT,
        storage: 1
    },
    "raw-osmy": {
        lineColor: Color.BLUE_LIGHT,
        storage: 1
    },
    "raw-antin": {
        lineColor: Color.RED_LIGHT,
        storage: 3
    },
    "raw-rady": {
        lineColor: Color.GREEN_LIGHT,
        storage: 3
    },
    "raw-nerius": {
        lineColor: Color.WHITE,
        storage: 2
    },
    "raw-manty": {
        lineColor: Color.RED_LIGHT,
        storage: 3
    },
}