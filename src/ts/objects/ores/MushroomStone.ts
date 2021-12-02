import { Color, Config } from "../../config";
import { SpawnDisputesParticles, SpawnParticles } from "../../engine/components/Particles";
import { asImage, clamp, random, randomInt, Vector2 } from "../../engine/utils/math";
import { Player, ToolLevel } from "../entities/Player";
import { Ore } from "./Ore";

export class MushroomStone extends Ore {
    allowGrow: boolean
    growed: boolean
    currentFrame: number
    
    constructor(position: Vector2) {
        super("mushroom-stone", position);

        this.allowGrow = true;
        this.growed = true;
        this.randomRotate = false;
        this.particlesColors = [Color.GREY, Color.RED];
        this.currentFrame = randomInt(0, 4);
    }

    init() {
        super.init();

        if (this.checkBlockIn(new Vector2(0, -1)))
            this.allowGrow = false;
    }

    render() {
        super.render();

        if (this.allowGrow)
            this.renderMushroom();
    }
    hit(damage: number, toolLevel: ToolLevel) {
        super.hit(damage, toolLevel);

        SpawnDisputesParticles(this.game, this.position.add(new Vector2(0, -Config.SPRITE_SIZE / 2-10)), .4);
    }
    onBreak() {
        super.onBreak();
        
        SpawnDisputesParticles(this.game, this.position, 1);

        const player = this.game.getChildById<Player>("player");
        if (player && this.position.distance(player.position) < 200 && player.position.y < this.position.y + Config.SPRITE_SIZE/2)
            player.hit(randomInt(4, 6));
    }

    renderMushroom() {
        if (!this.growed || !this.visible) return;

        const offset = ((Math.sin(this.game.clock.elapsed / 60 + this.position.x) + 1) / 2) * .1;

        this.game.renderer.drawSprite({
            texture: asImage(this.game.getAssetByName("mushroom")),
            frame: new Vector2(this.currentFrame),
            scale: new Vector2(1, 1 - offset),
            position: this.position.add(new Vector2(0, -Config.SPRITE_SIZE + (offset * Config.SPRITE_SIZE) / 2)),
            opacity: this.opacity
        })
    }
}