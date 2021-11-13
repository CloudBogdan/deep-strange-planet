import { ComponentType } from "../../types";
import { Game } from "../Game";
import { Collider, ColliderType } from "../Physics";
import { Renderer } from "../Renderer";
import { standardName as standardName, Vector2 } from "../utils/math";

let __id = 0;

export type IPointProps = {
    position?: Vector2
    rotation?: number
    scale?: Vector2
    layer?: string

    colliderType?: ColliderType

    group?: string | null
}

export class Point {
    id: string
    type: ComponentType
    name: string
    group: string | null
    inited: boolean
    layer: string
    
    velocity: Vector2
    acceleration: Vector2
    position: Vector2
    rotation: number
    scale: Vector2

    collider: Collider
    
    constructor(name: string, props?: IPointProps) {
        this.id = `${ name }-${ __id ++ }`;
        this.type = "point";
        this.name = standardName(name);
        this.group = props?.group ? standardName(props.group) : null;
        this.inited = false;
        this.layer = props?.layer || "game";

        this.position = props?.position || Vector2.zero();
        this.velocity = Vector2.zero();
        this.acceleration = Vector2.all();
        this.rotation = props?.rotation || 0;
        this.scale = props?.scale || Vector2.all();

        this.collider = new Collider(this);
        this.collider.type = props?.colliderType || "dynamic";
    }
    
    init(game: Game) {
        this.inited = true;
    }
    update(game: Game) {
        this.velocity.x *= this.acceleration.x;
        this.velocity.y *= this.acceleration.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    render(game: Game, renderer: Renderer) {
    }

    collideWidth(game: Game, point: Point | undefined) {

        if (!point) return;
        if (point.position.distance(this.position) > 200) return;
        
        let allowCollide = true
        
        if (!this.collider.collidable && point.collider.type == "dynamic" || !point.collider.collidable)
            allowCollide = false;

        if (allowCollide)
            if (point.collider.type == "dynamic" && this.collider.type == "solid") {

                const collide = game.physics.collide(point, this as any);
                
                const col1 = point.collider;
                const col2 = this.collider;
                
                // Right
                if (collide.right && point.velocity.x > 0) {
                    point.position.x = this.position.x - col2.width / 2 - col1.width / 2 + 1 - col1.offset.x;
                    point.velocity.x = 0;
                }
                // Left
                if (collide.left && point.velocity.x < 0) {
                    point.position.x = this.position.x + col2.width / 2 + col1.width / 2 - 1 - col1.offset.x;
                    point.velocity.x = 0;
                }

                // Top
                if (collide.top && point.velocity.y < 0) {
                    point.position.y = this.position.y + col2.height / 2 + col1.height / 2 - 1;
                    point.velocity.y = 0;
                } 
                // Bottom
                if (collide.bottom && point.velocity.y > 0) {
                    point.position.y = this.position.y - col2.height / 2 - col1.height / 2 + 1;
                    point.velocity.y = 0;
                }

                if (collide.any) {
                    point.collider.collidesWith = {...collide};
                }

            }
        
    }
}