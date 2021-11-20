import { Config } from "../../config";
import { Game } from "../../engine";
import { asImage, assetIsValid, compareNames, lerp, Vector2 } from "../../engine/utils/math";
import { Direction } from "../../types";
import { Entity } from "./Entity";
import { Ore } from "../ores/Ore";
import { Raw, RawType } from "../raws/Raw";
import { Renderer } from "../../engine/Renderer";

// > 5 is "god tool"
export type ToolLevel = 1 | 2 | 3 | 4 | 5;
export const MaxToolLevel = 4;
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
        speed: 16,
        damage: 4
    },
    "3": {
        speed: 10,
        damage: 3
    },
    "4": {
        speed: 14,
        damage: 8
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
        slots: {
            [key: string]: {
                count: number
                instances: Raw[]
            }
        }
    }
    toolLevel: ToolLevel
    hasBottle: boolean

    damageAnimatedOpacity: number
    
    constructor() {
        super("player", "player-stay", {
            position: new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2, -Config.SPRITE_SIZE)
        });
    
        this.wire = this.position.expand();
        this.inventory = {
            totalCount: 0,
            slots: {}
        };
        this.hasBottle = false;
        // this.acceleration = Vector2.all(.7);
        // ! God
        // this.moveSpeed = 2;
        this.toolLevel = 5;

        this.damageAnimatedOpacity = 0;

        window.addEventListener("keydown", e=> {
            if (e.code == "KeyT") {
                this.moveSpeed = this.moveSpeed == 5 ? 90 : 5;
                this.collider.collidable = !this.collider.collidable;
            }
        })
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
        if (!this.allowMove) return;

        this.movement.set((+game.gamepad.keys.right - +game.gamepad.keys.left), (+game.gamepad.keys.down - +game.gamepad.keys.up));
        this.move();
        this.pullWire();

        if (this.movement.x != 0)
            this.dig(game, this.movement.x > 0 ? "right" : "left");
        else if (this.movement.y != 0)
            this.dig(game, this.movement.y > 0 ? "bottom" : "top");

        this.offset.lerp(Vector2.zero(), .2);
        this.damageAnimatedOpacity = lerp(this.damageAnimatedOpacity, 0, .05);

        this.bounds();
    }
    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        renderer.drawSprite({
            texture: asImage(game.getAssetByName("damage")),
            width: innerWidth / Config.SPRITE_SIZE,
            height: innerHeight / Config.SPRITE_SIZE,
            position: new Vector2(innerWidth / 2, innerHeight / 2),
            layer: "ui",
            opacity: this.damageAnimatedOpacity
        });
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
    
    pickup(game: Game, raw: Raw, type: RawType, count: number) {
        this.inventory.totalCount += count;

        this.inventory.slots[type] = this.inventory.slots[type] || { count: 0, instances: [] };
        this.inventory.slots[type].count += count;
        const instances = this.inventory.slots[type].instances;
        this.inventory.slots[type].instances.push(raw);
            
        this.inventory.slots[type].instances = instances.filter((i, index)=> instances.indexOf(i) == index);

    }
    pullWire() {
        
        if (this.position.distance(this.wire) > Config.WIRE_LENGTH) {
            this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed)));
        }

    }
    hit(game: Game, damage: number) {
        this.hp -= damage;
        this.damageAnimatedOpacity = 1.5;
        game.camera.shake();
    }
    upgradeTool(levelUp: number) {
        if (this.toolLevel < MaxToolLevel)
            this.toolLevel += levelUp;
    }
}