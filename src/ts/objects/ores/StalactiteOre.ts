import { Config } from "../../config";
import { ISpriteProps } from "../../engine";
import { randomInt, Vector2 } from "../../engine/utils/math";
import { simplex2 } from "../../engine/utils/noise";
import { Player } from "../entities/Player";
import { Stalactite } from "../environment/Stalactite";
import { Ore, OreType } from "./Ore";

export class StalactiteOre extends Ore {
    player!: Player
    
    stalactiteLength: number
    allowGrow: boolean
    
    constructor(type: OreType, position: Vector2, data?: any, props?: ISpriteProps) {
        super(type, position, props);

        this.stalactiteLength = data ? data?.length || 0 : 0;
        this.allowGrow = false;
    }

    init() {
        super.init();

        this.player = this.game.getChildById("player")!;

        if ((simplex2(this.position.x / 5, this.position.y / 5) + 1) / 2 > .4)
            this.checkEmptySpace()
        else
            this.allowGrow = false;

        if (!this.allowGrow) return;

        const variants: number[] = [0, 1, 1, 2, 2, 2, 3, 3];
        this.stalactiteLength = variants[randomInt(0, variants.length - 1)];

        this.game.add(new Stalactite(this.stalactiteLength, this.inChunkId, this.position.add(new Vector2(0, Config.SPRITE_SIZE))));
        this.game.initChildren();
    }

    checkEmptySpace() {

        for (let i = 0; i < Config.MAX_STALACTITE_LENGTH; i ++) {
            if (this.checkBlockIn(new Vector2(0, i + 1))) {
                this.allowGrow = false;
                break;
            } else
                this.allowGrow = true;
        }

    }
}