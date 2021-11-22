import { Config } from "../../config";
import { Game } from "../../engine";
import { SpawnParticles } from "../../engine/components/Particles";
import { Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { random, Vector2 } from "../../engine/utils/math";
import { Direction } from "../../types";
import { Ore } from "../ores/Ore";
import { Entity } from "./Entity";
import { Player } from "./Player";

export class Robot extends Entity {
    pickupButton: Button
    playerIsNear: boolean
    
    breaked: boolean
    
    constructor() {
        super("robot", "robot-stay", {
            position: new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2 - Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE)
        });

        this.pickupButton = new Button();
        this.playerIsNear = false;
        
        this.movement = new Vector2(0, 1);
        this.allowAnimate = false;
        this.acceleration.set(.95, .95);

        this.breaked = false;
    }

    init(game: Game) {
        super.init(game);

        game.gamepad.onKeyDown("enter", ()=> {
            if (!this.playerIsNear) return;

            this.pickupButton.click();
            console.log(true);
        });
    }
    update(game: Game) {
        super.update(game);
        if (!game.renderer.inCameraViewport(this.position)) {
            this.velocity.set();
            return;
        }

        this.pickup(game);
        
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
    pickup(game: Game) {

        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        this.playerIsNear = player.position.distance(this.position) < Config.ROBOT_PICKUP_DISTANCE
    }
}