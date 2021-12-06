import { asImage, chance, random, randomInt, Vector2 } from "../../engine/utils/math";
import { ISpriteProps } from "../../engine";
import { Config, Color, OreSettings } from "../../config";
import { ToolLevel } from "../entities/Player";
import { SpawnParticles } from "../../engine/components/Particles";
import { Block } from "../Block";

export type OreType =
    "stone" | "stony-ground" | "deep-stone" | "destrony" | "manty" |
    "cracked-stone" | "basalt" | "burnt-basalt" |
    "cidium" | "osmy" | "antin" | "rady" | "nerius" | "fetus-stone" | "mushroom-stone" |
    "stalactite";

export class Ore extends Block {
    oreType: OreType

    hp: number
    tilePosition: Vector2
    unbreakable: boolean
    needToolLevel: ToolLevel
    
    particlesColors: string[]
    hitAudioName: string
    breakAudioNames: string[]

    allowDecorations: boolean
    
    allowBottomDecorations: boolean
    bottomDecorationsCount: number
    currentBottomDecorationFrame: number | null

    allowTopDecorations: boolean
    topDecorationsCount: number
    currentTopDecorationFrame: number | null

    constructor(type: OreType, position: Vector2, props?: ISpriteProps) {
        super(`ore-${ type }`, type, position, props);
        
        this.oreType = type;
        this.tilePosition = position
        
        const settings = OreSettings[type];
        this.hp = settings ? settings.hp : OreSettings["stone"].hp;
        this.needToolLevel = OreSettings[type]?.tool || 1;
        this.unbreakable = false;

        this.particlesColors = [Color.BLACK];
        this.hitAudioName = "stone-hit";
        this.breakAudioNames = ["stone-break-1", "stone-break-2", "stone-break-3"];

        this.allowDecorations = false;
        
        this.allowBottomDecorations = false;
        this.bottomDecorationsCount = 8;
        this.currentBottomDecorationFrame = null;
        
        this.allowTopDecorations = false;
        this.topDecorationsCount = 10;
        this.currentTopDecorationFrame = null;
    }

    init() {
        super.init();

        if (!this.allowDecorations) return;
        
        // Top
        if (!this.checkBlockIn(new Vector2(0, -1)))
            this.allowTopDecorations = true;
        // Bottom
        if (!this.checkBlockIn(new Vector2(0, 1)))
            this.allowBottomDecorations = true;
        
            
        if (this.allowTopDecorations) {
            if (chance(50))
                this.currentTopDecorationFrame = randomInt(0, this.topDecorationsCount);
            else
                this.currentTopDecorationFrame = null;
        }
        if (this.allowBottomDecorations) {
            if (chance(50))
                this.currentBottomDecorationFrame = randomInt(0, this.bottomDecorationsCount);
            else
                this.currentBottomDecorationFrame = null;
        }

    }

    render() {
        super.render();

        this.renderDecorations();
    }

    renderDecorations() {
        if (!this.visible) return;

        if (this.currentTopDecorationFrame)
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName("plants")),
                flip: this.flip,
                frame: new Vector2(this.currentTopDecorationFrame, 0),
                position: this.position.add(new Vector2(0, -Config.SPRITE_SIZE + (1-this.scale.y) * Config.SPRITE_SIZE)),
                opacity: this.opacity,
                scale: this.scale
            });

        if (this.currentBottomDecorationFrame)
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName("under-stone")),
                flip: this.flip,
                frame: new Vector2(this.currentBottomDecorationFrame, 0),
                position: this.position.add(new Vector2(0, Config.SPRITE_SIZE - (1-this.scale.y) * Config.SPRITE_SIZE)),
                opacity: this.opacity,
                scale: this.scale
            });

    }
    
    hit(damage: number, toolLevel: ToolLevel) {
        if (!this.unbreakable && toolLevel >= this.needToolLevel) {

            this.hp -= damage;
            this.animatedScale = .8;
            
            SpawnParticles(this.game, this.position, {
                colors: this.particlesColors,
                size: [.2, .5],
                count: 6,
                box: ()=> new Vector2(random(-Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE / 2), random(-Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE / 2))
            });

            if (this.hp <= 0) {
                // Break audio
                this.sound.play(this.game, this.breakAudioNames[randomInt(0, this.breakAudioNames.length-1)]);
                this.onBreak();
            }
        }

        // Hit audio
        if (this.hp > 0)
            this.sound.play(this.game, this.hitAudioName);

    }
    onBreak() {

        SpawnParticles(this.game, this.position, {
            colors: this.particlesColors,
        });
        this.game.removeChildById(this.id);
        this.game.generator.destroyOre(this.inChunkId);

    }
}