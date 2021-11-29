import { Config } from "../../config";
import { Game } from "../../engine";
import { SpawnParticles } from "../../engine/components/Particles";
import { clamp, random, randomInt, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Ore, OreType } from "./Ore";

export class FallingOre extends Ore {
    elapsedBeforeFall: number
    allowFall: boolean
    willFall: boolean
    allowGravity: boolean
    
    constructor(type: OreType, position: Vector2) {
        super(type, position);

        this.elapsedBeforeFall = 0;
        this.allowFall = false;
        this.willFall = false;
        this.allowGravity = false;
    }

    init() {
        super.init();
        
        this.acceleration.y = .98;

        this.game.generator.onWorldChange(this.id, this.position, ()=> {

            if (!this.checkBlockIn(new Vector2(0, 1), "ore")) {
                this.allowGravity = true;
                this.animateScaleTo = .7;
                this.crumble();
            }

        });
    }
    update() {
        super.update();

        this.gravity();
    }

    gravity() {

        if (this.game.generator.checkIsInLoadedChunk(this.position)) {
            if (this.allowGravity) {

                if ((this.game.clock.elapsed - this.elapsedBeforeFall) % Config.ORE_FALL_DELAY == 0 && !this.allowFall)
                    this.allowFall = true;

                if (this.allowFall) {
                    if (this.collider.collidesWith?.bottom) {
                        this.destroy();
                    }
                    
                    this.collider.type = "dynamic";
                    this.collider.width =
                    this.collider.height = Config.SPRITE_SCALE * 6;
                    this.velocity.y ++;

                    const player = this.game.getChildById<Player>("player")

                    if (player && this.game.physics.collide(player, this).any) {
                        player.hit(clamp(randomInt(0, 5), 2, 5));
                    }
                    
                }
            }
        } else {
            // this.velocity.y = 0;
            if (!this.allowFall)
                this.elapsedBeforeFall = this.game.clock.elapsed;
            else
                this.destroy();
        }

        this.collider.collidesWith = null;

    }
    destroy() {

        SpawnParticles(this.game, this.position);
        
        this.sound.play(this.game, "fall-stone-break"); 
        this.game.removeChildById(this.id);
        this.game.generator.destroyOre(this.inChunkId);

    }

    crumble() {
        SpawnParticles(this.game, this.position.add(new Vector2(0, 40)), {
            velocity: ()=> new Vector2(random(-2, 2), 0),
            box: ()=> new Vector2(random(-40, 40), 0),
            count: 5,
        });
    }
}