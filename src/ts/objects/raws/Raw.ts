import { Color, Config } from "../../config";
import { Game, Sprite } from "../../engine";
import { random, Vector2 } from "../../engine/utils/math";
import { Player } from "../entities/Player";

export type RawType = 
    "raw-cidium";

export class Raw extends Sprite {
    picked: boolean
    allowPickup: boolean
    rawType: RawType
    foldToPosition: Vector2
    
    constructor(type: RawType, position: Vector2) {
        super(`raw-${ type }`, type, {
            position,
            colliderType: null
        });

        this.rawType = type;
        this.allowPickup = true;
        this.picked = false;
        this.foldToPosition = Vector2.zero();
    }

    init(game: Game) {
        super.init(game);

        this.layer = "particles";
        this.velocity.set(random(-8, 8), random(-8, 8));
        this.acceleration.copy(Vector2.all(.8));
    }

    update(game: Game) {
        super.update(game);

        if (this.allowPickup) {
            this.followPlayer(game, game.getChildById<Player>("player"));
            this.collideWidthOtherRaw(game.getChildrenByName<Raw>("raw"));
        } else {
            this.moveTo(this.foldToPosition);
            if (this.foldToPosition.distance(this.position) < 30)
                game.removeChildById(this.id);
        }
    }

    followPlayer(game: Game, player: Player | undefined) {
        if (!player) return;

        if (!this.picked && player.position.distance(this.position) < Config.PICKUP_DISTANCE) {
            player.pickup(game, this.rawType, 1);
            this.picked = true;
        }
        else if (this.picked && player.wire.distance(this.position) > Config.PICKUP_DISTANCE) {
            player.pickup(game, this.rawType, -1);
            this.picked = false;
        }
        
        if (!this.picked) return;

        this.moveTo(player.wire);
        game.renderer.drawLine(Color.YELLOW_LIGHT, 2, [this.position, player.position], "bg");

    }

    collideWidthOtherRaw(raws: Raw[]) {
        if (!this.picked) return;
        
        raws.map(raw=> {

            if (raw.position.distance(this.position) < 8 * Config.SPRITE_SCALE) {
                raw.position.copy(raw.position.add(raw.position.sub(this.position).normalize()));
            }

        });
    }

    moveTo(position: Vector2) {
        this.velocity.copy(this.velocity.add(position.sub(this.position).mul(.04)));
    }
}