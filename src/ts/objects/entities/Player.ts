import { Color, Config } from "../../config";
import { asImage, chance, clamp, lerp, random, Vector2 } from "../../engine/utils/math";
import { Entity } from "./Entity";
import { ItemParent } from "../item/ItemParent";
import { Robot } from "./Robot";
import { Food } from "../food/Food";
import { OxygenGenerator } from "../gear/OxygenGenerator";
import { Storage } from "../gear/Storage";
import { Recycler } from "../gear/Recycler";
import { Timer } from "../../engine";

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
        damage: 6
    },
}

export class Player extends Entity {
    storage!: Storage
    oxygenGenerator!: OxygenGenerator
    recycler!: Recycler
    
    oxygenHungry: boolean
    oxygenHungryTimer: Timer

    respawnTimer: Timer
    animatedDieUI: number
    tries: number
    dieMessage: "respawn" | "replay"
    
    
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
    actionType: { name: "none" | "grab" | "place" | "eat", priority: number } | null
    expectedActionType: Player["actionType"]
    // nearFetusStone: FetusStone | undefined;

    damageAnimatedOpacity: number
    animatedCameraRotation: number
    animatedTimerScale: number
    
    constructor() {
        super("player", "player-stay", {
            position: new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2, -Config.SPRITE_SIZE),
            layer: "player"
        });
        
        this.hp = 12;
        this.oxygenHungry = false;
        this.oxygenHungryTimer = new Timer(Config.OXYGEN_HUNGRY_TIME);

        this.respawnTimer = new Timer(Config.RESPAWN_TIME);
        this.animatedDieUI = 0;
        this.tries = 2;
        this.dieMessage = "respawn";

        this.wire = this.position.expand();
        this.inventory = {
            totalCount: 0,
            slots: {}
        };
        this.hasBottle = false;
        this.toolLevel = Config.ALLOW_HUNK ? 5 : 1;
        this.allowPlaceRobot = false;
        this.allowEatFood = false;
        this.actionType = null;
        this.expectedActionType = null;
        this.actionText = {
            "grab": "cобрать",
            "place": "установить",
            "eat": "съесть"
        }

        this.damageAnimatedOpacity = 0;
        this.animatedCameraRotation = 0;
        this.animatedTimerScale = 1;

