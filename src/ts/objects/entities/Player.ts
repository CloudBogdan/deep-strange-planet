import { Config } from "../../config";
import { Game } from "../../engine";
import { asAudio, asImage, assetIsValid, compareNames, lerp, random, Vector2 } from "../../engine/utils/math";
import { Direction } from "../../types";
import { Entity } from "./Entity";
import { Ore } from "../ores/Ore";
import { Raw, RawType } from "../raws/Raw";
import { Renderer } from "../../engine/Renderer";
import { Item } from "../item/Item";
import { Robot } from "./Robot";
import { Sound } from "../../engine/components/Sound";

// > 5 is "god tool"
export type ToolLevel = 1 | 2 | 3 | 4 | 5 | 6;
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
    "6": {
        speed: 16,
        damage: 2
    },
}

export class Player extends Entity {
    // ambientSound: Sound | null
    // ambientIsPlaying: boolean
    
    wire: Vector2
    inventory: {
        totalCount: number
        slots: {
            [key: string]: {
                count: number
                instances: Item[]
            }
        }
    }
    toolLevel: ToolLevel
    hasBottle: boolean
    allowPlaceRobot: boolean

    damageAnimatedOpacity: number
    
    constructor() {
        super("player", "player-stay", {
            position: new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2, -Config.SPRITE_SIZE)
        });
        
        // this.ambientSound = null;
        // this.ambientIsPlaying = false;

        this.wire = this.position.expand();
        this.inventory = {
            totalCount: 0,
            slots: {}
        };
        this.hasBottle = false;
        this.toolLevel = 6;
        this.allowPlaceRobot = false;

        this.damageAnimatedOpacity = 0;

