import { Game } from "../Game";
import { asImage, random, safeValue, Vector2 } from "../utils/math";
import { Color, Config } from "../../config";
import { Renderer } from "../Renderer";

type ParticlesSettings = {
    colors?: any[]
    downSize?: number
    downOpacity?: number
    size?: [number, number]
    opacity?: number

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
        this.opacity = safeValue(settings?.opacity, 1);
        this.downOpacity = safeValue(settings?.downOpacity, 0);
        
        this.position = new Vector2(position.x, position.y);
        this.rotation = random(0, Math.PI * 4);

        const v = settings?.velocity;
        const rv = settings?.rotationVelocity;
        this.velocity = v ? v() : new Vector2(random(-5, 5), random(-10, 5));
        this.rotationVelocity = rv ? rv() : random(-.1, .1)

        const s = settings?.size;
        this.size = (s ? s : [.5, 1.2])[Math.floor(random(0, 2))];
        this.gravity = safeValue(settings?.gravity, Config.PARTICLES_GRAVITY);
        this.downSize = safeValue(settings?.downSize, .01);

        this.render = settings?.render ? settings?.render : (renderer, part)=> {
            renderer.drawRect({
                color: this.color,
                width: this.size * .2,
                height: this.size * .2,
                position: this.position, rotation: this.rotation,
                layer: "particles",
                opacity: this.opacity
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
        this.position.x += this.velocity.x * game.clock.delta * 60;
        this.position.y += this.velocity.y * game.clock.delta * 60;
    }
}

export function SpawnParticles(game: Game, position: Vector2, settings?: ParticlesSettings & { count?: number }) {

    const box = settings?.box;
    
    for (let i = settings?.count || 10; i --;)
        game.renderer.particles.push(new Particle(position.expand().add(box ? box() : Vector2.zero()), settings));

}

export function SpawnCrumbleParticles(game: Game, position: Vector2, colors?: ParticlesSettings["colors"]) {
    SpawnParticles(game, position, {
        velocity: ()=> new Vector2(random(-2, 2), 0),
        box: ()=> new Vector2(random(-40, 40), 0),
        colors,
        count: 5,
    });
}

export function SpawnDisputesParticles(game: Game, position: Vector2, intensity?: number) {
    SpawnParticles(game, position, {
        render: (renderer, part)=> {
            renderer.drawSprite({
                texture: asImage(game.getAssetByName("disputes")),
                position: part.position,
                rotation: part.rotation,
                opacity: part.opacity,
                scale: Vector2.all(part.size)
            })  
        },
        count: 6,
        gravity: -.01,
        size: [1.4 * safeValue(intensity, 1), 1.4 * safeValue(intensity, 1)],
        rotationVelocity: ()=> random(-.01, -.01),
        velocity: ()=> new Vector2(random(-1, 1), random(-1, 1)).mul(2 * safeValue(intensity, 1)),
        opacity: 3 * safeValue(intensity, 1),
        downSize: .002,
        downOpacity: .01
    });
}
export function SpawnUpgradeParticles(game: Game, position: Vector2) {
    SpawnParticles(game, position, {
        render: (renderer, part)=> {
            renderer.drawSprite({
                texture: asImage(game.getAssetByName("level-up")),
                position: part.position,
                opacity: part.size,
                scale: Vector2.all(.8),
                layer: "particles"
            })
        },
        velocity: ()=> new Vector2(0, -1.5),
        size: [5, 5],
        downSize: .08,
        count: 1,
        gravity: 0
    });
}