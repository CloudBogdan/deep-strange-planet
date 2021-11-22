import { Game } from "../Game";
import { random, Vector2 } from "../utils/math";
import { Color, Config } from "../../config";
import { Point } from "./Point";
import { Renderer } from "../Renderer";

type ParticlesSettings = {
    colors?: any[]
    downSize?: number
    downOpacity?: number
    size?: [number, number]

    gravity?: number
    box?: ()=> Vector2

    velocity?: ()=> Vector2
    rotationVelocity?: ()=> number

    render?: (renderer: Renderer, part: Particle)=> void
}

export class Particle {
    position: Vector2
    rotation: number

    velocity: Vector2
    rotationVelocity: number

    color: string
    opacity: number
    gravity: number
    size: number
    downSize: number
    downOpacity: number
    
    render: (renderer: Renderer, part: Particle)=> void
    
    constructor(position: Vector2, settings?: ParticlesSettings) {
        const c = settings?.colors;
        this.color = c ? c[Math.floor(random(0, c.length))] : Color.BLACK;
        this.opacity = 1;
        this.downOpacity = settings?.downOpacity || 0;
        
        this.position = new Vector2(position.x, position.y);
        this.rotation = 0;

        const v = settings?.velocity;
        const rv = settings?.rotationVelocity;
        this.velocity = v ? v() : new Vector2(random(-5, 5), random(-10, 5));
        this.rotationVelocity = rv ? rv() : random(-.1, .1)

        const s = settings?.size;
        this.size = (s ? s : [.5, 1.2])[Math.floor(random(0, 2))];
        this.gravity = settings?.gravity === undefined ? Config.PARTICLES_GRAVITY : settings?.gravity;
        this.downSize = settings?.downSize || .01;

        this.render = settings?.render ? settings?.render : (renderer, part)=> {
            renderer.drawRect({
                color: this.color,
                width: this.size * .2,
                height: this.size * .2,
                position: this.position, rotation: this.rotation,
                layer: "particles"
            });
        }
    }

    update(game: Game) {
        this.velocity.y += this.gravity;

        this.rotation += this.rotationVelocity;
        this.size -= this.downSize;
        this.opacity -= this.downOpacity;
        
        this.velocity.x *= .99;
        this.velocity.y *= .99;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

export function SpawnParticles(game: Game, position: Vector2, settings?: ParticlesSettings & { count?: number }) {

    const box = settings?.box;
    
    for (let i = settings?.count || 10; i --;)
        game.renderer.particles.push(new Particle(position.expand().add(box ? box() : Vector2.zero()), settings));

}