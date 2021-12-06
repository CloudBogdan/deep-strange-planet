import { Config } from "../../config";
import { Game } from "../../engine";
import { SpawnCrumbleParticles, SpawnParticles } from "../../engine/components/Particles";
import { clamp, random, randomInt, Vector2 } from "../../engine/utils/math";
import { Entity } from "../entities/Entity";
import { Player } from "../entities/Player";
import { Ore, OreType } from "./Ore";

export class FallingOre extends Ore {
    damage: [number, number]
    
    elapsedBeforeFall: number
    allowFall: boolean
    willFall: boolean
    
    constructor(type: OreType, position: Vector2) {
        super(type, position);

        this.damage = [2, 5];

        this.elapsedBeforeFall = 0;
        this.allowDecorations = true;
        this.allowFall = false;
        this.willFall = false;
        this.customColliderType = "solid";
    }

    init() {
        super.init();
        
        this.acceleration.y = .98;

        // this.game.generator.onWorldChange(this.id, this.position, ()=> {

        //     if (!this.checkBlockIn(new Vector2(0, 1), false)) {
        //         this.animateScaleTo = .7;
        //         SpawnCrumbleParticles(this.game, this.position.add(new Vector2(0, 40)));
        //     }

        // });
    }
    update() {
        super.update();

        this.gravity();
    }

    gravity() {
        if (!this.willFall) {
            this.elapsedBeforeFall = this.game.clock.elapsed;
            return;
        }
        
        if (this.game.generator.checkIsInLoadedChunk(this.position)) {

            if ((this.game.clock.elapsed - this.elapsedBeforeFall) % Config.ORE_FALL_DELAY == 0 && !this.allowFall)
                this.allowFall = true;

            if (this.allowFall) {
                if (this.collider.collidesWith?.bottom) {
                    this.fallDestroy();
                }
                
                this.customColliderType = "dynamic";
                this.velocity.y ++;

                this.hitEntity();

            }
        } else {
            if (this.allowFall)
                this.fallDestroy();
        }

        this.collider.collidesWith = null;
    }
    fall() {
        this.willFall = true;
        SpawnCrumbleParticles(this.game, this.position.add(new Vector2(0, 40)), this.particlesColors);
    }
    fallDestroy() {

        SpawnParticles(this.game, this.position, { colors: this.particlesColors });
        
        this.sound.play(this.game, "fall-stone-break"); 
        this.game.removeChildById(this.id);
        this.game.generator.destroyOre(this.inChunkId);

    }
    hitEntity() {
        const entity = this.game.getChildrenByGroupName<Entity>("entity").find(child=> {

            return this.game.physics.collide(this, child).any;

        });
        if (!entity) return;

        entity.hit(randomInt(this.damage[0], this.damage[0]));
    }
}