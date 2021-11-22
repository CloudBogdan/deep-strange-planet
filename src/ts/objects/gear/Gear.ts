import { Config } from "../../config";
import { Game, ISpriteProps, Sprite } from "../../engine";
import { SpawnParticles } from "../../engine/components/Particles";
import { UI, Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, assetIsValid, lerp, Vector2 } from "../../engine/utils/math";
import { GearNames } from "../../names";
import { Player } from "../entities/Player";

export type GearType = 
    "gear-storage" | "gear-recycler" | "gear-upgrader";
export type GearLevel = 1 | 2 | 3;
export const MaxGearLevel = 3;

export class Gear extends Sprite {
    ui: UI
    interactButton: Button
    player: Player | undefined

    gearType: GearType;
    level: GearLevel
    playerIsNear: boolean
    allowInteract: boolean

    headerOffset: Vector2
    interactText: string
    closeText: string
    
    constructor(type: GearType, level: GearLevel, props?: ISpriteProps) {
        super(type, [type, 1].join("-"), props);

        this.width = 
        this.height = 2;

        this.ui = new UI();
        this.interactButton = new Button();
        this.player = undefined;
        
        this.gearType = type;
        this.level = level;
        this.playerIsNear = false;
        this.allowInteract = true;
        this.layer = "bg";

        this.headerOffset = new Vector2();
        this.interactText = "";
        this.closeText = "закрыть";
    }

    init(game: Game) {
        super.init(game);

        this.ui.init(game);
        this.ui.enabled = false;
        this.player = game.getChildById("player");

        game.gamepad.onKeyDown(this.id, "enter", ()=> {
            if (!this.playerIsNear) return;

            if (this.player)
                this.onInteract(game);
        });
    }

    update(game: Game) {
        super.update(game);
        
        this.checkInteract();
    }

    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        this.renderUI(game, renderer);

        if (this.playerIsNear && this.allowInteract) {
            const outlineAsset = game.getAssetByName([this.gearType, 1, "outline"].join("-"));

            // Draw gear outline
            renderer.drawSprite({
                texture: asImage(outlineAsset),
                width: 2, height: 2,
                position: this.position,
                layer: this.layer,
                flip: this.flip
            });

            renderer.drawText({
                text: this.interactText,
                font: "22px Pixel",
                position: this.position.add(new Vector2(0, -70))
            });
                
        }
    }
    renderUI(game: Game, renderer: Renderer) {
        this.ui.render();

        if (this.ui.enabled) {
            const size = Config.SPRITE_SIZE;
            const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

            renderer.drawRect({
                color: "rgba(0, 0, 0, .6)",
                width: innerWidth / Config.SPRITE_SIZE,
                height: innerHeight / Config.SPRITE_SIZE,
                position: new Vector2(innerWidth / 2, innerHeight / 2),
                layer: "ui"
            });

            // Container
            renderer.drawSprite({
                texture: asImage(game.getAssetByName([this.gearType.replace("gear-", ""), "ui"].join("-"))),
                position: new Vector2(0, -size).add(windowCenter),
                width: 7,
                height: 5,
                layer: "ui"
            });
            // Preview
            renderer.drawSprite({
                texture: asImage(game.getAssetByName([this.gearType, 1].join("-"))),
                position: new Vector2(-size * 2, -size - 15).add(windowCenter).add(this.headerOffset),
                width: 2,
                height: 2,
                layer: "ui"
            });
            // Title
            renderer.drawText({
                text: `${ GearNames[this.name].name } ${ this.level }ур.`,
                position: new Vector2(-size * 1.2, -size - 15).add(windowCenter).add(this.headerOffset),
                centered: false,
                layer: "ui"
            });
            // Close
            renderer.drawText({
                text: `[OK] - ${ this.closeText }`,
                position: new Vector2(-size * 3 + 20, -size * 2 - 40).add(windowCenter).add(this.headerOffset),
                layer: "ui",
                centered: false
            })

        }
        
        // Draw interact button
        if (this.playerIsNear && !this.ui.enabled) {
            this.interactButton.position = this.position.add(new Vector2(0, -110));
            this.interactButton.render(game);
        }
    }

    upgrade(game: Game, levelUp: number) {
        if (this.level < MaxGearLevel) {
            this.level += levelUp;

            SpawnParticles(game, this.position, {
                render: (renderer, part)=> {
                    renderer.drawSprite({
                        texture: asImage(game.getAssetByName("level-up")),
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

    onInteract(game: Game) {
        this.interactButton.click();
    }
    
}