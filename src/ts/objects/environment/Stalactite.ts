import { Color, Config } from "../../config";
import { SpawnParticles } from "../../engine/components/Particles";
import { asImage, chance, randomInt, Vector2 } from "../../engine/utils/math";
import { Block } from "../Block";
import { Entity } from "../entities/Entity";
import { FallingOre } from "../ores/FallingORe";

export class Stalactite extends FallingOre {
    length: number
    
    constructor(length: number, parentInChunkId: Block["inChunkId"], position: Vector2) {
        super("stalactite", position.div(Config.SPRITE_SIZE).apply(Math.floor));

        this.length = length;
        this.inChunkId = parentInChunkId;
        this.group = this.inChunkId;

        this.damage = [4, 6];
        this.particlesColors = [Color.GREY];
        this.acceleration.set(0, .98);
        this.collider.width = Config.SPRITE_SIZE * .7;
    }
    
    init() {
        super.init();

        this.damage[0] = this.length + 4;
        this.damage[1] = this.length + 6;
    }
    update() {
        super.update();
        // this.growing();
        
        if (this.length <= 0) return;

        if (this.allowFall) {
            this.collider.width = Config.SPRITE_SIZE * .5;
        }

        this.tryFall();
        this.particles();
    }
    render() {
        const size = Config.SPRITE_SIZE;
        
        for (let i = 0; i < this.length; i ++) {

            const pos = this.position.add(new Vector2(0, i * size));
            let frame = 0;

            if (i == 0)
                frame = this.allowFall ? 3 : 0;
            if (i > 0)
                frame = 1;
            if (i == this.length - 1) {
                frame = 2;
                if (this.length == 1 && this.allowFall)
                    frame = 4;
            }

            const t = 1 - this.game.camera.position.y / 200;
            const d = (this.game.camera.position.distance(pos) - 200);
            const darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);

            if (darkenFactor < 1)
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName("stalactite")),
                    frame: new Vector2(0, frame),
                    position: pos,
                    opacity: 1 - darkenFactor
                })

        }
    }
    darken() {}

    growing() {
        if (this.game.tick(Config.STALACTITE_GROW_TICK) && chance(Config.STALACTITE_GROW_CHANCE))
            this.grow();
    }
    grow() {
        if (this.length >= Config.MAX_STALACTITE_LENGTH) return;
        this.length ++;
        this.damage[0] = this.length + 4;
        this.saveData();
    }
    
    tryFall() {
        if (!chance(40)) return;
        
        if (this.game.tick(60)) {

            const entity = this.game.getChildrenByGroupName<Entity>("entity").find(child=> {

                const height = Config.SPRITE_SIZE * this.length + 5 * Config.SPRITE_SIZE;
    
                return this.game.physics.collideWithRect({
                    id: this.id,
                    position: this.position.add(new Vector2(0, height / 2)),
                    width: Config.SPRITE_SIZE * .7,
                    height: height
                }, {
                    id: child.id,
                    position: child.position,
                    width: child.collider.width,
                    height: child.collider.height
                }).any;
    
            });
            if (!entity) return;

            this.fall();

        }

    }
    fallDestroy() {
        super.fallDestroy();

        this.length = 0;
        this.saveData();
    }
    particles() {
        if (this.game.tick(randomInt(100, 150)) && chance(60))
            SpawnParticles(this.game, this.position.add(new Vector2(0, this.length * Config.SPRITE_SIZE - Config.SPRITE_SIZE * .8)), {
                count: 1,
                colors: [Color.BLUE],
                gravity: .08,
                velocity: ()=> new Vector2(0, 0),
                size: [.6, .6]
            })
        
    }

    saveData() {
        this.game.generator.modifyOre(this.inChunkId, { length: this.length });
    }
}