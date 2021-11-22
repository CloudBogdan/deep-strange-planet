import { Config, ItemLineColor } from "../../config"
import { Game, ISpriteProps, Sprite } from "../../engine"
import { compareNames, random, Vector2 } from "../../engine/utils/math"
import { Player } from "../entities/Player"

export class Item extends Sprite {
    picked: boolean
    allowPickup: boolean
    liveStartElapsed: number
    nearOnInit: boolean
    
    constructor(name: string, assetName: string, props?: ISpriteProps) {
        super(name, assetName, props);

        this.allowPickup = true;
        this.picked = false;
        this.liveStartElapsed = 0;
        this.nearOnInit = false;
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

    pickup(game: Game, player: Player, count: number) {
        player.pickup(game, this, this.name, count);
    }

    followPlayer(game: Game, player: Player | undefined) {
        if (!player) return;

        if (!this.checkDistanceToPlayer(player))
            this.nearOnInit = false;

        if (this.nearOnInit) return;
            
        if (!this.picked && this.checkDistanceToPlayer(player)) {
            this.pickup(game, player, 1);
            this.picked = true;
        }
        else if (this.picked && player.wire.distance(this.position) > Config.PICKUP_DISTANCE) {
            this.pickup(game, player, -1);
            this.picked = false;
        }
        
        if (!this.picked) return;

        this.moveTo(player.wire);
        game.renderer.drawLine({
            color: ItemLineColor[this.name as any] as any,
            width: 2,
            points: [this.position, player.position],
            layer: "bg"
        });

    }
    checkDistanceToPlayer(player: Player | undefined, distance?: number): boolean | undefined {
        if (player)
            return player.position.distance(this.position) < (distance || Config.PICKUP_DISTANCE);
    }

    collideWidthOtherItems(items: any[]) {
        if (!this.picked) return;
        
        [...items].filter(item=> item.picked && !compareNames(item.id, this.id)).map((item, index)=> {
        
            if (item.position.distance(this.position) < 8 * Config.SPRITE_SCALE) {
                item.position.copy(item.position.add(item.position.sub(this.position).normalize()));
            }

        });
    }
    moveTo(position: Vector2) {
        this.velocity.copy(this.velocity.add(position.sub(this.position).mul(.04)));
    }
}