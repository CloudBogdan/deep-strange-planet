import { Game } from "..";
import { ComponentType } from "../../types";
import { standardName, Vector2 } from "../utils/math";
import { Container } from "./Container";

let __id = 0;

export class Group extends Container {
    game!: Game
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

    init() {
        this.initChildren(this.game);
    }
    update() {
        if (this.allowUpdateChildren)
            this.callChildren("update");
    }
    render() {
        if (this.visible)
            this.callChildren("render");
    }
}