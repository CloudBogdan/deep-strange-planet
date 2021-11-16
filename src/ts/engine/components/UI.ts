import { Color, Config } from "../../config";
import { Game } from "../Game";
import { Renderer, StrokeSettings } from "../Renderer";
import { asImage, assetIsValid, lerp, safeValue, Vector2 } from "../utils/math";

export class Button {
    position: Vector2
    assetName: string
    layer: string

    animatedPosY: number
    
    constructor(position?: Vector2, layer?: string, assetName?: string) {
        this.position = position || Vector2.zero(); 
        this.assetName = assetName || "interact";
        this.layer = layer || "game";

        this.animatedPosY = 0;
    }
    
    render(game: Game) {
        this.animatedPosY = lerp(this.animatedPosY, 0, .2);
        
        game.renderer.drawSprite({
            texture: asImage(game.getAssetByName("interact")),
            position: this.position.add(new Vector2(0, this.animatedPosY)),
            scale: Vector2.all(.7),
            layer: this.layer
        });
    }
    
    click() {
        this.animatedPosY = 10;
    }
}

export class UI {
    game: Game | null
    enabled: boolean
    
    allowSelectButtons: boolean
    slotFocused: number
    slotCount: number
    
    constructor() {
        this.game = null;
        this.enabled = true;

        this.slotFocused = 0;
        this.allowSelectButtons = true;
        this.slotCount = 1;
    }

    init(game: Game) {
        this.game = game;

        game.gamepad.onAnyKeyDown(name=> {
            if (this.allowSelectButtons)

            switch (name) {
                case "right":
                    this.slotFocused ++;
                    if (this.slotFocused > this.slotCount-1)
                        this.slotFocused = 0;
                    break;
                case "left":
                    this.slotFocused --;
                    if (this.slotFocused < 0)
                        this.slotFocused = this.slotCount-1;
                    break;
            }

        });
    }
    render() {
        if (!this.game || !this.enabled) return;
        
    }

    renderSlot(pos: Vector2, tabIndex: number, render: ()=> void, isFocused?: ()=> void) {
        if (!this.game || !this.enabled) return;

        render();
        if (tabIndex == this.slotFocused) {
            this.game.renderer.drawRect({
                color: "rgba(0, 0, 0, 0)",
                position: pos.apply(Math.floor),
                stroke: { width: 4, color: Color.ORANGE },
                layer: "ui"
            });
            
            if (isFocused)
                isFocused();
        }

    }
}