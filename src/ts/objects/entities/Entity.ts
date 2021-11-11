import { Game, ISpriteProps, Sprite } from "../../engine"
import { Vector2 } from "../../engine/utils/math"

export type IEntityProps = {
    hp?: number
    moveSpeed?: number
} & ISpriteProps;

export class Entity extends Sprite {
    hp: number
    moveSpeed: number

    movement: Vector2
    
    constructor(name: string, assetName: string, props?: IEntityProps) {
        super(name, assetName, props);
        
        this.hp = props?.hp || 10;
        this.moveSpeed = props?.moveSpeed || 5;
        
        this.movement = new Vector2();
    }

    init(game: Game) {
        super.init(game);
    }

    update(game: Game) {
        super.update(game);

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
}