import { Color, Config } from "../../config";
import { Game } from "../../engine";
import { asAudio, asImage, assetIsValid, chance, clamp, compareNames, lerp, random, safeValue, Vector2 } from "../../engine/utils/math";
import { Direction } from "../../types";
import { Entity } from "./Entity";
import { Ore } from "../ores/Ore";
import { Raw, RawType } from "../raws/Raw";
import { Renderer } from "../../engine/Renderer";
import { ItemParent } from "../item/ItemParent";
import { Robot } from "./Robot";
import { Sound } from "../../engine/components/Sound";
import { Food } from "../food/Food";
import { FetusStone } from "../ores/FetusStone";

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
    oxygenHungry: boolean
    oxygenHungryStartElapsed: number
    oxygenHungryElapsed: number
    
    wire: Vector2
    inventory: {
        totalCount: number
        slots: {
            [key: string]: {
                count: number
                instances: ItemParent[]
            }
        }
    }
    toolLevel: ToolLevel
    hasBottle: boolean
    allowPlaceRobot: boolean
    allowEatFood: boolean
    actionText: { [name: string]: string }
    actionType: "grab" | "place" | "eat" | null
    nearFetusStone: FetusStone | undefined;

    damageAnimatedOpacity: number
    animatedCameraRotation: number
    
    constructor() {
        super("player", "player-stay", {
            position: new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2, -Config.SPRITE_SIZE)
        });
    
        this.oxygenHungry = false;
        this.oxygenHungryStartElapsed = 0;
        this.oxygenHungryElapsed = 0;

        this.wire = this.position.expand();
        this.inventory = {
            totalCount: 0,
            slots: {}
        };
        this.hasBottle = false;
        this.toolLevel = Config.IS_DEV ? 1 : 1;
        this.allowPlaceRobot = false;
        this.allowEatFood = false;
        this.actionType = null;
        this.actionText = {
            "grab": "cобрать",
            "place": "установить",
            "eat": "съесть"
        }
        this.nearFetusStone = undefined;

        this.damageAnimatedOpacity = 0;
        this.animatedCameraRotation = 0;

        if (Config.IS_DEV)
            window.addEventListener("keydown", e=> {
                if (e.code == "KeyT")
                    this.collider.collidable = !this.collider.collidable;
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

            this.useFood();
            
            if (!this.nearFetusStone) return;
            this.nearFetusStone.grab();
            
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

        this.grabFetus();

        this.allowEatFood = this.checkItemInInventory("food-fetus") && this.hp <= 8;
        this.allowPlaceRobot = this.position.y > 20;
        
        // Fetus grab
        if (this.checkItemInInventory("item-robot") && this.allowPlaceRobot)
            this.actionType = "place";
        else if (this.allowEatFood)
            this.actionType = "eat"
        else if (this.nearFetusStone != undefined)
            this.actionType = "grab";
        else
            this.actionType = null;

        if (Config.OXYGEN_HUNGRY_TIME - (this.game.clock.elapsed - this.oxygenHungryStartElapsed) <= 0)
            this.die();

        // Sounds
        this.footsStep();

        // Slow
        this.moveSpeedDown =
            (this.checkItemInInventory("raw-nerius") ? 2 : 0) +
            (this.checkItemInInventory("ready-cidium") ? -2 : 0);

        if (!this.oxygenHungry)
            this.oxygenHungryStartElapsed = this.game.clock.elapsed;
        
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

        if (this.oxygenHungry)
            this.renderOxygenHungryUI();
        
        // Tip text
        if(this.actionType)
            this.game.renderer.drawText({
                text: `[OK] - ${ this.actionText[this.actionType] }`,
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
            framed: false,
            opacity: this.damageAnimatedOpacity
        });
    }

    renderOxygenHungryUI() {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2);

        const loseConsciousnessIn = Config.OXYGEN_HUNGRY_TIME - (this.game.clock.elapsed - this.oxygenHungryStartElapsed);
        
        this.game.renderer.drawText({
            text: "Кислородное голодание!",
            position: new Vector2(innerWidth/2, 100),
            font: "24px Pixel",
            scale: Vector2.all(1 - (Math.sin(this.game.clock.elapsed / 10) + 1) / 2 / 10),
            layer: "ui"
        });
        this.game.renderer.drawText({
            text: `Вы потеряйте сознание через:`,
            position: new Vector2(innerWidth/2, 130),
            layer: "ui"
        });
        this.game.renderer.drawText({
            text: `0:${ Math.floor(loseConsciousnessIn / 60) }`,
            position: new Vector2(innerWidth/2, 180),
            font: "30px Pixel",
            layer: "ui"
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
    
    grabFetus() {
        this.nearFetusStone = this.game.getChildrenByName<FetusStone>("fetus-stone").find(ore=> {

            const vineHeight = (ore.length || 0) * Config.SPRITE_SIZE;
            
            return (ore.length || 0) > 0 && (ore.grabbedCount || 0) < (ore.length || 0) && (this.game.physics.collideWithRect({
                id: this.id,
                position: this.position,
                width: this.collider.width,
                height: this.collider.height,
            }, {
                id: ore.id,
                position: ore.position.add(new Vector2(0, vineHeight / 2)),
                width: ore.collider.width / 2,
                height: ore.collider.height + vineHeight,
            }).any)

        })
    }
    
    pickup(item: ItemParent, type: string, count: number) {
        this.inventory.slots[type] = this.inventory.slots[type] || { count: 0, instances: [] };
        this.inventory.slots[type].count += count;
        const instances = this.inventory.slots[type].instances;
        this.inventory.slots[type].instances.push(item);
            
        this.inventory.slots[type].instances = instances.filter((i, index)=> instances.indexOf(i) == index);

        this.calculateTotalCount()
    }
    calculateTotalCount() {
        this.inventory.totalCount = 0;

        this.getInventorySlotNames().map(slotName=> {

            this.inventory.totalCount += this.inventory.slots[slotName].count;

        });
    }
    pullWire() {
        
        if (this.position.distance(this.wire) > Config.WIRE_LENGTH) {
            this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed - this.moveSpeedDown)));
        }

    }
    hit(damage: number) {
        super.hit(damage);

        this.damageAnimatedOpacity = 1.5;
        this.game.camera.shake();
        this.sound.play(this.game, chance(1) ? "bonk" : "hit");

        if (this.hp <= 0)
            this.die();
    }
    die() {
        this.oxygenHungryStartElapsed = this.game.clock.elapsed;
        
        this.position = new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2, -Config.SPRITE_SIZE);
        this.hp = 10;
        this.wire.copy(this.position);
    }
    heal(heal: number) {
        if (this.hp > 8) return
        
        this.hp += heal;
        this.hp = clamp(this.hp, 0, 10);
        this.spawnText(`+${ heal }`, undefined, Color.GREEN);
    }
    upgradeTool(levelUp: number) {
        if (this.toolLevel < MaxToolLevel)
            this.toolLevel += levelUp;
    }
    placeRobot() {
        if (this.checkItemInInventory("item-robot")) {
        
            // Sub. robots count in inventory
            this.inventory.slots["item-robot"].count --;

            // Remove robot inventory instance
            this.game.removeChildById(this.inventory.slots["item-robot"].instances[0].id);
            this.inventory.slots["item-robot"].instances.splice(0, 1);
            this.calculateTotalCount()

        }
        
        // Place robot
        this.game.add(new Robot(this.position.div(Config.SPRITE_SIZE).add(Vector2.all(.5)).apply(Math.floor).mul(Config.SPRITE_SIZE)));
        this.game.initChildren();
    }
    foldSlotItemsTo(slotName: string, count: number, position: Vector2) {

        const slotInstances = this.inventory.slots[slotName].instances.filter(item=> this.game.children.indexOf(item) >= 0 && item.picked);
            
        for (let i = 0; i < count; i ++) {
            if (slotInstances[i] && slotInstances[i].picked) {
                slotInstances[i].allowPickup = false;
                slotInstances[i].picked = false;
                slotInstances[i].foldToPosition = position;
            }
        }
        this.inventory.slots[slotName].instances.splice(0, count);        
        // for (let i = 0; i < count; i ++) {
        //     if (slotInstances[i] && !slotInstances[i].picked && !slotInstances[i].allowPickup) {
        //         this.inventory.slots[slotName].instances.splice(i, 1);
        //     }
        // }

        this.inventory.slots[slotName].count -= count;
        this.calculateTotalCount();

    }
    useFood() {
        if (this.allowEatFood) {

            const foodSlotNames = this.getInventorySlotNames().filter(slotName=> slotName.indexOf("food") >= 0);
            (this.inventory.slots[foodSlotNames[0]].instances[0] as Food).onEat(this);
            this.game.removeChildById(this.inventory.slots[foodSlotNames[0]].instances[0].id);
            this.inventory.slots[foodSlotNames[0]].count --;
            this.inventory.slots[foodSlotNames[0]].instances.splice(0, 1);

        }
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

    getInventorySlotNames(): string[] {
        return Object.keys(this.inventory.slots);
    }
    checkItemInInventory(name: string) {
        return this.inventory.slots[name] && this.inventory.slots[name].count > 0;
    }
}