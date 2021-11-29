import { Config } from "../../config";
import { SpawnParticles } from "../../engine/components/Particles";
import { Button } from "../../engine/components/UI";
import { random, Vector2 } from "../../engine/utils/math";
import { RobotItem } from "../item/RobotItem";
import { Ore } from "../ores/Ore";
import { Entity } from "./Entity";
import { Player } from "./Player";

export class Robot extends Entity {
    pickupButton: Button
    playerIsNear: boolean
    
    breaked: boolean

    initElapsed: number
    allowPickup: boolean
    
    constructor(position: Vector2) {
        super("robot", "robot-stay", {
            position: position.expand(),
            scale: Vector2.zero()
        });

        this.pickupButton = new Button();
        this.playerIsNear = false;
        
        this.movement = new Vector2(0, 1);
        this.allowAnimate = false;
        this.acceleration.set(.95, .95);

        this.breaked = false;

        this.initElapsed = 0;
        this.allowPickup = false;

        this.digOffsetFactor = .1;
    }

    init() {
        super.init();

        this.scale.set();

        this.initElapsed = this.game.clock.elapsed;
        this.game.gamepad.onKeyDown(this.id, "enter", ()=> {
            if (!this.playerIsNear || !this.allowPickup) return;

            // Pickup robot
            this.pickupButton.click();
            this.pickup();
            console.log(true);
        });

        // Play motor start sound
        this.sound.play(this.game, "motor-start", .5);
        // Play motor sound
        this.sound.play(this.game, "motor", 1, true);
    }
    update() {
        super.update();

        // Audio
        this.sound.update3D(this.game, this.position);

        // Allow pickup
        if (this.scale.mul(10).apply(Math.round).x >= 10 && !this.allowPickup)
            this.allowPickup = true;
        
        // If not in loaded chunk
        if (!this.game.generator.checkIsInLoadedChunk(this.position)) {
            this.velocity.set();
            return;
        }

        this.checkPlayerDistance();
        
        if (!this.breaked)
            this._move();

        if (!this.collider.collidesWith) return;
        const ore = this.game.getChildById<Ore>(this.collider.collidesWith.id);
        if (!ore) return;
        
        // If robot cant destroy ore
        if (ore.needToolLevel > 2 && !this.breaked) {
            this.breaked = true;
        }
        
        this.dig(Config.ROBOT_DAMAGE, Config.ROBOT_HIT_SPEED, 2, "bottom");
        
    }
    render() {
        super.render();

        this.scale.lerp(Vector2.all(), .1);

        // Pickup button
        if (this.playerIsNear) {
            this.pickupButton.position = new Vector2(0, -90).add(this.position)
            this.pickupButton.render(this.game);
            this.game.renderer.drawText({
                text: "Подобрать",
                position: new Vector2(0, -50).add(this.position),
            });
        }
        
        // Smoke
        if (this.breaked)
            this.smoke();

    }

    _move() {
        this.velocity.copy(this.velocity.add(this.movement.mul(.2)));
    }

    smoke() {

        if (this.game.clock.elapsed % 20 == 0) {
            SpawnParticles(this.game, this.position, {
                render: (renderer, part)=> {

                    renderer.drawRect({
                        color: part.color,
                        position: part.position,
                        rotation: part.rotation,
                        width: part.size / 5,
                        height: part.size / 5,
                        opacity: part.opacity
                    });

                },
                colors: ["rgba(50, 50, 50, .8)"],
                count: 1,
                size: [1, 1.5],
                velocity: ()=> new Vector2(random(-1, 1), random(-1, -3)),
                box: ()=> new Vector2(random(-10, 10), random(-10, 10)),
                rotationVelocity: ()=> random(-1, 1) * .01,
                downSize: -.025,
                downOpacity: .008,
                gravity: .01,
            });
        }

    }
    checkPlayerDistance() {

        const player = this.game.getChildById<Player>("player");
        if (!player) return;
        
        this.playerIsNear = player.position.distance(this.position) < Config.ROBOT_PICKUP_DISTANCE
    }
    pickup() {
        this.game.add(new RobotItem(this.position));
        this.game.initChildren();
        this.game.removeChildById(this.id);
        this.playerIsNear = false;
    }
}