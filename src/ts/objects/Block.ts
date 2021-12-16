import { Config } from "../config"
import { ISpriteProps, Sprite } from "../engine"
import { Sound } from "../engine/components/Sound"
import { ColliderType } from "../engine/Physics"
import { chance, lerp, random, safeValue, Vector2 } from "../engine/utils/math"
import { ItemParent } from "./item/ItemParent"

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
        this.customColliderType = "solid";
        
    }

    static rules(x: number, y: number): boolean {
        return false;
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

        if (this.game.children.find(child=> child.collider.type == "dynamic" && child.position.distance(this.position) < 300))
            this.collider.type = safeValue(this.customColliderType, "solid");
        else
            this.collider.type = "none";
    }

    darken() {
        
        const t = 1 - this.game.camera.position.y / 200;
        const d = (this.game.camera.position.distance(this.position) - 200);
        this.darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
        
        if (this.darkenFactor < 1) 
            this.opacity = 1 - this.darkenFactor;
        this.visible = this.darkenFactor < 1;
    }
    checkBlockIn(offset: Vector2, checkChunkBorders?: boolean, findName?: string): boolean {

        const size = Config.SPRITE_SIZE;
        const blocks = this.game.getChildrenByName<Block>(findName || "ore");
        const thisPos = this.position.div(size).apply(Math.floor);

        const top = +this.inChunkId.split("-")[1] <= 0 && offset.y < 0;
        const bottom = +this.inChunkId.split("-")[1] >= 3 && offset.y > 0;
        const vertical = bottom || top;
        
        return (vertical && safeValue(checkChunkBorders, true)) || blocks.filter(block=> block.name.indexOf("plant") < 0).findIndex(block=> {
            const orePos = block.position.div(size).apply(Math.floor);
            
            return Vector2.compare(orePos, thisPos.add(offset));
        }) >= 0;
    }
    dropItem(item: typeof ItemParent | any, chancePercent?: number, offset?: Vector2) {
        let drop = true;
        
        if (chancePercent)
            drop = chance(chancePercent);
            
        if (!drop) return;
        this.game.add<typeof item>(new (item as any)(this.position.add(offset || Vector2.zero()).add(new Vector2(random(-10, 10), random(-10, 10)))));
        this.game.initChildren();
    }
}