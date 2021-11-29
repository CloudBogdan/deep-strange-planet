import { random, Vector2 } from "../../engine/utils/math";
import { Plant } from "./Plant";

export class FetusVine extends Plant {
    length: number
    maxLength: number
    
    constructor(position: Vector2) {
        super("fetus-vine", position);

        this.length = 0;
        this.maxLength = 2;
    }

    init() {
        super.init();

        this.game.generator.onWorldChange(this.id, this.position, ()=> {

            if (!this.checkBlockIn(new Vector2(0, -1), "ore"))
                this.game.removeChildById(this.id);

        });

        this.maxLength = this.randomMaxLength();
    }

    grow() {
        if (this.length < this.maxLength)
            this.length ++;
        
        this.repeat.y = this.length;
    }
    randomMaxLength(): number {
        let value = Math.floor(random(3, 6));

        if (this.checkBlockIn(new Vector2(0, value), "ore"))
            value --;

        return value;
    }
}