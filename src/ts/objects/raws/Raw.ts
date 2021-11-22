import { Config } from "../../config";
import { Game, Sprite } from "../../engine";
import { random, Vector2, compareNames } from "../../engine/utils/math";
import { Player } from "../entities/Player";
import { Item } from "../item/Item";

export type RawType = 
    "raw-cidium" | "raw-osmy" | "raw-grade-cidium" | "raw-antin" |
    "raw-rady" | "raw-nerius";

export class Raw extends Item {
    rawType: RawType
    foldToPosition: Vector2
    
    constructor(type: RawType, position: Vector2) {
        super(`raw-${ type }`, type, {
            position: position.expand(),
            colliderType: "dynamic",
        });

        this.collider.width = 6 * Config.SPRITE_SCALE;
        this.collider.height = 6 * Config.SPRITE_SCALE;

        this.rawType = type;
        this.foldToPosition = Vector2.zero();
    }
    
    init(game: Game) {
        super.init(game);
        
        this.liveStartElapsed = game.clock.elapsed;
        this.layer = "particles";
        this.velocity.set(random(-8, 8), random(-8, 8));
        this.acceleration.copy(Vector2.all(.8));

        if (this.checkDistanceToPlayer(game.getChildById("player"), Config.PICKUP_DISTANCE * 2))
            this.nearOnInit = true;
    }

    update(game: Game) {
        super.update(game);

        if (!game.renderer.inCameraViewport(this.position)) {
            if (game.clock.elapsed - this.liveStartElapsed >= Config.RAW_LIVE_TIME)
                game.removeChildById(this.id);
        } else {
            this.liveStartElapsed = game.clock.elapsed;
        }
        
        if (this.allowPickup) {
            this.followPlayer(game, game.getChildById<Player>("player"));
            this.collideWidthOtherItems(game.getChildrenByName<Raw>("raw"));
        } else {
            this.moveTo(this.foldToPosition);
            if (this.foldToPosition.distance(this.position) < 30)
                game.removeChildById(this.id);
        }
    }

    // followPlayer(game: Game, player: Player | undefined) {
    //     if (!player) return;

    //     if (!this.checkDistanceToPlayer(player))
    //         this.nearOnInit = false;

    //     if (this.nearOnInit) return;
            
    //     if (!this.picked && this.checkDistanceToPlayer(player)) {
    //         player.pickup(game, this, this.rawType, 1);
    //         this.picked = true;
    //     }
    //     else if (this.picked && player.wire.distance(this.position) > Config.PICKUP_DISTANCE) {
    //         player.pickup(game, this, this.rawType, -1);
    //         this.picked = false;
    //     }
        
    //     if (!this.picked) return;

    //     this.moveTo(player.wire);
    //     game.renderer.drawLine({
    //         color: RawLineColor[this.rawType] as any,
    //         width: 2,
    //         points: [this.position, player.position],
    //         layer: "bg"
    //     });

    // }
}