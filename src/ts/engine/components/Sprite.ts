import { IPointProps, Point } from "./Point";
import { asImage, assetIsValid, Vector2 } from "../utils/math";
import messages from "../../messages";
import { Config } from "../../config";

export type ISpriteProps = {
    width?: number
    height?: number

    flip?: { x: boolean, y: boolean }
    repeat?: Vector2
    frame: Vector2
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
    visible: boolean
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
        this.visible = true;
    }
    
    init() {
        super.init();
        
        this.updateAsset();
    }
    
    updateAsset() {

        const asset = this.game.getAssetByName(this.assetName);
        if (assetIsValid(asset, "image") && asset)
            this.texture = asImage(asset);
        else 
            console.error(messages.err.animationLoadError(this.assetName));
        
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

    playAnimation(assetName: string, speed?: number) {
        // const asset = this.game.getAssetByName(assetName);
        // if (!assetIsValid(asset, "image")) {
        //     console.error(messages.err.animationLoadError(assetName));
        //     return;
        // }

        // const el = asset!.element as HTMLImageElement[];
        
        // if (this.game.clock.elapsed % (speed || Config.DEFAULT_ANIMATION_SPEED) == 0) {
        //     this.texture = el.length == 1 ? el[0] : el[this.frame.x];
        //     this.frame.x ++;
        // }
        // if (this.frame.x > el.length - 1 || el.length == 1)
        //     this.frame.x = 0;
    }
}