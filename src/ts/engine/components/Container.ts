import { Sprite, ISpriteProps } from "./Sprite";
import { Game } from "../Game";
import { Point, IPointProps } from "./Point";
import { compareNames } from "../utils/math";
import { Group } from "./Group";

export class Container {
    children: Point[]

    constructor() {
        this.children = [];
    }

    createPoint(name: Point["name"], props?: IPointProps): Point {
        return this.add(new Point(name, props));
    }
    createSprite(name: Sprite["name"], assetName: Sprite["assetName"], props?: ISpriteProps): Sprite {
        return this.add(new Sprite(name, assetName, props)) as Sprite;
    }

    getChildrenByName<T>(name: Point["name"]): T[] {
        return (this.children.filter(child=> child.name.indexOf(name) >= 0) as any[]) as T[];
    }
    getChildById<T>(id: Point["id"] | null, expandAll?: boolean): T | undefined {
        if (id)
            return this.children.find(child=> child.id.indexOf(id) >= 0) as T | undefined;
    }
    removeChildById(id: Point["id"]) {
        this.children = this.children.filter(child=> {
            if (!compareNames(child.id, id))
                return true;
            else {
                child.destroy();
                return false;
            }
        });
    }
    removeChildrenByGroupName(group: string) {
        this.children.map(child=> {
            if (child.group && compareNames(child.group, group)) {
                this.removeChildById(child.id);
            }
        });
    }
    
    add<T>(child: Point | Group): T {
        this.children.push(child as any);
        return child as any;
    }

    initChildren(game: Game) {
        this.children.filter(child=> !child.inited).map(child=> {
            child.game = game;
            child.init()
        });
    }
    callChildren(method: string) {
        this.children.map(child=> (child as any)[method]());
    }
}