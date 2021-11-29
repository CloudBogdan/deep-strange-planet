import { Config } from "../config"
import { ISpriteProps, Sprite } from "../engine"
import { Sound } from "../engine/components/Sound"
import { lerp, random, Vector2 } from "../engine/utils/math"

export class Block extends Sprite {
    inChunkId: string

    sound: Sound
    
    animatedScale: number
    animateScaleTo: number
    darkenFactor: number
    randomRotate: boolean
    randomFlipX: boolean
    
    constructor(name: string, assetName: string, position: Vector2, props?: ISpriteProps) {
        super(name, assetName, {
            colliderType: "solid",
            ...props,
            position: position.add(new Vector2(0, 0)).mul(Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE)
        });

        this.inChunkId = "";
        
        this.sound = new Sound();

        this.animatedScale = 1;
        this.animateScaleTo = 1;
        this.darkenFactor = 1;
        this.randomRotate = true;
        this.randomFlipX = true;
        
    }

    init() {
        super.init();
        
        if (this.randomRotate)
            this.rotation = Math.floor(random(1, 5)) * Math.PI;
        if (this.randomFlipX)
            this.flip.x = Boolean(Math.floor(random(0, 2)));

        if (Config.ALLOW_DARK)
            this.visible = false;
    }
    render() {
        super.render();
        
        if (Config.ALLOW_DARK)
            this.darken();
    }
    update() {
        super.update();

        // this.sound.update3D(this.game, this.position);

        this.animatedScale = lerp(this.animatedScale, this.animateScaleTo, .2);
        this.scale.set(this.animatedScale, this.animatedScale);
    }

    darken() {
        
        const t = 1 - this.game.camera.position.y / 200;
        const d = (this.game.camera.position.distance(this.position) - 200);
        this.darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
        
        if (this.darkenFactor < 1)
            this.opacity = 1 - this.darkenFactor;
        this.visible = this.darkenFactor < .9;

    }
    checkBlockIn(offset: Vector2, findName: string): boolean {

        const blocks = this.game.getChildrenByName<Block>(findName);
        
        return !!blocks.filter(block=> block.name.indexOf("plant") < 0).find(block=> {
            const size = Config.SPRITE_SIZE;
            
            const orePos = block.position.div(size).apply(Math.floor);
            const thisPos = this.position.div(size).apply(Math.floor);
            
            return Vector2.compare(orePos, thisPos.add(offset));
        });
    }
}