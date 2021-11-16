import { Config } from "../../config";
import { Game, ISpriteProps, Sprite } from "../../engine";
import { UI, Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, assetIsValid, lerp, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";

export type GearType = 
    "storage" | "recycler" | "upgrader";
export type Level = 1 | 2 | 3;

export class Gear extends Sprite {
    ui: UI
    interactButton: Button

    gearType: GearType;
    level: Level
    playerIsNear: boolean
    allowInteract: boolean
    interactText: string
    
    constructor(type: GearType, level: Level, props?: ISpriteProps) {
        super(type, [type, level].join("-"), props);

        this.width = 
        this.height = 2;

        this.ui = new UI();
        this.interactButton = new Button();
        
        this.gearType = type;
        this.level = level;
        this.playerIsNear = false;
        this.allowInteract = true;
        this.layer = "bg";
        this.interactText = "";
    }

    init(game: Game) {
        super.init(game);

        this.ui.init(game);
        this.ui.enabled = false;

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
        if (!player) return;
        
        player.allowMove = !this.ui.enabled;
        this.checkInteract(player);
    }

    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        this.renderUI(game, renderer);

        if (this.playerIsNear && this.allowInteract) {
            const outlineAsset = game.getAssetByName([this.gearType, this.level, "outline"].join("-"));

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

        if (this.ui.enabled)
            renderer.drawRect({
                color: "rgba(0, 0, 0, .6)",
                width: innerWidth / Config.SPRITE_SIZE,
                height: innerHeight / Config.SPRITE_SIZE,
                position: new Vector2(innerWidth / 2, innerHeight / 2),
                layer: "ui"
            });
        
        // Draw interact button
        if (this.playerIsNear) {
            this.interactButton.position = this.position.add(new Vector2(0, -110));
            this.interactButton.render(game);
        }
    }

    checkInteract(player: Player | undefined) {
        if (!player) return;

        this.playerIsNear = player.position.distance(this.position) < Config.GEAR_INTERACT_DISTANCE;
    }

    onInteract(game: Game, player: Player) {
        this.interactButton.click();
    }
    
}