import { Color, Config } from "../../config";
import { ISpriteProps, Point } from "../../engine";
import { asImage, chance, clamp, lerp, randomInt, Vector2 } from "../../engine/utils/math";
import { simplex2 } from "../../engine/utils/noise";
import { Player } from "../entities/Player";
import { Ore, OreType } from "./Ore";

export class InfectedOre extends Ore {    
    allowInfect: boolean
    allowGrow: boolean
    infectionStage: number

    target: Point | Player | undefined
    isEating: boolean
    daturaPosition: Vector2
    daturaRotation: number
    tonguePosition: Vector2
    tongueVelocity: Vector2
    startTonguePosition: Vector2
    
    constructor(type: OreType, position: Vector2, data?: { infectionStage?: number }, props?: ISpriteProps) {
        super(type, position, props);

        this.allowInfect = false;
        this.allowGrow = true;
        this.infectionStage = data ? data.infectionStage || 0 : 0;

        this.target = undefined;
        this.isEating = false;
        this.daturaPosition = Vector2.zero();
        this.daturaRotation = 0;
        this.tonguePosition = Vector2.zero();
        this.tongueVelocity = Vector2.zero();
        this.startTonguePosition = Vector2.zero();
    }

    init() {
        super.init();

        this.checkEmptySpace();

        this.daturaPosition = this.position.add(new Vector2(0, Config.SPRITE_SIZE - 10));
        this.tonguePosition.copy(this.daturaPosition.add(new Vector2(0, 20)));
        this.startTonguePosition = this.position.add(new Vector2(0, Config.SPRITE_SIZE + 100));

        this.infect();

        // Height clamp
        if (Math.floor(this.position.x / Config.SPRITE_SIZE) <= 10)
            this.allowInfect = false;
    }

    update() {
        super.update();

        this.tonguePosition.x += this.tongueVelocity.x;
        this.tonguePosition.y += this.tongueVelocity.y;
        this.tongueVelocity.x *= .9;
        this.tongueVelocity.y *= .9;

        this.isEating = !!this.target && this.target.position.distance(this.daturaPosition) < 120;

        const tar = (this.target as any);
        if (this.target) {
            // If player - hit
            if (tar.hit) {
                if (this.game.tick(60) && this.isEating)
                    tar.hit(clamp(randomInt(-1, 2), 1, 2));
            } else {
                // If item - eat :D
                if (tar.position.distance(this.daturaPosition) < 80) {
                    tar.picked =
                    tar.allowPickup = false;
                    tar.foldToPosition = this.daturaPosition;
                }
            }
        }

        this.growInfection();
        this.sticking();
    }

    render() {
        super.render();
        
        if (!this.allowInfect) return;

        if (Config.IS_DEV)
            this.game.renderer.drawText({
                text: "Infected",
                position: this.position,
                layer: "particles"
            })
        
        this.daturaRotation = lerp(
            this.daturaRotation,
            clamp(new Vector2().copy(this.position.sub(this.tonguePosition.add(new Vector2(-4)))).angle() - Math.PI * 1.5, -Math.PI / 5, Math.PI / 5),
            .1
        );
        
        // Render infection
        // Infection roots
        if (this.infectionStage >= 1 && this.visible)
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName("infection")),
                position: this.position,
                flip: this.flip,
                scale: this.scale,
                opacity: this.opacity,
                layer: "plants"
            });

        const frame = (this.target ? 1 + (this.isEating ? (Math.floor(this.game.clock.elapsed / 20) % 2) : 0) : 0);
            
        // Datura
        if (this.infectionStage >= 2 && this.visible)
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName("datura")),
                frame: new Vector2(this.infectionStage - 2 + frame, 0),
                width: 2,
                height: 2,
                position: this.daturaPosition.add(new Vector2(0, 30)),
                opacity: this.opacity,
                layer: "plants",
                origin: new Vector2(4, -40),
                // Rotate
                rotation: this.daturaRotation
            });

        this.renderTongue();
    }

    sticking() {
        if (this.infectionStage < 3 || !this.allowInfect) return;

        const body = this.game.children.find(child=> child.collider.type == "dynamic" && (child.position.distance(this.daturaPosition) < 100 || child.position.distance(this.startTonguePosition) < 100))
        this.target = body;
        
        if (!this.target || Config.ALLOW_HUNK) {
            this.tongueTo(this.startTonguePosition.add(new Vector2(Math.sin(this.game.clock.elapsed / 40 + this.position.x / 10) * 5)))
            this.tongueVelocity.copy(this.tongueVelocity.mul(.97))
        }
        else {
            this.tongueVelocity.copy(this.tongueVelocity.mul(0));

            // Tongue to target
            if (this.tonguePosition.distance(this.target.position) < 20)
                this.tonguePosition = this.target.position.expand();
            else
                this.tonguePosition.lerp(this.target.position, .4);
            
            // Move player to datura
            if (body)
                if (body.position.distance(this.daturaPosition) > 10)
                    body.velocity.copy(body.velocity.add(body.position.sub(this.daturaPosition).normalize().mul(-4)))

        }

    }

    renderTongue() {
        if (this.infectionStage < 3) return;

        const sin = this.isEating ? (Math.sin(this.game.clock.elapsed / 4) + 1) / 2 : 0;
        
        if (this.visible)
            // Tongue line
            this.game.renderer.drawLine({
                color: "#fbc67e",
                width: 4 + sin * 4,
                points: [this.position.add(new Vector2(4, Config.SPRITE_SIZE - 22)), this.tonguePosition.add(new Vector2(4))],
                opacity: this.opacity,
                layer: "plants",
            });
        // Tongue point
        this.game.renderer.drawSprite({
            texture: asImage(this.game.getAssetByName("datura-tongue")),
            scale: Vector2.all(1 + sin / 4),
            position: this.tonguePosition.add(new Vector2(6)),
            layer: "plants",
        })
    }
    tongueTo(position: Vector2) {
        const to = position.sub(this.tonguePosition).mul(.04);
            
        this.tongueVelocity.copy(this.tongueVelocity.add(to));
    }

    infect() {
        if ((simplex2(this.position.x / 2, this.position.y / 2) + 1) / 2 > (this.allowGrow ? .7 : .9)) {
            this.allowInfect = true;
        }
    }
    growInfection() {
        if (!this.allowInfect) return;
        this.checkEmptySpace();
        if (!this.allowGrow) return;
        
        if (this.game.tick(Config.INFECTION_GROW_TICK) && this.infectionStage < 3) {
            if (chance(Config.INFECTION_GROW_CHANCE)) {
                
                const needStage = this.infectionStage + 1;
                this.infectionStage = needStage;
                this.saveData();

            }
        }

    }
    onBreak() {
        if (this.infectionStage >= 2 && this.allowInfect)
            this.particlesColors = [Color.ORANGE, Color.BLACK];
            
        super.onBreak();
    }

    checkEmptySpace() {
        if (this.checkBlockIn(new Vector2(0, 1)))
            this.allowGrow = false;
    }
    saveData() {
        this.game.generator.modifyOre(this.inChunkId, { infectionStage: this.infectionStage });
    }
}