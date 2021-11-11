import { IPointProps, Point } from "./Point";
import { Game } from "..";
import { assetIsValid, Vector2 } from "../utils/math";
import messages from "../../messages";
import { Config } from "../../config";
import { Renderer } from "../Renderer";

export type ISpriteProps = {
    width?: number
    height?: number

    flip?: { x: boolean, y: boolean }
    repeat?: number
} & IPointProps;

export class Sprite extends Point {
    width: number
    height: number

    offset: Vector2
    flip: { x: boolean, y: boolean }
    repeat: number

    assetName: string
    texture: HTMLImageElement | null | undefined;
    visible: boolean
    opacity: number
    
    frame: number
    
    constructor(name: string, assetName: string, props?: ISpriteProps) {
        super(name, props);
        this.type = "sprite";

        this.width = props?.width || 1;
        this.height = props?.height || 1;

        this.offset = Vector2.zero();
        this.flip = props?.flip || { x: false, y: false };
        this.repeat = props?.repeat || 1;
        this.opacity = 1;

        this.assetName = assetName;
        this.texture = null;
        this.visible = true;

        this.frame = 0;
        
    }
    
    init(game: Game) {
        super.init(game);
        
        this.updateAsset(game);
    }
    
    updateAsset(game: Game) {

        const asset = game.getAssetByName(this.assetName);
        if (assetIsValid(asset, "image"))
            this.texture = (asset!.element as HTMLImageElement[])[0];
        else 
            console.error(messages.err.animationLoadError(this.assetName));
        
    }
    update(game: Game) {
        super.update(game);
    }
    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        if (this.texture && this.visible)
            game.renderer.drawSprite(
                this.texture,
                this.width, this.height,
                this.position, this.rotation, this.offset,
                this.layer,
                this.scale, this.flip, this.opacity, this.repeat
            );
    }

    playAnimation(game: Game, assetName: string, speed?: number) {
        const asset = game.getAssetByName(assetName);
        if (!assetIsValid(asset, "image")) {
            console.error(messages.err.animationLoadError(assetName));
            return;
        }

        const el = asset!.element as HTMLImageElement[];
        
        if (game.clock.elapsed % (speed || Config.DEFAULT_ANIMATION_SPEED) == 0) {
            this.texture = el.length == 1 ? el[0] : el[this.frame];
            this.frame ++;
        }
        if (this.frame > el.length - 1 || el.length == 1)
            this.frame = 0;
    }
}