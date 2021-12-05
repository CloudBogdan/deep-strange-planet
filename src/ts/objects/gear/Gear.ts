import { Config } from "../../config";
import { ISpriteProps, Sprite } from "../../engine";
import { Sound } from "../../engine/components/Sound";
import { SpawnParticles } from "../../engine/components/Particles";
import { UI, Button } from "../../engine/components/UI";
import { asImage, Vector2 } from "../../engine/utils/math";
import { ObjectNames } from "../../names";
import { Player } from "../entities/Player";

export type GearType = 
    "gear-storage" | "gear-recycler" | "gear-upgrader" | "gear-oxygen-generator";
export type GearLevel = 1 | 2 | 3;
export const MaxGearLevel = 3;

export class Gear extends Sprite {
    sound: Sound
    ui: UI
    interactButton: Button
    player: Player | undefined

    gearType: GearType;
    level: GearLevel
    playerIsNear: boolean
    allowInteract: boolean

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
        
        this.gearType = type;
        this.level = level;
        this.playerIsNear = false;
        this.allowInteract = true;

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

            if (this.player)
                this.onInteract();
        });
    }

    update() {
        super.update();
        
        this.ui.allowSelectSlots = true;
        
        this.checkInteract();
    }

    render() {
        super.render();

        this.renderUI();

        if (this.playerIsNear && this.allowInteract) {
            const outlineAsset = this.game.getAssetByName([this.gearType, 1, "outline"].join("-"));

            // Draw gear outline
            this.game.renderer.drawSprite({
                texture: asImage(outlineAsset),
                width: 2, height: 2,
                position: this.position,
                layer: this.layer,
                flip: this.flip
            });

            this.game.renderer.drawText({
                text: this.interactText,
                font: "22px Pixel",
                position: this.position.add(new Vector2(0, -70))
            });
                
        }
    }
    renderUI() {
        this.ui.render();

        if (this.ui.enabled) {
            const size = Config.SPRITE_SIZE;
            const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

            this.game.renderer.drawRect({
                color: "rgba(0, 0, 0, .6)",
                width: innerWidth / Config.SPRITE_SIZE,
                height: innerHeight / Config.SPRITE_SIZE,
                position: new Vector2(innerWidth / 2, innerHeight / 2),
                layer: "ui"
            });

            // Container
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName([this.gearType.replace("gear-", ""), "ui"].join("-"))),
                position: new Vector2(0, -size).add(windowCenter),
                width: 7,
                height: 5,
                layer: "ui"
            });
            // Preview
            // this.game.renderer.drawSprite({
            //     texture: asImage(this.game.getAssetByName([this.gearType, 1].join("-"))),
            //     position: new Vector2(-size * 2, -size - 15).add(windowCenter).add(this.headerOffset),
            //     width: 2,
            //     height: 2,
            //     layer: "ui"
            // });
            // Title
            this.game.renderer.drawText({
                text: `${ ObjectNames[this.name].name } ${ this.level }ур.`,
                position: new Vector2(-size*2.25, -size - 15).add(windowCenter).add(this.headerOffset),
                // position: new Vector2(-size*2 - size/4, -size*2 + 10).add(windowCenter).add(this.headerOffset),
                align: "left",
                layer: "ui"
            });
            // Close
            this.game.renderer.drawText({
                text: `[OK] - ${ this.tipText }`,
                position: new Vector2(-size * 3 + 20, -size * 2 - 40).add(windowCenter).add(this.headerOffset),
                layer: "ui",
                align: "left"
            })

        }
        
        // Draw interact button
        if (this.playerIsNear && !this.ui.enabled) {
            this.interactButton.position = this.position.add(new Vector2(0, -110));
            this.interactButton.render(this.game);
        }
    }

    upgrade(levelUp: number) {
        if (this.level < MaxGearLevel) {
            this.level += levelUp;

            SpawnParticles(this.game, this.position, {
                render: (renderer, part)=> {
                    renderer.drawSprite({
                        texture: asImage(this.game.getAssetByName("level-up")),
                        position: part.position,
                        opacity: part.size,
                        scale: Vector2.all(.8),
                        layer: "particles"
                    })
                },
                velocity: ()=> new Vector2(0, -1.5),
                size: [5, 5],
                downSize: .08,
                count: 1,
                gravity: 0
            });
        }
    }
    checkInteract() {
        if (!this.player) return;

        this.playerIsNear = this.player.position.distance(this.position) < Config.GEAR_INTERACT_DISTANCE;
        if (this.playerIsNear)
            this.player.allowMove = !this.ui.enabled;
    }

    onInteract() {
        this.interactButton.click();
    }
    
}