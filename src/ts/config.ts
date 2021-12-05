import { ToolLevel } from "./objects/entities/Player";
import { GearLevel } from "./objects/gear/Gear";

export enum Config {
    ALLOW_DARK = 1,
    IS_DEV = 1, // ! IS DEV!!!!
    
    // World size and chunks size in blocks
    WORLD_WIDTH = 82,
    WORLD_HEIGHT = 225,
    CHUNK_SIZE = 4,
    
    SPRITE_SCALE = 5,
    SPRITE_PIXEL_SIZE = 16,
    SPRITE_SIZE = SPRITE_PIXEL_SIZE * SPRITE_SCALE,
    PARTICLES_GRAVITY = .4,
    WORLD_X_CENTER = WORLD_WIDTH * SPRITE_SIZE / 2, // In pixels

    VINE_GROW_TICK = 180,
    VINE_GROW_CHANCE = 20,
    VINE_MIN_LENGTH = 4,
    VINE_MAX_LENGTH = 8,

    INFECTION_GROW_TICK = 100,
    INFECTION_GROW_CHANCE = 100,
    
    ROBOT_PICKUP_DISTANCE = SPRITE_SIZE,
    ROBOT_DAMAGE = 4,
    ROBOT_HIT_SPEED = 10,
    ROBOT_ALLOW_PICKUP_DELAY = 20,

    PICKUP_DISTANCE = 50,
    WIRE_LENGTH = 60,
    GEAR_INTERACT_DISTANCE = 85,
    DOME_DIAMETER = SPRITE_SIZE * 6,
    GROUND_HEIGHT = SPRITE_SIZE * 2,
    OXYGEN_HUNGRY_TIME = 3550,
    
    ITEMS_LIVE_TIME = 800,
    ORE_FALL_DELAY = 30,
    DEFAULT_ANIMATION_SPEED = 8,
}
export enum GeneratorConfig {
    LAYERS_BLEND_HEIGHT = 10,
    BASALT_LAYER_HEIGHT = 150,
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