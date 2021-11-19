import { Game, ISpriteProps } from "../../engine";
import { Player } from "../entities/Player";
import { Gear, GearLevel } from "./Gear";

export class Upgrader extends Gear {
    constructor(level: GearLevel, props?: ISpriteProps) {
        super("gear-recycler", level, props);

        this.allowInteract = true;
    }

    onInteract(game: Game) {
        super.onInteract(game);
        if (!this.player) return;

        this.player.toolLevel ++;
        if (this.player.toolLevel > 4)
            this.player.toolLevel = 1;

        this.player.spawnText(game, `Инструменты обновлены\nдо ${ this.player.toolLevel }ур.`);
    }
}