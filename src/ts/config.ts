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
export enum Color {
    GROUND_COLOR = "#090d23",
    BLACK = "#0f1531",
    YELLOW = "#fbc67e",
    YELLOW_LIGHT = "#fde3bf",
    BLUE_LIGHT = "#e0e6ff",
}
export enum RawLineColor {
    "raw-cidium" = Color.YELLOW_LIGHT,
    "raw-grade-cidium" = Color.YELLOW_LIGHT,
    "raw-osmy" = Color.BLUE_LIGHT,
}
// > -1 is unbreakable
export enum OreHp {
    "stone" = 10,
    "deep-stone" = 20,
    "destrony" = -1,
    "cracked-stone" = 6,
    "cidium" = 20,
    "osmy" = 36,
}