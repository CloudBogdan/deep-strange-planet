import { Color, Config, ItemSettings, OreSettings } from "../../config";
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

    update() {
        super.update();
        
        if (!this.player) return;
        
        this.interactType = (
            this.player.inventory.totalCount == 0 ||
            this.contains.totalCount >= this.maxTotalCount ||
            this.filterRaws(this.player.inventory.slots).length == this.filterRaws(this.player.inventory.slots).filter(name=> ItemSettings[name].storage > this.level).length
        ) ? "view" : "store";
        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
        this.ui.allowSelectSlots = this.ui.enabled;
        if (this.ui.focused.row == 1)
            this.selectedSlotIndex = this.ui.focused.slot;
    }

    onInteract() {
        super.onInteract();

        if (this.ui.enabled && this.ui.focused.row == 0 && this.ui.focused.slot == 0) {
            const slotName = this.filterRaws(this.contains.slots)[this.selectedSlotIndex];
            this.drop(slotName, 1)
            return;
        }
        
        if (this.interactType == "store") {
            this.ui.enabled = false;
            this.store();
        } else if (this.interactType == "view") {
            if (!this.ui.enabled) {
                this.ui.focused.row = 1;
                this.ui.focused.slot = 0;
            }
            this.ui.enabled = !this.ui.enabled;
            if (this.ui.enabled)
                this.audio.play(this.game, "storage");
        }        

    }
    upgrade(levelUp: number) {
        super.upgrade(levelUp);

        this.maxTotalCount = MaxStorageTotalCount[`${ this.level }-level`];
    }

    store() {
        if (this.contains.totalCount >= this.maxTotalCount || !this.player) return;
        
        let storedCount = 0;
        let totalStoredCount = 0;
        const slotNames = this.filterRaws(this.player.inventory.slots).filter(name=> ItemSettings[name].storage <= this.level);
        // Storage level less then need
        if (this.filterRaws(this.player.inventory.slots).filter(name=> ItemSettings[name].storage > this.level).length > 0)
            this.player.spawnText("Низкий уровень\nхранилища", new Vector2(0, -90));
        
        slotNames.map(slot=> {
            if (!this.player) return;
            
            this.contains.slots[slot] = this.contains.slots[slot] || 0
            
            // Add items
            if (this.contains.totalCount >= this.maxTotalCount) {
                this.player.spawnText("Хранилище перепольнено", new Vector2(0, -50));
                return;
            }

            const rawInstances = this.player.inventory.slots[slot].instances;
            
            for (let i = 0; i < rawInstances.length; i ++) {
                if (rawInstances[i] && rawInstances[i].picked) {
                    rawInstances[i].allowPickup = false;
                    rawInstances[i].picked = false;
                    rawInstances[i].name.indexOf("raw") >= 0 ? (rawInstances[i] as any).foldToPosition = this.position : 0;
                }
            }

            storedCount = this.player.inventory.slots[slot].count + this.contains.totalCount <= this.maxTotalCount ? this.player.inventory.slots[slot].count : (this.maxTotalCount - this.contains.totalCount);
            this.contains.slots[slot] += storedCount;
            this.contains.totalCount += storedCount;
            totalStoredCount += storedCount;
            this.player.inventory.totalCount -= storedCount;
            this.player.inventory.slots[slot].count -= storedCount;
        });
        
        if (slotNames.length <= 0) return;
        
        // Play store audio
        this.audio.play(this.game, "store");
        this.player.spawnText(totalStoredCount.toString());
    }
    drop(slotName: string, count: number) {
        if (!this.contains.slots[slotName]) return
        
        this.contains.slots[slotName] -= count;
        this.contains.totalCount -= count;

        this.game.add(new Raws[slotName](this.position));
        this.game.initChildren();
        this.audio.play(this.game, "store", 1, false, false);
    }

    renderUI() {
        super.renderUI();

        if (!this.ui.enabled) return;

        const slots = this.filterRaws(this.contains.slots);
        this.ui.updateTemplate([
            slots.length > 0 ? 1 : 0,
            slots.length
        ]);
        if (!this.ui.template[0]) {
            this.ui.focused.row = 1;
            this.ui.focused.slot = 0;
        }

        this.closeText = (this.ui.focused.row == 0 && this.ui.focused.slot == 0) ? "выбросить" : "закрыть";
            
        this.renderInventoryUI(slots);

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
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(name)),
                    position: pos,
                    layer: "ui"
                });
            }
        });

    }

    renderInventoryUI(slots: string[]) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

        if (slots.length != 0) {
            const closePosition = new Vector2(size * 1.5 + 20, -size * 2 - 20).add(windowCenter);
            this.ui.renderSlot(closePosition, 0, 0, ()=> {

                this.game.renderer.drawSprite({
                    // texture: asImage(game.getAssetByName("close")),
                    texture: asImage(this.game.getAssetByName("button")),
                    position: closePosition,
                    width: 2,
                    layer: "ui"
                });
                this.game.renderer.drawText({
                    text: "Выбросить x1",
                    position: closePosition,
                    layer: "ui"
                });

            }, 1.75);
        }

        // Draw count text
        this.game.renderer.drawText({
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
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(slot)),
                    position: pos,
                    layer: "ui"
                });

                // Draw item count text
                this.game.renderer.drawText({
                    text: this.contains.slots[slot].toString(),
                    position: pos.add(Vector2.all(Config.SPRITE_SIZE * .3)),
                    layer: "ui"
                });
                
            }, 1, 1, this.selectedSlotIndex == index);

        });
        
    }

    filterRaws(slots: Player["inventory"]["slots"] | Storage["contains"]["slots"]) {
        return Object.keys(slots).filter(name=> name.indexOf("raw") >= 0 && ((slots[name] as any).count ? (slots[name] as any).count > 0 : slots[name] > 0));
    }
}