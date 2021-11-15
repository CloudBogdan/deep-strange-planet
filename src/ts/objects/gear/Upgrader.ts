import { Game, ISpriteProps } from "../../engine";
import { Player } from "../entities/Player";
import { Gear, Level } from "./Gear";

export class Upgrader extends Gear {
    constructor(level: Level, props?: ISpriteProps) {
        super("recycler", level, props);

        this.allowInteract = true;
    }

    onInteract(game: Game, player: Player) {
        super.onInteract(game, player);

        player.toolLevel ++;
        if (player.toolLevel > 4)
            player.toolLevel = 1;

        player.spawnText(game, `Инструменты обновлены\nдо ${ player.toolLevel }ур.`);
    }
}