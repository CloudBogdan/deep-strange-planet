import { Color, Config } from "../../config";
import { Game } from "../Game";
import { Renderer, StrokeSettings } from "../Renderer";
import { asImage, assetIsValid, safeValue, Vector2 } from "../utils/math";

export class UI {
    game: Game | null
    
    allowSelectButtons: boolean
    buttonFocused: number
    buttonsCount: number
    
    constructor() {
        this.game = null;
        
        this.buttonFocused = 0;
        this.allowSelectButtons = true;
        this.buttonsCount = 1;
    }

    init(game: Game) {
        this.game = game;

        game.gamepad.onAnyKeyDown(name=> {
            if (this.allowSelectButtons)

            switch (name) {
                case "right":
                    this.buttonFocused ++;
                    if (this.buttonFocused > this.buttonsCount-1)
                        this.buttonFocused = 0;
                    break;
                case "left":
                    this.buttonFocused --;
                    if (this.buttonFocused < 0)
                        this.buttonFocused = this.buttonsCount-1;
                    break;
            }

        });
    }

    renderButton(pos: Vector2, tabIndex: number, render: ()=> void, isFocused?: ()=> void) {
        if (!this.game) return;

        render();
        if (tabIndex == this.buttonFocused) {
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

    drawContainer(width: number, height: number, pos?: Vector2) {
        if (!this.game) return;
        
        this.game.renderer.drawRect({
            color: Color.STONE_LAYER_COLOR, 
            width: width, 
            height: height, 
            stroke: { width: 4, color: Color.BLACK },
            position: new Vector2(innerWidth / 2, innerHeight / 2).add(safeValue(pos, Vector2.zero())).apply(Math.floor),
            layer: "ui"
        });
    }
}