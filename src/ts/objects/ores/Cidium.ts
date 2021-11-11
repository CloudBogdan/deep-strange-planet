import { Game } from "../../engine";
import { Vector2 } from "../../engine/utils/math";
import { RawCidium } from "../raws/RawCidium";
import { Ore } from "./Ore";

export class Cidium extends Ore {
    constructor(position: Vector2) {
        super("cidium", position);
    }

    break(game: Game) {
        super.break(game);

        game.add<RawCidium>(new RawCidium(this.position));
        game.initChildren(game);
    }
}