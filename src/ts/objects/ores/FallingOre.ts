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

    init() {
        super.init();
        
        this.acceleration.y = .9;
    }
    update() {
        super.update();

        
        // game.getChildrenByName<Ore>("ore").filter(ore=> this.id != ore.id).map(ore=> {
            
        //     const collide = game.physics.collide(this, ore);

        //     this.allowGravity = !collide.bottom;
                // this.offset.set(0, 20);

            // [0] - x
            // [1] - y
            // [2] - chunk x
            // [3] - chunk y
            // const oreChunkPos = ore.inChunkId.split("-").map(n=> +n);
            // const thisChunkPos = this.inChunkId.split("-").map(n=> +n);

            // if (thisChunkPos[2] == oreChunkPos[2] && thisChunkPos[3] == oreChunkPos[3]) {

            //     if (thisChunkPos[1] + 1 != oreChunkPos[1] && thisChunkPos[0] == oreChunkPos[0])
            //         this.offset.set(0, 20);

            // }
            // this.allowGravity = !(this.position.y > ore.position.y - Config.SPRITE_SIZE && ((this.position.x + Config.SPRITE_SIZE) > (ore.position.x - Config.SPRITE_SIZE)) && ore.position.x > this.position.x);
            // const collide = game.physics.collide(this, ore);
            // this.allowGravity = !collide.any;
            
            // this.collider.collidesWith = collide;
            // this.collideWidth(game, ore);
        // })

        // this.gravity(game, this.allowGravity);
        // console.log(this.collider.collidesWith?.bottom);
        // this.gravity(game, !this.collider.collidesWith?.bottom);
    }

    gravity(allow: boolean) {


        // if (!this.collider.collidesWith?.bottom && this.collider.collidesWith?.id) {
        // if (!this.collider.collidesWith?.bottom) {
        if (allow) {

            // if (!this.willFall) {
            //     this.crumble(game);
            //     this.willFall = true;
            // }

            // if (!this.allowFall) {
            //     if ((game.clock.elapsed - this.elapsedBeforeFall) % Config.ORE_FALL_DELAY == 0)
            //         this.allowFall = true;
            // } else {
                this.velocity.y ++;
                // this.collider.type = "dynamic";
            // }

        } else {
            this.velocity.y = 0;
            // this.allowFall = false;
            // this.willFall = false;
            // this.elapsedBeforeFall = game.clock.elapsed;
            // this.collider.type = "solid";
        }
        // this.collider.collidable = this.collider.collidesWith?.bottom || false;

        // this.collider.collidesWith = null;

    }

    crumble() {
        SpawnParticles(this.game, this.position.add(new Vector2(0, 40)), {
            velocity: ()=> new Vector2(random(-2, 2), 0),
            box: ()=> new Vector2(random(-40, 40), 0),
            count: 5,
        });
    }
}