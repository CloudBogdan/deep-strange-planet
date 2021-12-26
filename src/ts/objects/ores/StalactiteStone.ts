import { Config } from "../../config";
import { ISpriteProps } from "../../engine";
import { noise } from "../../engine/Generator";
import { inRange, randomInt, Vector2 } from "../../engine/utils/math";
import { caveRules } from "../../managers/generator";
import { Player } from "../entities/Player";
import { Stalactite } from "../environment/Stalactite";
import { Ore } from "./Ore";

export class StalactiteStone extends Ore {
    player!: Player
    
    stalactiteLength: number
    allowGrow: boolean
    hasStalactite: boolean
    
    constructor(position: Vector2, data?: any, props?: ISpriteProps) {
        super("basalt", position, props);

        this.stalactiteLength = data ? data?.length || 0 : 0;
        this.allowGrow = true;
        this.hasStalactite = false;
    }

    static rules(x: number, y: number): boolean {
        const res = noise(x / 6, y / 6);
        const haveEmptySpace = caveRules(x, y, 0, 1);
        
        return inRange(res, 0, .5) && haveEmptySpace;
    }

    init() {
        super.init();

        if (!this.allowGrow) return;

        const variants: number[] = [1, 1, 2, 2, 2, 3, 3];
        this.stalactiteLength = variants[randomInt(0, variants.length - 1)];

        for (let i = 0; i < this.stalactiteLength; i ++) {
            if (!caveRules(this.tilePosition.x, this.tilePosition.y, 0, i+1)) {
                this.stalactiteLength = i;
                break;
            } 
        }

        if (this.stalactiteLength != 0 && !this.hasStalactite) {
            this.game.add(new Stalactite(this.stalactiteLength, this.inChunkId, this.position.add(new Vector2(0, Config.SPRITE_SIZE))));
            this.game.initChildren();
            this.hasStalactite = true;
        }
    }

    render() {
        super.render();

        this.game.renderer.drawText({
            text: this.stalactiteLength.toString(),
            position: this.position.expand(),
            layer: "particles"
        })
    }
}