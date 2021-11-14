import { Game, ISpriteProps } from "../../engine";
import { Player } from "../entities/Player";
import { Gear, Level } from "./Gear";

export class Recycler extends Gear {
    constructor(level: Level, props?: ISpriteProps) {
        super("Переработчик", "recycler", level, props);

    }
    
    init(game: Game) {
        super.init(game);
        
        this.allowInteract = true;
    }

    onInteract(game: Game, player: Player) {
        super.onInteract(game, player);

        player.spawnText(game, "Кажется это пока\nне работает :P");
    }
}