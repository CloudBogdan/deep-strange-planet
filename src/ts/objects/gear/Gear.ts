import { Config } from "../../config";
import { Game, ISpriteProps, Sprite, Text } from "../../engine";
import { Particle, SpawnParticles } from "../../engine/components/Particles";
import { Renderer } from "../../engine/Renderer";
import { assetIsValid, lerp, random, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";

export type GearType = 
    "storage" | "recycler" | "upgrader";
export type Level = 1 | 2 | 3;

export class Gear extends Sprite {
    gearType: GearType;
    gearName: string
    level: Level
    playerIsNear: boolean
    allowInteract: boolean

    animatedScale: number
    
    constructor(gearName: string, type: GearType, level: Level, props?: ISpriteProps) {
        super(type, [type, level].join("-"), props);

        this.width = 
        this.height = 2;
        
        this.gearType = type;
        this.gearName = gearName;
        this.level = level;
        this.playerIsNear = false;
        this.allowInteract = false;
        this.layer = "bg";

        this.animatedScale = 0;
    }

    init(game: Game) {
        super.init(game);

        game.gamepad.onKeyDown("enter", ()=> {
            if (!this.playerIsNear) return;

            this.onInteract(game, game.getChildById<Player>("player"));
        });
    }

    update(game: Game) {
        super.update(game);

        const player = game.getChildById<Player>("player");
        
        this.checkInteract(player);

        //
        this.animatedScale = lerp(this.animatedScale, .7, .2);
    }

    render(game: Game, renderer: Renderer) {
        super.render(game, renderer);

        if (this.playerIsNear && this.allowInteract) {
            const okAsset = game.getAssetByName("interact");
            const outlineAsset = game.getAssetByName([this.gearType, this.level, "outline"].join("-"));

            if (assetIsValid(okAsset, "image") && okAsset)
                renderer.drawSprite(
                    (okAsset.element as HTMLImageElement[])[0],
                    this.animatedScale, this.animatedScale,
                    this.position.add(new Vector2(0, -80))
                );
            if (assetIsValid(outlineAsset, "image") && outlineAsset)
                renderer.drawSprite(
                    (outlineAsset.element as HTMLImageElement[])[0],
                    2, 2,
                    this.position, 0, Vector2.zero(), this.layer, Vector2.all(), this.flip
                );
                
        }
    }

    checkInteract(player: Player | undefined) {
        if (!player) return;

        this.playerIsNear = player.position.distance(this.position) < Config.GEAR_INTERACT_DISTANCE;
    }

    onInteract(game: Game, player: Player | undefined) {
        this.animatedScale = .5;
    }
    spawnText(game: Game, text: string) {
        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        SpawnParticles(game, player.position.add(new Vector2(0, -30)), {
            // custom: new Text("store-text", text, { font: "22px Pixel" }),
            render(renderer, part) {
                renderer.drawText(
                    text, "#fff", "22px Pixel",
                    part.position, 0, Vector2.all(part.size),
                    "particles"
                );
            },
            size: [1, 1.2],
            count: 1,
            gravity: 0,
            rotationVelocity: ()=> random(-.02, .02),
            velocity: ()=> new Vector2(0, -1.5),
            downSize: .01,
            box: ()=> new Vector2(random(-10, 10), random(-10, 10))
        });
    }
    
}