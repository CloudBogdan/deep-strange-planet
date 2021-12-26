import { Config } from "../../config";
import { ISpriteProps, Sprite } from "../../engine";
import { Sound } from "../../engine/components/Sound";
import { SpawnParticles, SpawnUpgradeParticles } from "../../engine/components/Particles";
import { UI, Button } from "../../engine/components/UI";
import { asImage, Vector2 } from "../../engine/utils/math";
import { ObjectNames } from "../../names";
import { Player } from "../entities/Player";

export type GearType = 
    "gear-storage" | "gear-recycler" | "gear-upgrader" | "gear-oxygen-generator" |
    "gear-documentation";
export type GearLevel = 1 | 2 | 3;
export const MaxGearLevel = 3;

export class Gear extends Sprite {
    sound: Sound
    ui: UI
    interactButton: Button
    player: Player | undefined

    maxRowItemsCount: number
    gearType: GearType;
    level: GearLevel
    playerIsNear: boolean
    allowInteract: boolean
    allowActionButton: boolean
    actionButtonAssetName: string

    headerOffset: Vector2
    interactText: string
    tipText: string
    
    constructor(type: GearType, level: GearLevel, props?: ISpriteProps) {
        super(type, [type, 1].join("-"), {
            layer: "game",
            colliderType: "none",
            ...props
        });

        this.width = 
        this.height = 2;

        this.sound = new Sound();
        this.ui = new UI();
        this.interactButton = new Button();
        this.player = undefined;
        
        this.maxRowItemsCount = 5;
        this.gearType = type;
        this.level = level;
        this.playerIsNear = false;
        this.allowInteract = true;
        this.allowActionButton = true;
        this.actionButtonAssetName = "close";

        this.headerOffset = new Vector2();
        this.interactText = "";
        this.tipText = "закрыть";
    }

    init() {
        super.init();

        this.ui.init(this.game);
        this.ui.enabled = false;
        this.player = this.game.getChildById("player");

        this.game.gamepad.onKeyDown(this.id, "enter", ()=> {
            if (!this.playerIsNear) return;

            if (this.ui.enabled)
                this.onUIAction();
            
            if (this.player)
                this.onInteract();
        });
    }

    update() {
        super.update();

        if (this.game.paused)
            this.ui.enabled = false;
            
        this.checkInteract();
    }

    render() {
        super.render();

        this.renderUI();
        this.renderOutline();
        if (this.allowActionButton)
            this.renderActionButton();
    }
    renderUI() {
        this.ui.render();

        if (this.ui.enabled) {
            const size = Config.SPRITE_SIZE;
            const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

            // Background
            this.ui.rect({
                color: "rgba(0, 0, 0, .6)",
                width: innerWidth / Config.SPRITE_SIZE,
                height: innerHeight / Config.SPRITE_SIZE,
                position: new Vector2(innerWidth / 2, innerHeight / 2),
            });

            // Container
            this.ui.sprite([this.gearType.replace("gear-", ""), "ui"].join("-"), {
                position: new Vector2(0, -size).add(windowCenter),
                width: 7,
                height: 5,
            });
            // Title
            this.ui.text(`${ ObjectNames[this.name].name } ${ this.level }ур.`, {
                position: new Vector2(-size*2.25, -size - 15).add(windowCenter).add(this.headerOffset),
                align: "left",
            });
            // Tip text
            this.ui.text(`[OK] - ${ this.tipText }`, {
                position: new Vector2(-size * 3 + 20, -size * 2 - 40).add(windowCenter).add(this.headerOffset),
                align: "left"
            })

        }
        
        // Draw interact button
        if (this.playerIsNear && !this.ui.enabled) {
            this.interactButton.position = this.position.add(new Vector2(0, -10 - this.height * 50));
            this.interactButton.render(this.game);
        }
    }
    renderOutline() {
        if (this.playerIsNear && this.allowInteract) {
            // Draw gear outline
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName([this.gearType, 1, "outline"].join("-"))),
                width: this.width, height: this.height,
                position: this.position,
                layer: this.layer,
                flip: this.flip
            });

            // Interact text
            this.game.renderer.drawText({
                text: this.interactText,
                font: "22px Pixel",
                position: this.position.add(new Vector2(0, -70)),
                layer: "game-ui"
            });
                
        }
    }
    renderActionButton() {
        const size = Config.SPRITE_SIZE;
            const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

        const pos = new Vector2(size*2, -size - 20).add(windowCenter).add(this.headerOffset);
        this.ui.renderFocusable(pos.add(new Vector2(-2, 2)), 0, 0, ()=> {

            this.ui.sprite(this.actionButtonAssetName, {
                position: pos,
            });

        }, 14 / Config.SPRITE_PIXEL_SIZE);

    }

    upgrade(levelUp: number) {
        if (this.level < MaxGearLevel) {
            this.level += levelUp;

            SpawnUpgradeParticles(this.game, this.position);
        }
    }
    checkInteract() {
        if (!this.player) return;

        this.playerIsNear =
            this.player.position.distance(this.position) < Config.GEAR_INTERACT_DISTANCE &&
            ((this.player.position.x > this.position.x && this.player.flip.x) || (this.player.position.x < this.position.x && !this.player.flip.x));
        if (this.playerIsNear) {
            if (!this.player.dead)
                this.player.allowMove = !this.ui.enabled;
            else
                this.ui.enabled = false;
        }
    }

    onInteract() {
        this.interactButton.click();
    }
    onUIAction() {
        
    }
    saveData() {}
    reset() {
        this.level = 1;
        this.saveData();
    }
    
}