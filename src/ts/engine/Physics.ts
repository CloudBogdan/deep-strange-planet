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
export type CollideRect = {
    id: string
    width: number
    height: number
    position: Vector2
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

    collideWithRect(rect1: CollideRect, rect2: CollideRect): Collide {

        const
            pos1 = rect1.position,
            pos2 = rect2.position;
        const
            w1 = rect1.width / 2,
            w2 = rect2.width / 2;
        const
            h1 = rect1.height / 2,
            h2 = rect2.height / 2;
        const valid = rect1.id != rect2.id;
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
            id: rect2?.id || null, any,
            right, left,
            top, bottom
        };

    }
    collide(point1: Point, point2: Point): Collide {

        // if (this.game.camera.distance(point1.position) < 300 && this.game.camera.distance(point2.position) < 300)
        //     return {
        //         id: null, any: false,
        //         right: false, left: false,
        //         top: false, bottom: false
        //     }
        
        const
            pos1 = Vector2.add(point1.position, point1.collider.offset).add(point1.velocity),
            pos2 = Vector2.add(point2.position, point2.collider.offset).add(point2.velocity);
        const
            w1 = point1.collider.width,
            w2 = point2.collider.width;
        const
            h1 = point1.collider.height,
            h2 = point2.collider.height;

        return this.collideWithRect({
            id: point1.id,
            position: pos1,
            width: w1,
            height: h1
        }, {
            id: point2.id,
            position: pos2,
            width: w2,
            height: h2
        });
        // const
        //     pos1 = Vector2.add(point1.position, point1.collider.offset).add(point1.velocity),
        //     pos2 = Vector2.add(point2.position, point2.collider.offset).add(point2.velocity);
        // const
        //     w1 = point1.collider.width / 2,
        //     w2 = point2.collider.width / 2;
        // const
        //     h1 = point1.collider.height / 2,
        //     h2 = point2.collider.height / 2;
        // const valid = point1.id != point2.id;
        // const horizontal = (
        //     ((pos1.x + w1) > (pos2.x - w2)) && // Right
        //     ((pos1.x - w1) < (pos2.x + w2)) // Left
        // )
        // const vertical = (
        //     ((pos1.y + h1) > (pos2.y - h2)) && // Bottom
        //     ((pos1.y - h2) < (pos2.y + h2)) // Top
        // ) && valid;

        // const locationX = Math.abs(Math.sqrt((pos1.x - pos2.x) ** 2));
        // const locationY = Math.abs(Math.sqrt((pos1.y - pos2.y) ** 2));

        // // Right
        // let right = (
        //     ((pos1.x + w1) > (pos2.x - w2)) && pos2.x > pos1.x
        // ) && vertical && (locationX > locationY);
        // // Left
        // let left = (
        //     ((pos1.x - w1) < (pos2.x + w2)) && pos1.x > pos2.x
        // ) && vertical && (locationX > locationY);
        
        // // Top
        // let top = (
        //     ((pos1.y - h1) < (pos2.y + h2)) && pos1.y > pos2.y
        // ) && horizontal && (locationY > locationX);
        // // Bottom
        // let bottom = (
        //     ((pos1.y + h1) > (pos2.y - h2)) && pos2.y > pos1.y
        // ) && horizontal && (locationY > locationX);

        // let any = right || left || top || bottom;
        
        // return {
        //     id: point2?.id || null, any,
        //     right, left,
        //     top, bottom
        // };
    }
    
    update() {
        const children = this.game.children.filter(child=> (child.collider.type != "none" && child.collider.collidable));
        
        // for (let i = 0; i < children.length; i ++) {
        //     for (let j = 0; j < children.length; j ++) {                
        //         this.collideWith(children[i], children[j]);
        //     }
        // }
        children.filter(child=> child.collider.type == "solid").map(solidChild=> {
            children.filter(child=> child.collider.type == "dynamic").map(dynamicChild=> {
                this.collideWith(dynamicChild, solidChild);
            });
        })
    }

    collideWith(dynamicCollider: Point, solidCollider: Point) {
        
        // let allowCollide = true 
        
        // if (!collider2.collider.collidable && collider1.collider.type == "dynamic")
        //     allowCollide = false;

        if (!dynamicCollider.collider.collidable) return;
            // if (collider1.collider.type == "dynamic" && collider2.collider.type == "solid") {

                const collide = this.collide(dynamicCollider, solidCollider);
                
                const col1 = dynamicCollider.collider;
                const col2 = solidCollider.collider;
                
                // Right
                if (collide.right && dynamicCollider.velocity.x > 0) {
                    dynamicCollider.position.x = solidCollider.position.x - col2.width / 2 - col1.width / 2 + 1 - col1.offset.x;
                    dynamicCollider.velocity.x = 0;
                }
                // Left
                if (collide.left && dynamicCollider.velocity.x < 0) {
                    dynamicCollider.position.x = solidCollider.position.x + col2.width / 2 + col1.width / 2 - 1 - col1.offset.x;
                    dynamicCollider.velocity.x = 0;
                }

                // Top
                if (collide.top && dynamicCollider.velocity.y < 0) {
                    dynamicCollider.position.y = solidCollider.position.y + col2.height / 2 + col1.height / 2 - 1;
                    dynamicCollider.velocity.y = 0;
                } 
                // Bottom
                if (collide.bottom && dynamicCollider.velocity.y > 0) {
                    dynamicCollider.position.y = solidCollider.position.y - col2.height / 2 - col1.height / 2 + 1;
                    dynamicCollider.velocity.y = 0;
                }

                // console.log(collider2.id);
                if (collide.any) {
                    // if ((collider1.velocity.x != 0 || collider1.velocity.y != 0))
                        dynamicCollider.collider.collidesWith = {...collide};
                        // collider1.collider.otherColliders = [collider2];
                }
                // else
                //     collider1.collider.collidesWith = null;
                    // collider1.collider.otherColliders = [];

            // }
    }
}