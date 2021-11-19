import { Color, Config, OreSettings } from "../../config";
import { Game, ISpriteProps } from "../../engine";
import { UI } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, assetIsValid, safeValue, Vector2, wrapText } from "../../engine/utils/math";
import { GearNames, RawNames } from "../../names";
import { Player } from "../entities/Player";
import { Raw, RawType } from "../raws/Raw";
import { Gear, GearLevel } from "./Gear";

type InteractType = "store" | "view";
enum MaxStorageTotalCount {
    "1-level" = 18,
    "2-level" = 28,
    "3-level" = 42,
}

export class Storage extends Gear {
    contains: {
        totalCount: number
        slots: {
            [key: string]: number
        }
    }
    interactType: InteractType
    maxTotalCount: number
    
    constructor(level: GearLevel, props?: ISpriteProps) {
        super("gear-storage", level, props);
        
        this.contains = { totalCount: 0, slots: {} };
        this.interactType = "view";
        this.maxTotalCount = MaxStorageTotalCount[`${ level }-level`];
        this.headerOffset = new Vector2(0, -Config.SPRITE_SIZE);
    }

    update(game: Game) {
        super.update(game);
        
        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        this.interactType = (player.inventory.totalCount == 0 || this.contains.totalCount >= this.maxTotalCount) ? "view" : "store";
        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
        this.ui.allowSelectSlots = this.ui.enabled;
    }

    onInteract(game: Game) {
        super.onInteract(game);

        if (this.interactType == "store") {
            this.ui.enabled = false;
            this.store(game);
        } else if (this.interactType == "view") {
            this.ui.enabled = !this.ui.enabled;
        }
    }
    upgrade(levelUp: number) {
        super.upgrade(levelUp);

        this.maxTotalCount = MaxStorageTotalCount[`${ this.level }-level`];
    }

    store(game: Game) {
        if (this.contains.totalCount >= this.maxTotalCount || !this.player) return;
        
        let storedCount = 0;
        let totalStoredCount = 0;
        const slotNames = Object.keys(this.player.inventory.slots);
        
        slotNames.map(slot=> {
            if (!this.player) return;
            
            this.contains.slots[slot] = this.contains.slots[slot] || 0
            
            // Add items
            if (this.contains.totalCount >= this.maxTotalCount) {
                this.player.spawnText(game, "Хранилище перепольнено", new Vector2(0, -50));
                return;
            }

            const rawInstances = this.player.inventory.slots[slot].instances;
            
            for (let i = 0; i < rawInstances.length; i ++) {
                if (rawInstances[i] && rawInstances[i].picked) {
                    rawInstances[i].allowPickup = false;
                    rawInstances[i].picked = false;
                    rawInstances[i].foldToPosition = this.position;
                }
            }

            storedCount = this.player.inventory.slots[slot].count + this.contains.totalCount <= this.maxTotalCount ? this.player.inventory.slots[slot].count : (this.maxTotalCount - this.contains.totalCount);
            this.contains.slots[slot] += storedCount;
            this.contains.totalCount += storedCount;
            totalStoredCount += storedCount;
        });
        
        if (this.player.inventory.totalCount <= 0) return;
        
        this.player.spawnText(game, totalStoredCount.toString());
        this.player.inventory = { totalCount: 0, slots: {} };
    }

    renderUI(game: Game, renderer: Renderer) {
        super.renderUI(game, renderer);

        if (!this.ui.enabled) return;

        const slots = Object.keys(this.contains.slots).filter(s=> this.contains.slots[s] > 0);
        this.ui.updateTemplate([slots.length]);

        this.renderInventoryUI(slots, game, renderer);

        const name = slots[this.ui.focused.slot]
        const raw = RawNames[name];
        if (!raw) return;
        
        const oreSettings = OreSettings[name.replace("raw-", "")];
        const special = [
            oreSettings ? `> Нужен инструмент ${ oreSettings.tool || 1 }ур. и выше` : "> Можно найти",
            raw.special || ""
        ].filter(t=> t != "");

        this.ui.renderDescriptionUI({
            title: raw.name,
            specials: special,
            description: raw.desc, 
            renderIcon: (pos)=> {
                renderer.drawSprite({
                    texture: asImage(game.getAssetByName(name)),
                    position: pos,
                    layer: "ui"
                });
            }
        }, game, renderer);

    }

    renderInventoryUI(slots: string[], game: Game, renderer: Renderer) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        const maxRowItemsCount = 5;

        // Draw count text
        renderer.drawText({
            text: `${ this.contains.totalCount }/${ this.maxTotalCount }`,
            position: new Vector2(-size * 1.2, -size * 2 + 10).add(windowCenter),
            color: this.contains.totalCount >= this.maxTotalCount ? Color.RED : "#fff",
            centered: false,
            layer: "ui"
        })

        slots.map((slot, index)=> {

            const pos = new Vector2(
                (index * size) - size * Math.floor(maxRowItemsCount / 2) + (index > maxRowItemsCount-1 ? -size * maxRowItemsCount : 0),
                index > maxRowItemsCount-1 ? size : 0
            ).add(windowCenter).add(new Vector2(0, -size));

            this.ui.renderSlot(pos, 0, index, ()=> {

                // Draw item sprite
                renderer.drawSprite({
                    texture: asImage(game.getAssetByName(slot)),
                    position: pos,
                    layer: "ui"
                });

                // Draw item count text
                renderer.drawText({
                    text: this.contains.slots[slot].toString(),
                    position: pos.add(Vector2.all(Config.SPRITE_SIZE * .3)),
                    layer: "ui"
                });
                
            });

        });
        
    }
}