import { Color, Config } from "../../config";
import { Game, ISpriteProps, Sprite } from "../../engine"
import { Sound } from "../../engine/components/Sound";
import { SpawnParticles } from "../../engine/components/Particles";
import { random, safeValue, Vector2 } from "../../engine/utils/math"
import { Direction } from "../../types";
import { Ore } from "../ores/Ore";
import { ToolLevel } from "./Player";

export type IEntityProps = {
    hp?: number
    moveSpeed?: number
} & ISpriteProps;

export class Entity extends Sprite {
    sound: Sound
    hp: number
    moveSpeed: number
    damaged: boolean
    damagedElapsed: number

    movement: Vector2
    allowMove: boolean
    allowAnimate: boolean

    digOffsetFactor: number
    
    constructor(name: string, assetName: string, props?: IEntityProps) {
        super(name, assetName, props);
        
        this.sound = new Sound();
        this.hp = props?.hp || 10;
        this.moveSpeed = props?.moveSpeed || 5;
        this.damaged = false;
        this.damagedElapsed = 0;
        
        this.movement = new Vector2();
        this.allowMove = true;
        this.allowAnimate = true;

        this.digOffsetFactor = .2;
    }

    init() {
        super.init();

        this.collider.type = "dynamic";
    }

    update() {
        super.update();
        if (!this.allowMove) {
            this.movement.set();
            this.velocity.set();
        }

        if (!this.damaged) {
            this.damagedElapsed = this.game.clock.elapsed;
            this.visible = true;
        } else {
            if ((this.game.clock.elapsed - this.damagedElapsed) % 50 == 0)
                this.damaged = false;

            this.blink();
        }

        this.offset.lerp(Vector2.zero(), this.digOffsetFactor);
        this.animate();
    }
    dig(damage: number, speed: number, level: ToolLevel, direction: Direction): boolean {

        let successOreHit = false;
        
        if (this.collider.collidesWith != null && this.collider.collidesWith.any) {
            const ore = this.game.getChildById<Ore>(this.collider.collidesWith.id, true);
            // const tool = tools[this.toolLevel.toString()];

            if (ore == undefined) return false;

            if (this.collider.collidesWith[direction] && this.position.distance(ore.position) < Config.SPRITE_SIZE * 2 && this.game.clock.elapsed % speed == 0) {
                ore.hit(damage, level);

                successOreHit = level >= ore.needToolLevel;

                if (direction == "right")
                    this.offset = new Vector2(10, 0);
                else if (direction == "left")
                    this.offset = new Vector2(-10, 0);
                else if (direction == "top")
                    this.offset = new Vector2(0, -10);
                else if (direction == "bottom")
                    this.offset = new Vector2(0, 10);
            }

        }
        this.collider.collidesWith = null;

        return successOreHit;

    }

    move() {
        if (this.movement.x != 0)
            this.flip.x = this.movement.x < 0;
        
        this.velocity.x = this.movement.normalize().x * this.moveSpeed;
        this.velocity.y = this.movement.normalize().y * this.moveSpeed;
    }
    animate() {
        if (!this.allowAnimate) return;
        
        if (this.velocity.x != 0 || this.velocity.y != 0)
            this.playAnimation(this.name + "-walk");
        else
            this.playAnimation(this.name + "-stay");
    }

    hit(damage: number) {
        if (this.damaged) return;

        this.hp -= damage;
        this.damaged = true;

        SpawnParticles(this.game, this.position.add(new Vector2(0, -30)), {
            render(renderer, part) {
                renderer.drawText({
                    text: damage.toString(),
                    font: "22px Pixel",
                    color: Color.RED,
                    position: part.position,
                    opacity: part.opacity,
                    layer: "particles"
                })
            },
            count: 1,
            velocity: ()=> new Vector2(0, random(-3, -5)),
            downSize: 0,
            gravity: .1,
            opacity: 5,
            downOpacity: .1,
            box: ()=> new Vector2(random(-10, 10), random(-10, 10))
        });

        console.log(this.hp);
    }

    spawnText(text: string, offset?: Vector2, color?: string) {
        SpawnParticles(this.game, this.position.add(safeValue(offset, new Vector2(0, -30))), {
            render(renderer, part) {
                renderer.drawText({
                    text,
                    font: "22px Pixel",
                    color: color,
                    position: part.position,
                    opacity: part.opacity, 
                    layer: "particles"
                });
            },
            opacity: 5,
            count: 1,
            gravity: 0,
            velocity: ()=> new Vector2(0, -1.5),
            downOpacity: .08,
            box: ()=> new Vector2(random(-10, 10), random(-10, 10))
        });
    }
}