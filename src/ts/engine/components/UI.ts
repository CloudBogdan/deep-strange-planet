import { Color, Config } from "../../config";
import { Game } from "../Game";
import { Renderer, StrokeSettings } from "../Renderer";
import { asImage, assetIsValid, lerp, safeValue, Vector2, wrapText } from "../utils/math";

export class Button {
    width: number
    height: number
    
    position: Vector2
    assetName: string
    layer: string

    animatedPosY: number
    allowScale: boolean
    
    constructor(width?: number, height?: number, layer?: string, assetName?: string, allowScale?: boolean) {
        this.width = safeValue(width, 1);
        this.height = safeValue(height, 1);
        
        this.position = Vector2.zero(); 
        this.assetName = assetName || "interact";
        this.layer = layer || "game";

        this.animatedPosY = 0;
        this.allowScale = safeValue(allowScale, true);
    }
    
    render(game: Game) {
        this.animatedPosY = lerp(this.animatedPosY, 0, .2);
        
        game.renderer.drawSprite({
            texture: asImage(game.getAssetByName(this.assetName)),
            width: this.width,
            height: this.height,
            position: this.position.add(new Vector2(0, this.animatedPosY)),
            scale: Vector2.all(this.allowScale ? .7 : 1),
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
    
    allowSelectSlots: boolean
    focused: {
        row: number
        slot: number
    }
    template: number[]
    // slotFocused: number
    // slotsCount: number
    // slotsRawFocused: number
    // slotsRawsCount: number
    
    constructor() {
        this.game = null;
        this.enabled = true;

        this.allowSelectSlots = true;
        this.focused = { row: 0, slot: 0 };
        this.template = [1];
        // this.slotFocused = 0;
        // this.slotsCount = 1;
        // this.slotsRawFocused = 0;
        // this.slotsRawsCount = 1;
    }

    init(game: Game) {
        this.game = game;

        game.gamepad.onAnyKeyDown(name=> {
            if (this.allowSelectSlots && this.enabled)

            switch (name) {
                case "right":
                    this.focused.slot ++;
                    bounds();
                    break;
                case "left":
                    this.focused.slot --;
                    bounds();
                    break;
                case "up":
                    this.focused.row --;
                    bounds();
                    break;
                case "down":
                    this.focused.row ++;
                    bounds();
                    break;
            }

        });

        const bounds = ()=> {
            if (this.focused.row < 0)
                this.focused.row = this.template.length-1;
            else if (this.focused.row > this.template.length-1)
                this.focused.row = 0;
            
            if (this.focused.slot > this.template[this.focused.row]-1)
                this.focused.slot = 0;
            else if (this.focused.slot < 0)
                this.focused.slot = this.template[this.focused.row]-1;
        }
    }
    render() {
        if (!this.game || !this.enabled) return;
        
    }
    updateTemplate(template: UI["template"]) {
        this.template = template.filter(t=> t !== 0)
    }

    renderSlot(pos: Vector2, row: number, slot: number, render: ()=> void, width?: number, height?: number, isFocused?: ()=> void) {
        if (!this.game || !this.enabled) return;

        render();
        if (this.focused.row == row && this.focused.slot == slot) {
            this.game.renderer.drawRect({
                color: "rgba(0, 0, 0, 0)",
                width: safeValue(width, 1),
                height: safeValue(height, 1),
                position: pos.apply(Math.floor),
                stroke: { width: 4, color: Color.ORANGE },
                layer: "ui"
            });
            
            if (isFocused)
                isFocused();
        }

    }
    renderDescriptionUI(props: {
        title: string,
        specials: string[],
        description: string,
        renderIcon: (pos: Vector2)=> void
    }, game: Game, renderer: Renderer) {

        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        const margin = 6;
        const lineHeight = 22;

        // Container
        renderer.drawSprite({
            texture: asImage(game.getAssetByName("description-ui")),
            position: new Vector2(0, size * 3).add(windowCenter),
            width: 7,
            height: 5,
            layer: "ui"
        });
        
        // Icon
        props.renderIcon(new Vector2(-2.5 * size + size / 2, size + 70).add(windowCenter));
        // renderer.drawSprite({
        //     texture: asImage(game.getAssetByName(titleText)),
        //     position: new Vector2(-2.5 * size + size / 2, size + 70).add(windowCenter),
        //     layer: "ui"
        // });

        // Texts
        const title = wrapText(props.title, 26);
        
        renderer.drawText({
            text: title.text,
            font: "20px Pixel",
            position: new Vector2(-size * 1.3, size + 70 - size / 2 + 15).add(windowCenter),
            centered: false,
            layer: "ui"
        });
        renderer.drawText({
            text: props.specials.join("\n"),
            color: Color.ORANGE,
            position: new Vector2(-size * 1.3, size + 70 + margin + (title.wrapCount >= 1 ? lineHeight : 0)).add(windowCenter),
            centered: false,
            layer: "ui"
        });
        renderer.drawText({
            text: wrapText(props.description, 31).text,
            position: new Vector2(-size * 1.3, size + 70 + lineHeight + margin * 2 + lineHeight * title.wrapCount + lineHeight * (props.specials.length - 1)).add(windowCenter),
            centered: false,
            layer: "ui"
        });

    }
}