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
    game!: Game
    id: string
    type: ComponentType
    name: string
    group: string
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
        this.group = props?.group ? standardName(props.group) : "";
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
    
    init() {
        this.inited = true;
    }
    update() {
        this.velocity.x *= this.acceleration.x;
        this.velocity.y *= this.acceleration.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    render() {
    }
    destroy() {
    }
}