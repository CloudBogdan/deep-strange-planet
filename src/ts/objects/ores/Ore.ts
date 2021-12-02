import { asImage, chance, inChunkIdToPosition, inRange, lerp, random, randomInt, randomNoise, Vector2 } from "../../engine/utils/math";
import { Game, ISpriteProps, Sprite } from "../../engine";
import { Config, Color, OreSettings } from "../../config";
import { Player, ToolLevel } from "../entities/Player";
import { SpawnParticles } from "../../engine/components/Particles";
import { Renderer } from "../../engine/Renderer";
import { Raw } from "../raws/Raw";
import { Sound } from "../../engine/components/Sound";
import { Block } from "../Block";
import { FetusVine } from "../plants/FetusVine";
import { simplex2 } from "../../engine/utils/noise";

export type OreType =
    "stone" | "stony-ground" | "deep-stone" | "destrony" | "manty" |
    "cracked-stone" | "basalt" | "burnt-basalt" |
    "cidium" | "osmy" | "antin" | "rady" | "nerius" | "fetus-stone" | "mushroom-stone";

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
    decorationsCount: number
    currentDecorationFrame: number | null

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
        this.decorationsCount = 10;
        this.currentDecorationFrame = null;
    }

    init() {
        super.init();

        if (!this.allowDecorations) return;
        
        if (chance(50)) {
            this.currentDecorationFrame = randomInt(0, this.decorationsCount);
        } else {
            this.currentDecorationFrame = null;
        }

        if (this.checkBlockIn(new Vector2(0, 1))) {
            this.allowDecorations = false;
        }

    }

    update() {
        super.update();

        
    }
    render() {
        super.render();

        if (this.allowDecorations)
            this.renderDecorations();
    }

    renderDecorations() {
        if (!this.visible || !this.currentDecorationFrame) return;
        
        this.game.renderer.drawSprite({
            texture: asImage(this.game.getAssetByName("under-stone")),
            frame: new Vector2(this.currentDecorationFrame, 0),
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
    dropRawOre(rawOre: typeof Raw | any, chancePercent?: number) {
        let drop = true;
        
        if (chancePercent)
            drop = chance(chancePercent);
            
        if (!drop) return;
        this.game.add<typeof rawOre>(new (rawOre as any)(this.position.add(new Vector2(random(-10, 10), random(-10, 10)))));
        this.game.initChildren();
    }
}