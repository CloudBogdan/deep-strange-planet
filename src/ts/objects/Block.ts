import { Config } from "../config"
import { ISpriteProps, Sprite } from "../engine"
import { Sound } from "../engine/components/Sound"
import { ColliderType } from "../engine/Physics"
import { lerp, random, safeValue, Vector2 } from "../engine/utils/math"

export class Block extends Sprite {
    inChunkId: string

    sound: Sound
    
    animatedScale: number
    animateScaleTo: number
    darkenFactor: number
    randomRotate: boolean
    randomFlipX: boolean
    customColliderType: ColliderType | undefined
    
    constructor(name: string, assetName: string, position: Vector2, props?: ISpriteProps) {
        super(name, assetName, {
            colliderType: "none",
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
        this.customColliderType = undefined;
        
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
        this.visible = this.darkenFactor < 1;
        this.collider.type = this.darkenFactor < .8 ? safeValue(this.customColliderType, "solid") : "none";

        // this.game.renderer.drawText({
        //     text: JSON.stringify(+this.inChunkId.split("-")[1] < 3),
        //     position: this.position,
        //     layer: "particles"
        // })

    }
    checkBlockIn(offset: Vector2, findName?: string): boolean {

        const size = Config.SPRITE_SIZE;
        const blocks = this.game.getChildrenByName<Block>(findName || "ore");
        const thisPos = this.position.div(size).apply(Math.floor);
        
        return (+this.inChunkId.split("-")[1]) >= 3 || blocks.filter(block=> block.name.indexOf("plant") < 0).findIndex(block=> {
            const orePos = block.position.div(size).apply(Math.floor);
            
            return Vector2.compare(orePos, thisPos.add(offset));
        }) >= 0;
    }
    // checkBlockInByInChunkId(offset: Vector2, findName?: string): boolean {

    //     const blocks = this.game.getChildrenByName<Block>(findName || "ore");
        
    //     const thisInChunkPos = this.inChunkId.split("-");
    //     return parseInt(thisInChunkPos[1]) < 3 && blocks.filter(block=> block.name.indexOf("plant") < 0).findIndex(block=> {
    //         const oreInChunkPos = block.inChunkId.split("-");
            
    //         return (
    //             +oreInChunkPos[0] == +thisInChunkPos[0] + offset.x &&
    //             +oreInChunkPos[1] == +thisInChunkPos[1] + offset.y
    //         )
            
    //     }) >= 0;
    // }
}