import { Config } from "../../config";
import { Game } from "../../engine";
import { SpawnParticles } from "../../engine/components/Particles";
import { random, Vector2 } from "../../engine/utils/math";
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

    init(game: Game) {
        super.init(game);
        
        this.acceleration.y = .9;
    }
    update(game: Game) {
        super.update(game);

        
        // game.getChildrenByName<Ore>("ore").map(ore=> {
            // if (this.inChunkId == ore.inChunkId) return;
            
            // if (+ore.inChunkId.split(" ")[0])
            // this.allowGravity = !(this.position.y > ore.position.y - Config.SPRITE_SIZE && ((this.position.x + Config.SPRITE_SIZE) > (ore.position.x - Config.SPRITE_SIZE)) && ore.position.x > this.position.x);
            // const collide = game.physics.collide(this, ore);
            // this.allowGravity = !collide.any;
            
            // console.log(collide);
            // this.collider.collidesWith = collide;
            // this.collideWidth(game, ore);
        // })
        // console.log(this.collider.collidesWith?.bottom);
        // this.gravity(game, !this.collider.collidesWith?.bottom);
    }

    gravity(game: Game, allow: boolean) {


        // if (!this.collider.collidesWith?.bottom && this.collider.collidesWith?.id) {
        // if (!this.collider.collidesWith?.bottom) {
        if (this.allowGravity) {

            if (!this.willFall) {
                this.crumble(game);
                this.willFall = true;
            }

            if (!this.allowFall) {
                if ((game.clock.elapsed - this.elapsedBeforeFall) % Config.ORE_FALL_DELAY == 0)
                    this.allowFall = true;
            } else {
                this.velocity.y ++;
                // this.collider.type = "dynamic";
            }

        } else {
            this.allowFall = false;
            this.willFall = false;
            this.elapsedBeforeFall = game.clock.elapsed;
            this.collider.type = "solid";
        }
        // this.collider.collidable = this.collider.collidesWith?.bottom || false;

        // this.collider.collidesWith = null;

    }

    crumble(game: Game) {
        SpawnParticles(game, this.position.add(new Vector2(0, 40)), {
            velocity: ()=> new Vector2(random(-2, 2), 0),
            box: ()=> new Vector2(random(-40, 40), 0),
            count: 5,
        });
    }
}