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
    visible: boolean
    allowUpdateChildren: boolean
    
    constructor(name: string, position?: Vector2) {
        super();
        this.id = `${ name }-${ __id ++ }`;
        this.type = "group";
        this.name = standardName(name);

        this.position = position || Vector2.zero();
        this.visible = true;
        this.allowUpdateChildren = true;
    }

    init(game: Game) {
        this.initChildren(game);
    }
    update(game: Game) {
        if (this.allowUpdateChildren)
            this.callChildren("update", game);
    }
    render(game: Game) {
        if (this.visible)
            this.callChildren("render", game);
    }
}