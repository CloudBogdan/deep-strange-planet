import { Color, Config, OreSettings } from "../../config";
import { Game, ISpriteProps } from "../../engine";
import { Renderer } from "../../engine/Renderer";
import { asImage, Vector2 } from "../../engine/utils/math";
import { RawNames } from "../../names";
import { Raws } from "../../objects";
import { Player } from "../entities/Player";
import { Raw } from "../raws/Raw";
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
    maxRowItemsCount: number
    selectedSlotIndex: number
    
    constructor(level: GearLevel, props?: ISpriteProps) {
        super("gear-storage", level, props);
        
        this.contains = { totalCount: 0, slots: {} };
        this.interactType = "view";
        this.maxTotalCount = MaxStorageTotalCount[`${ level }-level`];
        this.headerOffset = new Vector2(0, -Config.SPRITE_SIZE);
        this.maxRowItemsCount = 5;
        this.selectedSlotIndex = 0;
    }

    update(game: Game) {
        super.update(game);
        
        const player = game.getChildById<Player>("player");
        if (!player) return;
        
        this.interactType = (player.inventory.totalCount == 0 || this.contains.totalCount >= this.maxTotalCount) ? "view" : "store";
        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
        this.ui.allowSelectSlots = this.ui.enabled;
        if (this.ui.focused.row == 1)
            this.selectedSlotIndex = this.ui.focused.slot;
    }

    onInteract(game: Game) {
        super.onInteract(game);

        if (this.ui.enabled && this.ui.focused.row == 0 && this.ui.focused.slot == 0) {
            const slotName = Object.keys(this.contains.slots).filter(name=> this.contains.slots[name] > 0)[this.selectedSlotIndex];
            this.drop(game, slotName, 1)
            return;
        }
        
        if (this.interactType == "store") {
            this.ui.enabled = false;
            this.store(game);
        } else if (this.interactType == "view") {
            if (!this.ui.enabled) {
                this.ui.focused.row = 1;
                this.ui.focused.slot = 0;
            }
            this.ui.enabled = !this.ui.enabled;
        }        

    }
    upgrade(game: Game, levelUp: number) {
        super.upgrade(game, levelUp);

        this.maxTotalCount = MaxStorageTotalCount[`${ this.level }-level`];
    }

    store(game: Game) {
        if (this.contains.totalCount >= this.maxTotalCount || !this.player) return;
        
        let storedCount = 0;
        let totalStoredCount = 0;
        const slotNames = Object.keys(this.player.inventory.slots).filter(name=> name.indexOf("raw") >= 0);
        
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
                    rawInstances[i].name.indexOf("raw") >= 0 ? (rawInstances[i] as Raw).foldToPosition = this.position : 0;
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
    drop(game: Game, slotName: string, count: number) {
        if (!this.contains.slots[slotName]) return
        
        this.contains.slots[slotName] -= count;
        this.contains.totalCount -= count;

        game.add(new Raws[slotName](this.position));
        game.initChildren();
    }

    renderUI(game: Game, renderer: Renderer) {
        super.renderUI(game, renderer);

        if (!this.ui.enabled) return;

        const slots = Object.keys(this.contains.slots).filter(name=> this.contains.slots[name] > 0);
        this.ui.updateTemplate([
            slots.length > 0 ? 1 : 0,
            slots.length
        ]);
        if (!this.ui.template[0]) {
            this.ui.focused.row = 1;
            this.ui.focused.slot = 0;
        }

        this.closeText = (this.ui.focused.row == 0 && this.ui.focused.slot == 0) ? "выбросить" : "закрыть";
            
        this.renderInventoryUI(slots, game, renderer);

        const name = slots[this.selectedSlotIndex]
        const raw = RawNames[name];
        if (!raw) return;
        
        const oreSettings = OreSettings[name.replace("raw-", "")];
        const special = [
            oreSettings ? `> Нужен инструмент ${ oreSettings.tool || 1 }ур. и выше` : "> Можно найти",
            raw.special || ""
        ].filter(t=> t != "");

        // Render description
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

        if (slots.length != 0) {
            const closePosition = new Vector2(size * 1.5 + 20, -size * 2 - 20).add(windowCenter);
            this.ui.renderSlot(closePosition, 0, 0, ()=> {

                renderer.drawSprite({
                    // texture: asImage(game.getAssetByName("close")),
                    texture: asImage(game.getAssetByName("button")),
                    position: closePosition,
                    width: 2,
                    layer: "ui"
                });
                renderer.drawText({
                    text: "Выбросить x1",
                    position: closePosition,
                    layer: "ui"
                });

            }, 1.75);
        }

        // Draw count text
        renderer.drawText({
            text: `${ this.contains.totalCount }/${ this.maxTotalCount }`,
            position: new Vector2(-size * 1.2, -size * 2 + 10).add(windowCenter),
            color: this.contains.totalCount >= this.maxTotalCount ? Color.RED : "#fff",
            centered: false,
            layer: "ui"
        });

        slots.map((slot, index)=> {
            const isOverflow = index > this.maxRowItemsCount-1;

            const pos = new Vector2(
                (index * size) - size * Math.floor(this.maxRowItemsCount / 2) + (isOverflow ? -size * this.maxRowItemsCount : 0),
                isOverflow ? size : 0
            ).add(windowCenter).add(new Vector2(0, -size));

            this.ui.renderSlot(pos, 1, index, ()=> {

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
                
            }, 1, 1, this.selectedSlotIndex == index);

        });
        
    }
}