import { Config, ItemSettings } from "../../config"
import { Game, ISpriteProps, Sprite } from "../../engine"
import { compareNames, random, Vector2 } from "../../engine/utils/math"
import { Player } from "../entities/Player"

export class ItemParent extends Sprite {
    radius: number
    picked: boolean
    allowPickup: boolean
    liveStartElapsed: number
    nearOnInit: boolean
    foldToPosition: Vector2
    
    constructor(name: string, assetName: string, position: Vector2, props?: ISpriteProps) {
        super(name, assetName, {
            ...props,
            colliderType: "dynamic",
            position: position.expand()
        });

        this.radius = 4;
        this.group = "items";
        this.allowPickup = true;
        this.picked = false;
        this.liveStartElapsed = 0;
        this.nearOnInit = false;
        this.foldToPosition = Vector2.zero();

        this.collider.width = 6 * Config.SPRITE_SCALE;
        this.collider.height = 6 * Config.SPRITE_SCALE;
    }

    init() {
        super.init();
        
        this.liveStartElapsed = this.game.clock.elapsed;
        this.layer = "particles";
        this.velocity.set(random(-8, 8), random(-8, 8));
        this.acceleration.copy(Vector2.all(.8));

        if (this.checkDistanceToPlayer(this.game.getChildById("player"), Config.PICKUP_DISTANCE * 2))
            this.nearOnInit = true;
    }
    update() {
        super.update();

        if (!this.game.renderer.inCameraViewport(this.position)) {
            if (this.game.clock.elapsed - this.liveStartElapsed >= Config.ITEMS_LIVE_TIME)
                this.game.removeChildById(this.id);
        } else {
            this.liveStartElapsed = this.game.clock.elapsed;
        }
        
        if (this.allowPickup) {
            this.followPlayer(this.game.getChildById<Player>("player"));
            this.collideWidthOtherItems((this.game.children as ItemParent[]).filter(child=> child.group == "items" && child.allowPickup && child.picked));
        } else {
            this.moveTo(this.foldToPosition);
            if (this.foldToPosition.distance(this.position) < 30)
                this.game.removeChildById(this.id);
        }

        // Change collider type
        this.collider.type = this.picked ? "dynamic" : "none";
    }

    pickup(player: Player, count: number) {
        player.pickup(this, this.name, count);
    }

    followPlayer(player: Player | undefined) {
        if (!player) return;

        if (!this.checkDistanceToPlayer(player))
            this.nearOnInit = false;

        if (this.nearOnInit) return;
            
        if (!this.picked && this.checkDistanceToPlayer(player)) {
            this.pickup(player, 1);
            this.picked = true;
        }
        else if (this.picked && player.wire.distance(this.position) > Config.PICKUP_DISTANCE) {
            this.pickup(player, -1);
            this.picked = false;
        }
        
        if (!this.picked) return;

        this.moveTo(player.wire);
        this.game.renderer.drawLine({
            color: ItemSettings[this.name] ? ItemSettings[this.name].lineColor : "#fff",
            width: 2,
            points: [this.position, player.position],
            layer: "bg"
        });

    }
    checkDistanceToPlayer(player: Player | undefined, distance?: number): boolean | undefined {
        if (player)
            return player.position.distance(this.position) < (distance || Config.PICKUP_DISTANCE);
    }

    collideWidthOtherItems(items: ItemParent[]) {
        if (!this.picked) return;
        
        items.map((item, index)=> {
        
            if (item.position.distance(this.position) < (this.radius + item.radius) * Config.SPRITE_SCALE) {
                item.position.copy(item.position.add(item.position.sub(this.position).normalize()));
            }

        });
    }
    moveTo(position: Vector2) {
        this.velocity.copy(this.velocity.add(position.sub(this.position).mul(.04)));
    }
}