import { Color, Config } from "../../config";
import { Game } from "../Game";
import { DrawRectProps, DrawSpriteProps, DrawTextProps, Renderer, StrokeSettings } from "../Renderer";
import { asImage, assetIsValid, clamp, lerp, random, safeValue, Vector2, wrapText } from "../utils/math";
import { SpawnParticles } from "./Particles";

type IProgressBarProps = {
    progress: number
    color?: string
    strokeColor?: string
    width: number
    height: number
    position: Vector2
    layer?: string
}

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
        this.layer = layer || "game-ui";

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
    game!: Game
    enabled: boolean
    
    allowSelectSlots: boolean
    focused: {
        row: number
        slot: number
    }
    ghostFocused: UI["focused"]
    template: number[]
    
    constructor() {
        this.enabled = true;

        this.allowSelectSlots = true;
        this.focused = { row: 0, slot: 0 };
        this.ghostFocused = { row: 0, slot: 0 };
        this.template = [1];
    }

    init(game: Game) {
        this.game = game;

        game.gamepad.onAnyKeyDown("ui-listener", name=> {
            if (!this.allowSelectSlots || !this.enabled) return

            switch (name) {
                case "right":
                    this.focused.slot ++;
                    this.bounds();
                    break;
                case "left":
                    this.focused.slot --;
                    this.bounds();
                    break;
                case "up":
                    if (this.ghostFocused.row == Math.abs((this.focused.row % this.template.length) - 1))
                        this.focused.slot = this.ghostFocused.slot;
                    this.focused.row --;
                    this.bounds();
                    break;
                case "down":
                    if (this.ghostFocused.row == (this.focused.row % this.template.length) + 1)
                        this.focused.slot = this.ghostFocused.slot;
                    this.focused.row ++;
                    this.bounds();
                    break;
            }

        });

        
    }
    bounds() {
        if (this.focused.row < 0)
            this.focused.row = this.template.length-1;
        else if (this.focused.row > this.template.length-1)
            this.focused.row = 0;
        
        this.focused.row = clamp(this.focused.row, 0, this.template.length-1);
        if (this.focused.slot > this.template[this.focused.row]-1)
            this.focused.slot = 0;
        else if (this.focused.slot < 0)
            this.focused.slot = this.template[this.focused.row]-1;

        this.focused.slot = clamp(this.focused.slot, 0, this.template[this.focused.row]-1);
    }
    render() {
        if (!this.enabled) return;
    }
    updateTemplate(template: UI["template"]) {
        this.template = template.filter(t=> t > 0)
    }

    renderFocusable(pos: Vector2, row: number, slot: number, render: ()=> void, width?: number, height?: number, ghost?: boolean) {
        if (!this.enabled) return;

        const isFocused = this.focused.row == row && this.focused.slot == slot;
        const isGhostFocused = this.ghostFocused.row == row && this.ghostFocused.slot == slot;
        
        if (ghost && isFocused)
            this.ghostFocused = { row, slot };
        render();
        
        if (isFocused || (isGhostFocused && ghost)) {
            this.rect({
                color: "rgba(0, 0, 0, 0)",
                width: safeValue(width, 1),
                height: safeValue(height, 1),
                position: pos.apply(Math.floor),
                stroke: { width: 4, color: Color.ORANGE },
                opacity: (isGhostFocused && !isFocused) ? .2 : 1,
            });
        }

    }
    renderDescriptionUI(props: {
        title: string,
        titleColor?: string,
        specials: string[],
        description: string,
        renderIcon: (pos: Vector2)=> void
    }) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        const margin = 6;
        const lineHeight = 22;

        // Container
        this.sprite("description-ui", {
            position: new Vector2(0, size * 3).add(windowCenter),
            width: 7,
            height: 5,
        });
        
        // Icon
        props.renderIcon(new Vector2(-2.5 * size + size / 2, size + 70).add(windowCenter));

        // Texts
        const titleTextWrapped = wrapText(props.title, 26);
        const specialText = props.specials.join("\n");
        const descriptionText = wrapText(props.description, 31).text;
        
        // Title
        this.text(titleTextWrapped.text, {
            font: "20px Pixel",
            position: new Vector2(-size * 1.3, size + 70 - size / 2 + 15).add(windowCenter),
            align: "left",
            color: props.titleColor || "#fff",
        });
        // Specials
        this.text(specialText, {
            color: Color.ORANGE,
            position: new Vector2(-size * 1.3, size + 70 + margin + (titleTextWrapped.wrapCount >= 1 ? lineHeight : 0)).add(windowCenter),
            align: "left",
        });
        // Description
        this.text(descriptionText, {
            position: new Vector2(-size * 1.3, size + 70 + lineHeight + margin * 2 + lineHeight * titleTextWrapped.wrapCount + lineHeight * (props.specials.length - 1)).add(windowCenter),
            align: "left",
        });

    }
    renderProgressBar(props: IProgressBarProps) {
        if (!this.game) return;

        const width = props.width;
        const height = props.height;
        const progress = height * props.progress;
        const pos = props.position.apply(Math.floor);

        this.game.renderer.drawRect({
            width: (width + 10) / Config.SPRITE_SIZE,
            height: (height + 10) / Config.SPRITE_SIZE,
            position: pos.add(Vector2.all(.5)),
            color: Color.STONE_LAYER_COLOR,
            stroke: {
                color: props.strokeColor || Color.ORANGE,
                width: 4
            },
            layer: props.layer || "ui"
        })
        this.game.renderer.drawRect({
            width: width / Config.SPRITE_SIZE,
            height: progress / Config.SPRITE_SIZE,
            position: pos.add(new Vector2(0, (height - height * props.progress) / 2)).add(Vector2.all(.5)),
            color: props.color || Color.YELLOW,
            layer: props.layer || "ui"
        })
        
    }
    renderGroup(pos: Vector2, renders: ([boolean, (p: Vector2)=> void])[], gap?: number, type?: "row" | "column") {
        const t = type || "row";

        renders.filter(props=> props[0]).map((renderProps, i)=> {

            const offset = i * (Config.SPRITE_SIZE + (gap || 20));
            
            renderProps[1](pos.add(new Vector2(
                t == "row" ? offset : 0,
                t == "column" ? offset : 0,
            )));

        });

    }

    //
    spawnMessageText(text: string) {
        SpawnParticles(this.game, new Vector2(20, innerHeight - 40), {
            // custom: new Text("store-text", text, { font: "22px Pixel" }),
            render(renderer, part) {
                renderer.drawText({
                    text,
                    font: "22px Pixel",
                    position: part.position,
                    opacity: part.size, 
                    layer: "ui",
                    align: "left"
                });
            },
            size: [5, 5],
            count: 1,
            gravity: 0,
            rotationVelocity: ()=> random(-.02, .02),
            velocity: ()=> new Vector2(0, -1.5),
            downSize: .08,
        });
    }
    isFocused(row: number, slot: number): boolean {
        return this.focused.row == row && this.focused.slot == slot;
    }

    // Render
    sprite(assetName: string, props?: DrawSpriteProps) {
        this.game.renderer.drawSprite({
            layer: "ui",
            ...props,
            texture: asImage(this.game.getAssetByName(assetName)),
        });
    }
    text(text: string, props?: DrawTextProps) {
        this.game.renderer.drawText({
            layer: "ui",
            ...props,
            text
        });
    }
    rect(props?: DrawRectProps) {
        this.game.renderer.drawRect({
            layer: "ui",
            ...props,
        }); 
    }
}