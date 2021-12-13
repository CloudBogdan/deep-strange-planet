import { Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { ItemParent } from "../item/ItemParent";

export type FoodType =
    "food-fetus";

export class Food extends ItemParent {
    foodType: FoodType
    
    constructor(type: FoodType, position: Vector2) {
        super(type, type, position);

        this.radius = 2;
        this.foodType = type;
    }

    onEat(player: Player) {
        
    }
    whenPicked(player: Player) {
        super.whenPicked(player);

        if (player.hp < 12)
            player.expectedActionType = { name: "eat", priority: 1 };
    }
}