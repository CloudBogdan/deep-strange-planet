import { Game } from "..";
import { ComponentType } from "../../types";
import { standardName, Vector2 } from "../utils/math";
import { Container } from "./Container";

let __id = 0;

export class Group extends Container {
    id: string
    type: ComponentType
    name: string
    
    position: Vector2
    
    constructor(name: string, position?: Vector2) {
        super();
        this.id = `${ name }-${ __id ++ }`;
        this.type = "group";
        this.name = standardName(name);

        this.position = position || Vector2.zero();
    }

    init(game: Game) {
        this.initChildren(game);
    }
    update(game: Game) {
        this.callChildren("update", game);
        this.position = new Vector2();
    }
    render(game: Game) {
        this.callChildren("render", game);
    }
}