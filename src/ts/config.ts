import { ToolLevel } from "./objects/entities/Player";

export enum Config {
    // World size and chunks size in blocks
    WORLD_WIDTH = 25,
    WORLD_HEIGHT = 225,
    CHUNK_SIZE = 4,
    
    SPRITE_SCALE = 5,
    SPRITE_PIXEL_SIZE = 16,
    SPRITE_SIZE = SPRITE_PIXEL_SIZE * SPRITE_SCALE,
    PARTICLES_GRAVITY = .4,
    WORLD_X_CENTER = WORLD_WIDTH * SPRITE_SIZE / 2, // In pixels

    ROBOT_PICKUP_DISTANCE = SPRITE_SIZE,
    ROBOT_DAMAGE = 4,
    ROBOT_HIT_SPEED = 10,

    PICKUP_DISTANCE = 50,
    WIRE_LENGTH = 60,
    GEAR_INTERACT_DISTANCE = 100,
    DOME_DIAMETER = SPRITE_SIZE * 6,
    GROUND_HEIGHT = SPRITE_SIZE * 2,
    
    ALLOW_DARK = 1,
    RAW_LIVE_TIME = 400,
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
    "cidium": { hp: 20 },
    "cracked-stone": { hp: 6 },
    "deep-stone": { hp: 26, tool: 2 },
    "osmy": { hp: 36, tool: 2 },
    "nerius": { hp: 32, tool: 2 },
    "rady": { hp: 58, tool: 4 },
}
export enum RawLineColor {
    "raw-cidium" = Color.YELLOW_LIGHT,
    "raw-grade-cidium" = Color.YELLOW_LIGHT,
    "raw-osmy" = Color.BLUE_LIGHT,
    "raw-antin" = Color.RED_LIGHT,
    "raw-rady" = Color.GREEN_LIGHT,
    "raw-nerius" = Color.WHITE,
}