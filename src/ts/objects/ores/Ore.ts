import { chance, lerp, random, Vector2 } from "../../engine/utils/math";
import { Game, Sprite } from "../../engine";
import { Config, Color, OreSettings } from "../../config";
import { Player, ToolLevel } from "../entities/Player";
import { SpawnParticles } from "../../engine/components/Particles";
import { Renderer } from "../../engine/Renderer";
import { Raw } from "../raws/Raw";
import { Audio } from "../../engine/components/Audio";
import { Block } from "../Block";
import { FetusVine } from "../plants/FetusVine";

export type OreType =
    "stone" | "stony-ground" | "deep-stone" | "destrony" | "manty" |
    "cracked-stone" | "basalt" | "burnt-basalt" |
    "cidium" | "osmy" | "antin" | "rady" | "nerius" | "fetus-stone";

export class Ore extends Block {
    oreType: OreType

    hp: number
    tilePosition: Vector2
    unbreakable: boolean
    needToolLevel: ToolLevel
    
    particlesColors: string[]
    allowGrowVine: boolean

    constructor(type: OreType, position: Vector2) {
        super(`ore-${ type }`, type, position);
        
        this.oreType = type;
        this.tilePosition = position
        
        const settings = OreSettings[type];
        this.hp = settings ? settings.hp : OreSettings["stone"].hp;
        this.needToolLevel = OreSettings[type]?.tool || 1;
        this.unbreakable = false;

        this.particlesColors = [Color.BLACK];
        this.allowGrowVine = false;
    }

    init() {
        super.init();

        this.growVine();
    }
    update() {
        super.update();
        
        this.animatedScale = lerp(this.animatedScale, 1, .2);
        this.scale.set(this.animatedScale, this.animatedScale);
    }
    
    hit(damage: number, toolLevel: ToolLevel) {
        // Break audio
        if (this.hp > 0)
            this.audio.play(this.game, "stone-hit");
        
        if (this.unbreakable || toolLevel < this.needToolLevel) return;

        this.hp -= damage;
        this.animatedScale = .8;
        SpawnParticles(this.game, this.position, {
            colors: this.particlesColors,
            size: [.2, .5],
            count: 6,
            box: ()=> new Vector2(random(-Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE / 2), random(-Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE / 2))
        });

        if (this.hp <= 0) {
            this.onBreak();
            // Destroy audio
            this.audio.play(this.game, `stone-break-${ Math.floor(random(1, 4)) }`);
        }


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

    growVine() {
        if (!this.allowGrowVine) return;

        if (!this.checkBlockIn(new Vector2(0, 1), "ore")) {
            this.game.add(new FetusVine(this.position.add(new Vector2(0, Config.SPRITE_SIZE)).div(Config.SPRITE_SIZE).apply(Math.floor)));
            this.game.initChildren();
        }
    }
}