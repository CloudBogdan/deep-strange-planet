import { SpawnCrumbleParticles } from "../../engine/components/Particles";
import { Vector2 } from "../../engine/utils/math";
import { FallingOre } from "./FallingORe";
import { Ore } from "./Ore";

export class CrackedStone extends FallingOre {
    constructor(position: Vector2) {
        super("cracked-stone", position);
    }

    init() {
        super.init();

        this.game.generator.onWorldChange(this.id, this.position, ()=> {

            if (!this.checkBlockIn(new Vector2(0, 1), false)) {
                this.animateScaleTo = .7;
                this.fall();
            }

        });
    }
}