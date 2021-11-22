import { Config } from "../config";
import { Point } from "./components/Point";
import { Game } from "./Game";
import { Vector2 } from "./utils/math";

export type Collide = {
    id: Point["id"] | null
    right: boolean
    left: boolean
    top: boolean
    bottom: boolean
    any: boolean
}
export type ColliderType = "solid" | "dynamic" | "none";
export class Collider {
    type: ColliderType
    
    width: number
    height: number
    offset: Vector2

    collidable: boolean
    collidesWith: Collide | null
    parent: Point

    constructor(parent: Point) {
        this.type = "dynamic";

        this.width = Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE;
        this.height = Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE;
        this.offset = new Vector2();

        this.collidable = true;
        this.collidesWith = null;
        this.parent = parent;

    }
}

export class Physics {
    game: Game
    
    constructor(game: Game) {
        this.game = game;
    }

    collide(point1: Point, point2: Point): Collide {

        // if (this.game.camera.distance(point1.position) < 300 && this.game.camera.distance(point2.position) < 300)
        //     return {
        //         id: null, any: false,
        //         right: false, left: false,
        //         top: false, bottom: false
        //     }
        
        const
            pos1 = Vector2.add(point1.position, point1.collider.offset),
            pos2 = Vector2.add(point2.position, point2.collider.offset);
        const
            w1 = point1.collider.width / 2,
            w2 = point2.collider.width / 2;
        const
            h1 = point1.collider.height / 2,
            h2 = point2.collider.height / 2;
        const valid = point1.id != point2.id;
        const horizontal = (
            ((pos1.x + w1) > (pos2.x - w2)) && // Right
            ((pos1.x - w1) < (pos2.x + w2)) // Left
        )
        const vertical = (
            ((pos1.y + h1) > (pos2.y - h2)) && // Bottom
            ((pos1.y - h2) < (pos2.y + h2)) // Top
        ) && valid;

        const locationX = Math.abs(Math.sqrt((pos1.x - pos2.x) ** 2));
        const locationY = Math.abs(Math.sqrt((pos1.y - pos2.y) ** 2));

        // Right
        let right = (
            ((pos1.x + w1) > (pos2.x - w2)) && pos2.x > pos1.x
        ) && vertical && (locationX > locationY);
        // Left
        let left = (
            ((pos1.x - w1) < (pos2.x + w2)) && pos1.x > pos2.x
        ) && vertical && (locationX > locationY);
        
        // Top
        let top = (
            ((pos1.y - h1) < (pos2.y + h2)) && pos1.y > pos2.y
        ) && horizontal && (locationY > locationX);
        // Bottom
        let bottom = (
            ((pos1.y + h1) > (pos2.y - h2)) && pos2.y > pos1.y
        ) && horizontal && (locationY > locationX);

        let any = right || left || top || bottom;
        
        return {
            id: point2?.id || null, any,
            right, left,
            top, bottom
        };
    }
    
    update() {
        const children = this.game.children.filter(child=> (child.collider.type != "none" && child.collider.collidable));
        
        for (let i = 0; i < children.length; i ++) {
            for (let j = 0; j < children.length; j ++) {                
                this.collideWith(children[i], children[j]);
            }
        }
    }

    collideWith(collider1: Point, collider2: Point) {
        
        let allowCollide = true 
        
        if (!collider2.collider.collidable && collider1.collider.type == "dynamic")
            allowCollide = false;

        if (allowCollide)
            if (collider1.collider.type == "dynamic" && collider2.collider.type == "solid") {

                const collide = this.collide(collider1, collider2);
                
                const col1 = collider1.collider;
                const col2 = collider2.collider;
                
                // Right
                if (collide.right && collider1.velocity.x > 0) {
                    collider1.position.x = collider2.position.x - col2.width / 2 - col1.width / 2 + 1 - col1.offset.x;
                    collider1.velocity.x = 0;
                }
                // Left
                if (collide.left && collider1.velocity.x < 0) {
                    collider1.position.x = collider2.position.x + col2.width / 2 + col1.width / 2 - 1 - col1.offset.x;
                    collider1.velocity.x = 0;
                }

                // Top
                if (collide.top && collider1.velocity.y < 0) {
                    collider1.position.y = collider2.position.y + col2.height / 2 + col1.height / 2 - 1;
                    collider1.velocity.y = 0;
                } 
                // Bottom
                if (collide.bottom && collider1.velocity.y > 0) {
                    collider1.position.y = collider2.position.y - col2.height / 2 - col1.height / 2 + 1;
                    collider1.velocity.y = 0;
                }

                // console.log(collider2.id);
                if (collide.any) {
                    // if ((collider1.velocity.x != 0 || collider1.velocity.y != 0))
                        collider1.collider.collidesWith = {...collide};
                        // collider1.collider.otherColliders = [collider2];
                }
                // else
                //     collider1.collider.collidesWith = null;
                    // collider1.collider.otherColliders = [];

            }
    }
}