        window.addEventListener("keydown", e=> {
            if (e.code == "KeyT") {
                this.moveSpeed = this.moveSpeed == 5 ? 90 : 5;
                this.collider.collidable = !this.collider.collidable;
            }
        })
    }
    
    init() {
        super.init();
        
        this.collider.width = 10 * Config.SPRITE_SCALE;
        this.collider.height = 10 * Config.SPRITE_SCALE;
        this.collider.offset = new Vector2(3, 0);

        // Set robot
        this.game.gamepad.onKeyDown(this.id, "enter", ()=> {
            if (this.checkItemInInventory("item-robot") && this.allowPlaceRobot)
                this.placeRobot();
        });
    }

    update() {
        super.update();
        if (!this.allowMove) return;

        this.movement.set(
            (+this.game.gamepad.keys.right - +this.game.gamepad.keys.left),
            (+this.game.gamepad.keys.down - +this.game.gamepad.keys.up)
        );
        this.move();
        this.pullWire();

        // Sounds
        this.footsStep();
        // this.ambient();

        // Slow
        // this.moveSpeed = this.checkItemInInventory("raw-nerius") ? 2 : 5;
        
        // Dig
        const tool = tools[this.toolLevel.toString()];

        if (this.movement.x != 0)
            this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.x > 0 ? "right" : "left");
        else if (this.movement.y != 0)
            this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.y > 0 ? "bottom" : "top");

        //
        this.damageAnimatedOpacity = lerp(this.damageAnimatedOpacity, 0, .05);

        this.bounds();
    }
    render() {
        super.render();
        
        this.renderUI();    
    }
    renderUI() {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2);

        this.allowPlaceRobot = this.position.y > 20;
        
        // Place robot text
        if (this.checkItemInInventory("item-robot") && this.allowPlaceRobot)
            this.game.renderer.drawText({
                text: "[OK] - установить",
                position: new Vector2(0, 150).add(windowCenter),
                layer: "ui"
            });
        
        // Tool level
        this.game.renderer.drawSprite({
            texture: asImage(this.game.getAssetByName("tools")),
            position: new Vector2(size, innerHeight - size),
            layer: "ui"
        });
        this.game.renderer.drawText({
            text: this.toolLevel + "ур.",
            position: new Vector2(size, innerHeight - size).add(Vector2.all(size * .3)),
            font: "22px Pixel",
            layer: "ui"
        });

        // Bottle
        if (this.hasBottle)
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName("bottle")),
                position: new Vector2(size * 2 + 20, innerHeight - size),
                layer: "ui"
            })

        // Damage vignette
        this.game.renderer.drawSprite({
            texture: asImage(this.game.getAssetByName("damage")),
            width: innerWidth / Config.SPRITE_SIZE,
            height: innerHeight / Config.SPRITE_SIZE,
            position: new Vector2(innerWidth / 2, innerHeight / 2),
            layer: "ui",
            opacity: this.damageAnimatedOpacity
        });
    }

    bounds() {
        // World bounds
        const worldWidth = Math.floor((Config.WORLD_WIDTH * Config.SPRITE_SIZE));
        
        // By width
        if (this.position.x < 0)
            this.position.x = 0
        else if (this.position.x > worldWidth)
            this.position.x = worldWidth
        
        // Dome bounds
        const halfDiameter = Config.DOME_DIAMETER / 2;

        if (this.position.x > Config.WORLD_X_CENTER - halfDiameter + 40 && this.position.x < Config.WORLD_X_CENTER + halfDiameter - 40) {
            if (this.position.y < -Config.SPRITE_SIZE / 2) {
        
                if (this.position.y < -Config.GROUND_HEIGHT) {
                    this.position.y = -Config.GROUND_HEIGHT;
                }
                if (this.position.x < Config.WORLD_X_CENTER - halfDiameter + 48)
                    this.position.x = Config.WORLD_X_CENTER - halfDiameter + 48;
                if (this.position.x > Config.WORLD_X_CENTER + halfDiameter - 48)
                    this.position.x = Config.WORLD_X_CENTER + halfDiameter - 48;

            }

        } else {
            // By height
            if (this.position.y < -Config.SPRITE_SIZE / 2)
                this.position.y = -Config.SPRITE_SIZE / 2;
        }
    }

    // ambient() {
    //     if (!this.game.tick(100)) return;

    //     this.game.getChildrenByName<Ore>("ore").filter(ore=> ore.oreType == "fetus-stone").map(ore=> {
    //         if (this.position.distance(ore.position) < 300 && !this.ambientSound) {
    //             this.ambientSound = new Sound();
    //             this.ambientSound.play(this.game, "wave", 1, true);
    //             this.ambientIsPlaying = true;
    //         }
    //         if (this.position.distance(ore.position) > 300 && this.ambientIsPlaying) {
    //             this.ambientSound
    //         }
    //     });

    // }
    
    pickup(item: Item, type: string, count: number) {
        this.inventory.totalCount += count;

        this.inventory.slots[type] = this.inventory.slots[type] || { count: 0, instances: [] };
        this.inventory.slots[type].count += count;
        const instances = this.inventory.slots[type].instances;
        this.inventory.slots[type].instances.push(item);
            
        this.inventory.slots[type].instances = instances.filter((i, index)=> instances.indexOf(i) == index);
    }
    pullWire() {
        
        if (this.position.distance(this.wire) > Config.WIRE_LENGTH) {
            this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed)));
        }

    }
    hit(damage: number) {
        super.hit(damage);

        this.damageAnimatedOpacity = 1.5;
        this.game.camera.shake();
        this.sound.play(this.game, "bonk");

        if (this.hp <= 0) {
            this.position = new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2, -Config.SPRITE_SIZE);
            this.hp = 10;
            this.wire.copy(this.position);
        }
    }
    upgradeTool(levelUp: number) {
        if (this.toolLevel < MaxToolLevel)
            this.toolLevel += levelUp;
    }
    checkItemInInventory(name: string) {
        return this.inventory.slots[name] && this.inventory.slots[name].count > 0
    }
    placeRobot() {
        if (this.checkItemInInventory("item-robot")) {
        
            // Sub. robots count in inventory
            this.inventory.slots["item-robot"].count --;

            // Remove robot inventory instance
            this.game.removeChildById(this.inventory.slots["item-robot"].instances[0].id);
            this.inventory.slots["item-robot"].instances.splice(0, 1);

        }
        
        // Place robot
        this.game.add(new Robot(this.position.div(Config.SPRITE_SIZE).add(Vector2.all(.5)).apply(Math.floor).mul(Config.SPRITE_SIZE)));
        this.game.initChildren();
    }
    footsStep() {

        const allow = 
            (this.velocity.x > 0 && !this.collider.collidesWith?.right) ||
            (this.velocity.x < 0 && !this.collider.collidesWith?.left) ||
            (this.velocity.y < 0 && !this.collider.collidesWith?.top) ||
            (this.velocity.y > 0 && !this.collider.collidesWith?.bottom)
        
        if (this.game.clock.elapsed % 20 == 0 && allow)
            this.sound.play(this.game, `step-${ Math.floor(random(1, 4)) }`, .3)

    }
}