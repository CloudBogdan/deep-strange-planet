import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Item } from "./Item";

export class RobotItem extends Item {
    constructor(position: Vector2) {
        super("item-robot", position, {
            scale: Vector2.all(.8)
        });
    }

    whenPicked(player: Player) {
        super.whenPicked(player);
            
        if (player.position.y < 20) return;
        
        player.expectedActionType = { name: "place", priority: 0 };

    }

}