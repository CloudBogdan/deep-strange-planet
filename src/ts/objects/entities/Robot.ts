import { Config } from "../../config";
import { Game } from "../../engine";
import { SpawnParticles } from "../../engine/components/Particles";
import { Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { random, Vector2 } from "../../engine/utils/math";
import { Direction } from "../../types";
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

    init(game: Game) {
        super.init(game);

        this.scale.set();

        this.initElapsed = game.clock.elapsed;
        game.gamepad.onKeyDown(this.id, "enter", ()=> {
            if (!this.playerIsNear || !this.allowPickup) return;

            // Pickup robot
            this.pickupButton.click();
            this.pickup(game);
            console.log(true);
        });

        // Play motor start sound
        // this.audio.play(game, "motor-start");
        // Play motor sound
        this.audio.play(game, "motor", .5, true);
    }
    update(game: Game) {
        super.update(game);

        // Audio
        this.audio.update3D(game, this.position);

        // Allow pickup
        if (this.scale.mul(10).apply(Math.round).x >= 10 && !this.allowPickup)
            this.allowPickup = true;
        
        // If not in the viewport
        if (!game.renderer.inCameraViewport(this.position)) {
            this.velocity.set();
            return;
        }

        this.checkPlayerDistance(game);
        
        if (!this.breaked)
            this._move();

        if (!this.collider.collidesWith) return;
        const ore = game.getChildById<Ore>(this.collider.collidesWith.id);
        if (!ore) return;
        
        // If robot cant destroy ore
        if (ore.needToolLevel > 2 && !this.breaked) {
            this.breaked = true;
        }
        
        this.dig(game, Config.ROBOT_DAMAGE, Config.ROBOT_HIT_SPEED, 2, "bottom");
        
    }
    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        this.scale.lerp(Vector2.all(), .1);

        // Pickup button
        if (this.playerIsNear) {
            this.pickupButton.position = new Vector2(0, -90).add(this.position)
            this.pickupButton.render(game);
            game.renderer.drawText({
                text: "Подобрать",
                position: new Vector2(0, -50).add(this.position),
            });
        }
        
        // Smoke
        if (this.breaked)
            this.smoke(game);

    }

    _move() {
        this.velocity.copy(this.velocity.add(this.movement.mul(.2)));
    }

    smoke(game: Game) {

        if (game.clock.elapsed % 20 == 0) {
            SpawnParticles(game, this.position, {
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
    checkPlayerDistance(game: Game) {

        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        this.playerIsNear = player.position.distance(this.position) < Config.ROBOT_PICKUP_DISTANCE
    }
    pickup(game: Game) {
        game.add(new RobotItem(this.position));
        game.initChildren();
        game.removeChildById(this.id);
        this.playerIsNear = false;
    }
}