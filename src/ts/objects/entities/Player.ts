import { Config } from "../../config";
import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Direction } from "../../types";
import { Entity } from "./Entity";
import { Ore } from "../ores/Ore";
import { RawType } from "../raws/Raw";

// > 5 is "god tool"
export type ToolLevel = 1 | 2 | 3 | 4 | 5;
export type Tool = {
    speed: number,
    damage: number
}

const tools: { [key: string]: Tool }  = {
    "1": {
        speed: 16,
        damage: 2
    },
    "2": {
        speed: 12,
        damage: 3
    },
    "3": {
        speed: 14,
        damage: 8
    },
    "4": {
        speed: 10,
        damage: 6
    },
    "5": {
        speed: 5,
        damage: 20
    },
}

export class Player extends Entity {
    wire: Vector2
    inventory: {
        totalCount: number
        [key: string]: number
    }
    toolLevel: ToolLevel
    
    constructor() {
        super("player", "player-stay", {
            position: new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2, -Config.SPRITE_SIZE)
        });
    
        this.wire = Vector2.zero();
        this.inventory = {
            totalCount: 0
        };
        // ! God tool
        this.toolLevel = 5;
    }
    
    init(game: Game) {
        super.init(game);
        
        this.collider.width = 10 * Config.SPRITE_SCALE;
        this.collider.height = 10 * Config.SPRITE_SCALE;
        this.collider.offset = new Vector2(3, 0);
    }

    dig(game: Game, direction: Direction) {
        
        if (this.collider.collidesWith != null && this.collider.collidesWith.any) {
            const ore = game.getChildById<Ore>(this.collider.collidesWith.id, true);
            const tool = tools[this.toolLevel.toString()];

            if (ore == undefined) return;

            if (this.collider.collidesWith[direction] && this.position.distance(ore.position) < Config.SPRITE_SIZE * 2 && game.clock.elapsed % tool.speed == 0) {
                ore.hit(game, tool.damage, this);

                if (direction == "right")
                    this.offset = new Vector2(10, 0);
                else if (direction == "left")
                    this.offset = new Vector2(-10, 0);
                else if (direction == "top")
                    this.offset = new Vector2(0, -10);
                else if (direction == "bottom")
                    this.offset = new Vector2(0, 10);
            }

        }
        this.collider.collidesWith = null;

    }

    update(game: Game) {
        super.update(game);

        this.movement.set((+game.gamepad.keys.right - +game.gamepad.keys.left), (+game.gamepad.keys.down - +game.gamepad.keys.up));
        this.move();
        this.pullWire();

        if (this.movement.x != 0)
            this.dig(game, this.movement.x > 0 ? "right" : "left");
        else if (this.movement.y != 0)
            this.dig(game, this.movement.y > 0 ? "bottom" : "top");

        this.offset.lerp(Vector2.zero(), .2);

        this.bounds();
    }

    bounds() {
        if (this.position.y < -Config.GROUND_HEIGHT) {
            this.position.y = -Config.GROUND_HEIGHT;
        }
        if (this.position.y < 0) {
            const clampX = Config.DOME_DIAMETER / 2;
            if (this.position.x < Config.WORLD_X_CENTER - clampX + 40)
                this.position.x = Config.WORLD_X_CENTER - clampX + 40;
            if (this.position.x > Config.WORLD_X_CENTER + clampX - 40)
                this.position.x = Config.WORLD_X_CENTER + clampX - 40;
        }
    }
    
    pickup(game: Game, type: RawType, count: number) {
        this.inventory.totalCount += count;
        if (this.inventory[type])
            this.inventory[type] += count;
        else
            this.inventory[type] = count;
    }
    pullWire() {
        
        if (this.position.distance(this.wire) > Config.WIRE_LENGTH) {
            this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed)));
        }

    }
}