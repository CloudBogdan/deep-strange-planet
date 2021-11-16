import { Game, ISpriteProps } from "../../engine";
import { Renderer } from "../../engine/Renderer";
import { Player } from "../entities/Player";
import { Gear, Level } from "./Gear";

export class Recycler extends Gear {
    constructor(level: Level, props?: ISpriteProps) {
        super("recycler", level, props);
    }
    
    onInteract(game: Game, player: Player) {
        super.onInteract(game, player);

        this.ui.enabled = !this.ui.enabled;
    }

    renderUI(game: Game, renderer: Renderer) {
        super.renderUI(game, renderer);

        this.renderRecipesUI(game, renderer);
    }

    renderRecipesUI(game: Game, renderer: Renderer) {

        

    }
}