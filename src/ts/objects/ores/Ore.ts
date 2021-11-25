import { chance, lerp, random, Vector2 } from "../../engine/utils/math";
import { Game, Sprite } from "../../engine";
import { Config, Color, OreSettings } from "../../config";
import { Player, ToolLevel } from "../entities/Player";
import { SpawnParticles } from "../../engine/components/Particles";
import { Renderer } from "../../engine/Renderer";
import { Raw } from "../raws/Raw";
import { Audio } from "../../engine/components/Audio";

export type OreType =
    "stone" | "stony-ground" | "deep-stone" | "destrony" | "manty" |
    "cracked-stone" | "basalt" | "burnt-basalt" |
    "cidium" | "osmy" | "antin" | "rady" | "nerius";

export class Ore extends Sprite {
    audio: Audio
    
    oreType: OreType
    inChunkId: string

    hp: number
    tilePosition: Vector2
    unbreakable: boolean
    needToolLevel: ToolLevel
    
    particlesColors: string[]
    animatedScale: number
    darkenFactor: number
    randomRotate: boolean
    randomFlipX: boolean

    constructor(type: OreType, position: Vector2) {
        super(`ore-${ type }`, type, {
            position: position.add(new Vector2(0, 0)).mul(Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE),
            colliderType: "solid"
        });

        this.audio = new Audio();
        
        this.oreType = type;
        this.tilePosition = position
        this.inChunkId = "";
        
        const settings = OreSettings[type];
        this.hp = settings ? settings.hp : OreSettings["stone"].hp;
        this.needToolLevel = OreSettings[type]?.tool || 1;
        this.unbreakable = false;
        
        this.particlesColors = [Color.BLACK];
        this.animatedScale = 1;
        this.darkenFactor = 1;
        this.randomRotate = true;
        this.randomFlipX = true;
    }
    
    init(game: Game) {
        super.init(game);
        
        if (this.randomRotate)
            this.rotation = Math.floor(random(1, 5)) * Math.PI;
        if (this.randomFlipX)
            this.flip.x = Boolean(Math.floor(random(0, 2)));

        if (Config.ALLOW_DARK)
            this.visible = false;
    }

    update(game: Game) {
        super.update(game);
        
        this.animatedScale = lerp(this.animatedScale, 1, .2);
        this.scale.set(this.animatedScale, this.animatedScale);
        
        this.audio.update3D(game, this.position);
    }
    
    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);
        
        if (Config.ALLOW_DARK)
            this.darken(game);
    }
    hit(game: Game, damage: number, toolLevel: ToolLevel) {
        // Break audio
        if (this.hp > 0)
            this.audio.play(game, "stone-hit");
        
        if (this.unbreakable || toolLevel < this.needToolLevel) return;

        this.hp -= damage;
        this.animatedScale = .8;
        SpawnParticles(game, this.position, {
            colors: this.particlesColors,
            size: [.2, .5],
            count: 6,
            box: ()=> new Vector2(random(-Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE / 2), random(-Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE / 2))
        });

        if (this.hp <= 0) {
            this.onBreak(game);
            // Destroy audio
            this.audio.play(game, `stone-break-${ Math.floor(random(1, 4)) }`);
        }


    }
    onBreak(game: Game) {

        SpawnParticles(game, this.position, {
            colors: this.particlesColors,
        });
        game.removeChildById(this.id);
        game.generator.destroyOre(this.inChunkId);

    }
    dropRawOre(game: Game, rawOre: typeof Raw | any, chancePercent?: number) {
        let drop = true;
        
        if (chancePercent)
            drop = chance(chancePercent);
            
        if (!drop) return;
        game.add<typeof rawOre>(new (rawOre as any)(this.position.add(new Vector2(random(-10, 10), random(-10, 10)))));
        game.initChildren();
    }

    darken(game: Game) {

        // const player = game.getChildById<Player>("player");
        // if (!player) return;
        
        const t = 1 - game.camera.position.y / 200;
        const d = (game.camera.position.distance(this.position) - 200);
        this.darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
        
        if (this.darkenFactor < 1)
            this.opacity = 1 - this.darkenFactor;
            // game.renderer.drawRect(
            //     // `rgba(255, 0, 0, ${ this.darkenFactor })`,
            //     `rgba(15, 21, 49, ${ this.darkenFactor > 0 ? this.darkenFactor : 0  })`,
            //     1, 1,
            //     this.position, 0,
            // );
        this.visible = this.darkenFactor < .9;

    }
}