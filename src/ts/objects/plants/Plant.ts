import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { Block } from "../Block";
import { Ore } from "../ores/Ore";

export type PlantType = 
    "fetus-vine"

export class Plant extends Block {
    constructor(type: PlantType, position: Vector2) {
        super(`plant-${ type }`, type, position, {
            colliderType: "none"
        });

        this.randomRotate = false;
    }

    // update(game: Game) {
    //     super.update(game);

        
    // }
}