        window.addEventListener("keydown", e=> {
            if (Config.ALLOW_HUNK || (window as any).MODER_CHEAT || Config.IS_DEV) {
                
                if (e.code == "KeyT") {
                    this.collider.collidable = !this.collider.collidable;
                    this.moveSpeed = !this.collider.collidable ? 60 : this.initialMoveSpeed;
                    this.toolLevel = 6;

                    const storage = this.game.getChildById<Storage>("gear-storage");
                    if (!storage) return;
                    
                    storage.contains = { totalCount: 0, slots: {
                        "raw-grade-cidium": { count: 2 },
                        "ready-cidium": { count: 2 },
                        "battery": { count: 2 },
                        "item-robot": { count: 2 },
                        "food-fetus": { count: 2 },
                        "raw-manty": { count: 1 },
                        "raw-rady": { count: 1 },
                    } };
                    storage.calculateTotalCount();
                }

            }
        })
    }
    
    init() {
        super.init();
        
        const tries = this.game.loadKey("tries", 2);
        this.tries = tries <= 0 ? 2 : tries;
        this.hp = this.game.loadKey("player-hp", 12);
        this.toolLevel = this.game.loadKey("player-toolLevel", 1);
        
        this.collider.width = 10 * Config.SPRITE_SCALE;
        this.collider.height = 10 * Config.SPRITE_SCALE;
        this.collider.offset = new Vector2(3, 0);

        // Set robot
        this.game.gamepad.onKeyDown(this.id, "enter", ()=> {
            if (this.checkItemInInventory("item-robot") && this.allowPlaceRobot)
                this.placeRobot();

            this.useFood();
            
        });

        this.saveData();

        // Gears
        this.storage = this.game.getChildById("gear-storage")!;
        this.recycler = this.game.getChildById("gear-recycler")!;
        this.oxygenGenerator = this.game.getChildById("gear-oxygen-generator")!;
    }

    update() {
        super.update();
        
        this.game.renderer.layers["ui"].render = !(this.dead || this.regaining); 
        
        // Timers
        this.respawnTimer.update(this.game.clock.elapsed);
        this.oxygenHungryTimer.update(this.game.clock.elapsed);

        // Animations
        // Dead
        if (this.dead) {
            this.playAnimation("player-dead", 5, 26, false)
            if (this.frame.x >= 5) {
                if (!this.respawnTimer.started)
                    this.animatedDieUI = -4;
                this.respawnTimer.start(this.game.clock.elapsed);
            }

            if (this.respawnTimer.isTriggered()) {
                // Respawn
                if (this.tries > 0)
                    this.respawn();
                else {
                    this.respawn();
                    this.gameOver();
                }
            }
        }
        if (this.regaining) {
            this.playAnimation("player-dead", 5, 26, false, true);

            if (this.frame.x <= 0) {
                this.regaining = false;
                this.allowMove = true;
                this.interest = true;
            }
        }
        
        this.movement.set(
            (+this.game.gamepad.keys.right - +this.game.gamepad.keys.left),
            (+this.game.gamepad.keys.down - +this.game.gamepad.keys.up)
        );
        this.move();

        this.pullWire();
        this.changeActionType();

        this.allowEatFood = this.checkItemInInventory("food-fetus") && this.hp <= 11;
        this.allowPlaceRobot = this.position.y > 20;

        // Oxygen hungry
        this.doOxygenHungry();
        // Sounds
        this.footsStep();

        // Slow
        this.moveSpeedDown =
            (this.checkItemInInventory("raw-nerius") ? 2 : 0) +
            (this.checkItemInInventory("ready-cidium") ? -2 : 0);
        
        // Dig
        this.digging();

        //
        this.damageAnimatedOpacity = lerp(this.damageAnimatedOpacity, 0, .05);
    }
    render() {
        super.render();
        
        this.renderUI();
    }
    
    changeActionType() {
        if (this.game.tick(40))
            this.expectedActionType = null;
        
        if (this.expectedActionType) {
            if (this.actionType) {
                if (this.expectedActionType.name != this.actionType?.name && this.actionType.priority < this.expectedActionType.priority)
                    this.actionType = this.expectedActionType;
            } else {
                this.actionType = this.expectedActionType;
            }
        } else
            this.actionType = null;

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

        this.saveData();
    }
    pullWire() {
        
        if (this.position.distance(this.wire) > Config.WIRE_LENGTH) {
            this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed - this.moveSpeedDown)));
        }

    }
    hit(damage: number) {
        if (!this.damaged) {

            this.damageAnimatedOpacity = 1.5;
            this.game.camera.shake();
            this.sound.play(this.game, chance(1) ? "bonk" : "hit");

            this.saveData();
        }
        super.hit(damage);
        
        if (this.hp <= 0)
            this.die();
    }
    die() {
        if (this.dead) return;
        
        this.frame.x = 0;
        this.tries --;
        this.oxygenHungry = false;
        this.oxygenHungryTimer.reset();
        this.animatedDieUI = -6;
        this.allowMove = false;
        
        super.die();
        this.saveData();
    }
    respawn() {
        if (this.oxygenGenerator.oxygenLevel <= 10) {
            this.oxygenGenerator.oxygenLevel += 30;
            this.oxygenGenerator.batteryLevel += 80;
        }
        this.respawnTimer.reset();
        this.hp = 12;
        this.frame.x = 5;
        this.interest = false;
        this.dead = false;
        this.regaining = true;
        // this.allowMove = true;
        this.position.copy(this.startPosition);
        this.game.camera.position.copy(this.position);

        this.saveData();
    }
    gameOver() {
        this.game.clearAllKeys();

        this.oxygenGenerator.reset();
        this.storage.reset();
        this.recycler.reset();
        this.game.generator.reset();
        this.reset();
    }
    heal(heal: number) {
        if (this.hp >= 12) return
        
        this.hp += heal;
        this.hp = clamp(this.hp, 0, 12);
        this.spawnText(`+${ heal }`, undefined, Color.GREEN);

        this.saveData();
    }

    digging() {
        const tool = tools[this.toolLevel.toString()];

        if (this.movement.x != 0)
            this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.x > 0 ? "right" : "left");
        else if (this.movement.y != 0)
            this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.y > 0 ? "bottom" : "top");
    }
    upgradeTool(levelUp: number) {
        if (this.toolLevel < MaxToolLevel)
            this.toolLevel += levelUp;

        this.saveData();
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

        this.saveData();
    }
    foldItemsTo(slotName: string, count: number, position: Vector2) {

        const slotInstances = this.inventory.slots[slotName].instances.filter(item=> this.game.children.indexOf(item) >= 0 && item.picked);
            
        for (let i = 0; i < count; i ++) {
            if (slotInstances[i] && slotInstances[i].picked) {
                slotInstances[i].allowPickup = false;
                slotInstances[i].picked = false;
                slotInstances[i].foldToPosition = position;
            }
        }
        this.inventory.slots[slotName].instances.splice(0, count);

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
    doOxygenHungry() {
        if (this.dead) return;
        
        if (this.oxygenGenerator.oxygenLevel <= 0) {
            this.oxygenHungryTimer.start(this.game.clock.elapsed);
            this.oxygenHungry = true;
        }
        if (this.oxygenHungry) {
            if (this.oxygenHungryTimer.isTriggered())
                this.die();
        }
    }

    // > Render
    renderUI() {
        
        if (this.dead && this.respawnTimer.started) this.renderDieUI();
        
        if (this.game.paused) return;

        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2);
        
        if (this.oxygenHungry) this.renderOxygenHungryUI();
        this.renderHealthUI();
        
        // Tip text
        if(this.actionType && this.actionText[this.actionType.name])
            this.game.renderer.drawText({
                text: `[OK] - ${ this.actionText[this.actionType.name] }`,
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

    renderDieUI() {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2);

        // this.animatedDieUI = 10;
        this.animatedDieUI = clamp(lerp(this.animatedDieUI, 4, .005), 0, 4);

        // BG
        this.game.renderer.drawRect({
            color: "#000",
            width: innerWidth / size,
            height: innerHeight / size,
            position: windowCenter,
            layer: "upper-ui",
            opacity: clamp(this.animatedDieUI, .5, 1.5) - .5
        });

        // Texts
        this.game.renderer.drawText({
            text: this.tries > 0 ? "Все совершают ошибки..." : "Все совершают ошибки, на которые нужен шанс...",
            font: "34px Pixel",
            opacity: clamp(this.animatedDieUI, 1, 2) - 1,
            stroke: { width: 0, color: "#000" },
            position: new Vector2().add(windowCenter),
            layer: "upper-ui"
        })
        this.game.renderer.drawText({
            text: this.tries > 0 ? "Последний шанс, чтобы их исправить" : "Шанс, который вы упустили",
            opacity: clamp(this.animatedDieUI, 1.5, 2.5) - 1.5,
            stroke: { width: 0, color: "#000" },
            position: new Vector2(0, 30).add(windowCenter),
            layer: "upper-ui"
        });
        this.game.renderer.drawText({
            text: this.tries > 0 ? `Тебя приведут в сознание через:\n0:${ this.respawnTimer.elapsedSeconds }` : `Тебя заменит другой доброволец через:\n0:${ this.respawnTimer.elapsedSeconds }`,
            opacity: clamp(this.animatedDieUI, 2.5, 3.5) - 2.5,
            stroke: { width: 0, color: "#000" },
            position: new Vector2(0, 80).add(windowCenter),
            layer: "upper-ui"
        });
    
    }
    renderHealthUI() {
        const size = Config.SPRITE_SIZE;
        
        for (let i = 0; i < 4; i ++) {
            let frame = 0;

            if (
                (i == 0 && this.hp <= 11) ||
                (i == 1 && this.hp <= 8) ||
                (i == 2 && this.hp <= 5) ||
                (i == 3 && this.hp <= 1)
            )
                frame = 1;
            if (
                (i == 0 && this.hp <= 9) ||
                (i == 1 && this.hp <= 6) ||
                (i == 2 && this.hp <= 3) ||
                (i == 3 && this.hp <= 0)
            )
                frame = 2;

            const sine = Math.sin(this.game.clock.elapsed / 10 + i) * 2 * frame;
            
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName("health")),
                frame: new Vector2(frame),
                scale: Vector2.all(.8),
                position: new Vector2(innerWidth - size - i * size * .6, innerHeight - size + sine),
                layer: "ui"
            });
        }

    }
    renderOxygenHungryUI() {
        this.animatedTimerScale = lerp(this.animatedTimerScale, 1, .2);
        if (this.oxygenHungryTimer.elapsed / 60 % 1 == 0)
            this.animatedTimerScale = this.oxygenHungryTimer.elapsedSeconds < 20 ? 1.5 : 1.2
        
        this.game.renderer.drawText({
            text: "Кислородное голодание!",
            position: new Vector2(innerWidth/2, 100),
            font: "24px Pixel",
            layer: "upper-ui"
        });
        this.game.renderer.drawText({
            text: `Вы потеряете сознание через:`,
            position: new Vector2(innerWidth/2, 130),
            layer: "upper-ui"
        });
        this.game.renderer.drawText({
            text: `0:${ Math.floor(this.oxygenHungryTimer.elapsedSeconds) }`,
            position: new Vector2(innerWidth/2, 180),
            scale: Vector2.all(this.animatedTimerScale),
            font: "30px Pixel",
            layer: "upper-ui"
        });
        
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
    saveData() {
        this.game.saveKey("tries", this.tries.toString());
        this.game.saveKey("player-hp", this.hp.toString());
        this.game.saveKey("player-toolLevel", this.toolLevel.toString());
    }
    reset() {
        this.toolLevel = 1;
        [...this.game.getChildrenByName<ItemParent>("ore"), ...this.game.getChildrenByName<ItemParent>("item")].map(child=> {
            this.game.removeChildById(child.id);
        })
    }
}