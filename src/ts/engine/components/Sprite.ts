import { IPointProps, Point } from "./Point";
import { asImage, assetIsValid, Vector2 } from "../utils/math";
import messages from "../../messages";
import { Config } from "../../config";

export type ISpriteProps = {
    width?: number
    height?: number

    flip?: { x: boolean, y: boolean }
    repeat?: Vector2
    frame?: Vector2
} & IPointProps;

export class Sprite extends Point {
    width: number
    height: number

    offset: Vector2
    flip: { x: boolean, y: boolean }
    repeat: Vector2
    frame: Vector2

    assetName: string
    texture: HTMLImageElement | null | undefined;
    opacity: number
    
    constructor(name: string, assetName: string, props?: ISpriteProps) {
        super(name, props);
        this.type = "sprite";

        this.width = props?.width || 1;
        this.height = props?.height || 1;

        this.offset = Vector2.zero();
        this.flip = props?.flip || { x: false, y: false };
        this.repeat = props?.repeat || Vector2.all();
        this.opacity = 1;
        this.frame = props?.frame || Vector2.zero();

        this.assetName = assetName;
        this.texture = null;
    }
    
    init() {
        super.init();
        
        this.updateAsset();
    }
    
    updateAsset() {
        this.texture = asImage(this.game.getAssetByName(this.assetName));
    }
    update() {
        super.update();
    }
    render() {
        super.render();

        if (!this.texture || !this.visible) return;

        this.game.renderer.drawSprite({
            ...this,
            texture: this.texture
        });
    }

    blink() {
        if (this.game.tick(5))
            this.visible = !this.visible;
    }

    playAnimation(assetName: string, framesCount: number, speed?: number) {
        this.texture = asImage(this.game.getAssetByName(assetName));
        
        if (framesCount <= 1) {
            this.frame.x = 0;
            return;
        }

        if (this.game.tick(speed || Config.DEFAULT_ANIMATION_SPEED)) {
            this.frame.x ++;
            if (this.frame.x >= framesCount)
                this.frame.x = 0;
        }
    }
}