import { Config } from "../../config";
import { Game, ISpriteProps, Sprite } from "../../engine";
import { Renderer } from "../../engine/Renderer";
import { asImage, assetIsValid, lerp, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";

export type GearType = 
    "storage" | "recycler" | "upgrader";
export type Level = 1 | 2 | 3;

export class Gear extends Sprite {
    gearType: GearType;
    level: Level
    playerIsNear: boolean
    allowInteract: boolean
    interactText: string

    animatedPosY: number
    
    constructor(type: GearType, level: Level, props?: ISpriteProps) {
        super(type, [type, level].join("-"), props);

        this.width = 
        this.height = 2;
        
        this.gearType = type;
        this.level = level;
        this.playerIsNear = false;
        this.allowInteract = true;
        this.layer = "bg";
        this.interactText = "";

        this.animatedPosY = 0;
    }

    init(game: Game) {
        super.init(game);

        game.gamepad.onKeyDown("enter", ()=> {
            if (!this.playerIsNear) return;

            const player = game.getChildById<Player>("player");
            if (player)
                this.onInteract(game, player);
        });
    }

    update(game: Game) {
        super.update(game);

        const player = game.getChildById<Player>("player");
        
        this.checkInteract(player);

        //
        this.animatedPosY = lerp(this.animatedPosY, 0, .2);
    }

    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        this.renderUI(game, renderer);

        if (this.playerIsNear && this.allowInteract) {
            const okAsset = game.getAssetByName("interact");
            const outlineAsset = game.getAssetByName([this.gearType, this.level, "outline"].join("-"));

            // Draw ok button sprite
            renderer.drawSprite({
                texture: asImage(okAsset),
                scale: Vector2.all(.7),
                position: this.position.add(new Vector2(0, -110 + this.animatedPosY))
            });
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
    renderUI(game: Game, renderer: Renderer) {}

    checkInteract(player: Player | undefined) {
        if (!player) return;

        this.playerIsNear = player.position.distance(this.position) < Config.GEAR_INTERACT_DISTANCE;
    }

    onInteract(game: Game, player: Player) {
        this.animatedPosY = 10;
    }
    
}