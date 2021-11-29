import { Color, Config } from "../../config";
import { SpawnParticles } from "../../engine/components/Particles";
import { asImage, chance, clamp, random, randomInt, Vector2 } from "../../engine/utils/math";
import { Ore } from "./Ore";

export class FetusStone extends Ore {
    length: number | null
    maxLength: number
    allowGrow: boolean
    
    constructor(position: Vector2, data?: { length?: number, maxLength?: number }) {
        super("fetus-stone", position);
    
        this.randomRotate = false;

        this.length = data ? (data?.length || null) : null;
        this.maxLength = data ? (data?.maxLength || 1) : 1;
        this.allowGrow = true;

        this.breakAudioNames = ["plant-break"];
    }

    init() {
        super.init();

        if (this.length === null) {
            this.maxLength = clamp(randomInt(-1, Config.VINE_MAX_LENGTH), Config.VINE_MIN_LENGTH, Config.VINE_MAX_LENGTH);
            this.length = clamp(randomInt(0, 4), 0, this.maxLength);
            this.saveData();
        }

        this.checkEmptySpace();
        this.game.generator.onWorldChange(this.id, this.position, ()=> this.checkEmptySpace());
    }
    update() {
        super.update();

        if (this.game.tick(Config.VINE_GROW_TICK))
            if (chance(Config.VINE_GROW_CHANCE))
                this.grow();
    }

    render() {
        super.render();

        // this.game.renderer.drawText({
        //     text: this.maxLength.toString(),
        //     position: this.position
        // });
        
        if (this.allowGrow)
            this.renderVine();
    }

    onBreak() {
        super.onBreak();
        if (!this.length) return;
        const size = Config.SPRITE_SIZE;

        SpawnParticles(this.game, this.position, {
            count: 4,
            colors: [Color.ORANGE],
            velocity: ()=> new Vector2(random(1, 1.5)),
            gravity: .01,
            opacity: 0,
            downOpacity: -.01,
            downSize: .008,
            rotationVelocity: ()=> random(-.01, .01),
            box: ()=> new Vector2(random(-size*.4, size*.4), random(0, size * (this.length || 1)))
        });
    }

    renderVine() {
        if (!this.length) return;
        const size = Config.SPRITE_SIZE;
        
        for (let i = 0; i < this.length; i ++) {
            let spriteIndex = 0

            if (i == 0)
                spriteIndex = 0;
            if (i > 0)
                spriteIndex = 1;
            if (i == this.length - 1)
                spriteIndex = 2;
            
            const pos = this.position.add(new Vector2(0, size + i * size));
                
            const t = 1 - this.game.camera.position.y / 200;
            const d = (this.game.camera.position.distance(pos) - 200);
            const darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
            
            if (darkenFactor < .9 || !Config.ALLOW_DARK)
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(`fetus-vine`)),
                    position: pos.add(new Vector2(Math.sin(this.game.clock.elapsed / 40 + i + this.position.x))),
                    width: 1,
                    height: 1,

                    clip: {
                        position: new Vector2(0, spriteIndex * Config.SPRITE_PIXEL_SIZE)
                    },
                    flip: { x: i % 2 == 0 || i % 3 == 0, y: false },
                    opacity: Config.ALLOW_DARK ? 1 - darkenFactor : 1
                });
        }
        
        // Spawn particles
        if (this.game.tick(40) || this.game.tick(120))
            SpawnParticles(this.game, this.position, {
                count: 1,
                colors: [Color.ORANGE],
                velocity: ()=> new Vector2(random(.2, .5)),
                gravity: .01,
                opacity: 0,
                downOpacity: -.01,
                downSize: .008,
                rotationVelocity: ()=> random(-.01, .01),
                box: ()=> new Vector2(random(-size*.4, size*.4), random(0, size * (this.length || 1)))
            });
        
    }
    grow() {
        if (this.length === null) return;

        let needLength = this.length;
        let height = 0;
        
        if (needLength + 1 < this.maxLength)
            needLength ++;

        for (let i = 1; i < 8; i ++) {
            height ++;
            if (this.checkBlockIn(new Vector2(0, i), "ore"))
                break;
        }

        if (this.checkBlockIn(new Vector2(0, needLength), "ore"))
            needLength --;

        this.length = clamp(needLength, 0, height);

        this.saveData();
    }

    saveData() {
        this.game.generator.modifyOre(this.inChunkId, {
            length: this.length,
            maxLength: this.maxLength
        });
    }
    checkEmptySpace() {
        if (this.checkBlockIn(new Vector2(0, 1), "ore") && this.allowGrow)
            this.allowGrow = false;
    }
}