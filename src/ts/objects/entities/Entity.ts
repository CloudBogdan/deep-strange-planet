import { Game, ISpriteProps, Sprite } from "../../engine"
import { SpawnParticles } from "../../engine/components/Particles";
import { random, safeValue, Vector2 } from "../../engine/utils/math"

export type IEntityProps = {
    hp?: number
    moveSpeed?: number
} & ISpriteProps;

export class Entity extends Sprite {
    hp: number
    moveSpeed: number

    movement: Vector2
    allowMove: boolean
    
    constructor(name: string, assetName: string, props?: IEntityProps) {
        super(name, assetName, props);
        
        this.hp = props?.hp || 10;
        this.moveSpeed = props?.moveSpeed || 5;
        
        this.movement = new Vector2();
        this.allowMove = true;
    }

    init(game: Game) {
        super.init(game);
    }

    update(game: Game) {
        super.update(game);
        if (!this.allowMove) {
            this.movement.set();
            this.velocity.set();
        }

        this.animate(game);
    }

    move() {
        if (this.movement.x != 0)
            this.flip.x = this.movement.x < 0;
        
        this.velocity.x = this.movement.normalize().x * this.moveSpeed;
        this.velocity.y = this.movement.normalize().y * this.moveSpeed;
    }
    animate(game: Game) {
        if (this.velocity.x != 0 || this.velocity.y != 0)
            this.playAnimation(game, this.name + "-walk");
        else
            this.playAnimation(game, this.name + "-stay");
    }

    spawnText(game: Game, text: string, offset?: Vector2) {
        SpawnParticles(game, this.position.add(safeValue(offset, new Vector2(0, -30))), {
            // custom: new Text("store-text", text, { font: "22px Pixel" }),
            render(renderer, part) {
                renderer.drawText({
                    text,
                    font: "22px Pixel",
                    position: part.position,
                    opacity: part.size, 
                    layer: "particles"
                });
            },
            size: [5, 5],
            count: 1,
            gravity: 0,
            rotationVelocity: ()=> random(-.02, .02),
            velocity: ()=> new Vector2(0, -1.5),
            downSize: -.08,
            box: ()=> new Vector2(random(-10, 10), random(-10, 10))
        });
    }
}