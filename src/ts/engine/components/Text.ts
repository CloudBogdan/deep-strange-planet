import { Game } from "../Game";
import { Renderer } from "../Renderer";
import { Point, IPointProps } from "./Point";

export type ITextProps = {
    font?: string
    color?: string
} & IPointProps;

export class Text extends Point {
    font: string
    color: string
    text: string
    
    constructor(name: string, text: string, props?: ITextProps) {
        super(name, props);

        this.text = text;
        this.font = props?.font || "18px Pixel";
        this.color = props?.color || "#fff";
    }

    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        game.renderer.drawText(
            this.text, this.color, this.font,
            this.position, this.rotation, this.scale
        );
    }
}