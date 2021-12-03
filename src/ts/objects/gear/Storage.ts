import { Color, Config, ItemSettings, OreSettings } from "../../config";
import { ISpriteProps } from "../../engine";
import { asImage, safeValue, Vector2 } from "../../engine/utils/math";
import { ObjectNames } from "../../names";
import { Items } from "../../objects";
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
            [key: string]: { count: number }
        }
    }
    interactType: InteractType
    maxTotalCount: number
    maxRowItemsCount: number
    actionType: "drop" | "close"
    
    constructor(level: GearLevel, props?: ISpriteProps) {
        super("gear-storage", 3, props);
        
        this.contains = { totalCount: 6, slots: {
            "raw-cidium": { count: 4 },
            "raw-osmy": { count: 2 }
        } };
        this.interactType = "view";
        this.maxTotalCount = MaxStorageTotalCount[`${ level }-level`];
        this.headerOffset.set(0, -Config.SPRITE_SIZE);
        this.maxRowItemsCount = 5;
        this.actionType = "close";
    }

    update() {
        super.update();
        
        if (!this.player) return;
        if (!this.playerIsNear) return;
        
        // Change interact type
        this.interactType = (
            this.player.inventory.totalCount == 0 ||
            this.contains.totalCount >= this.maxTotalCount ||
            this.filterItems(this.player.inventory.slots).length == this.filterItems(this.player.inventory.slots).filter(name=> safeValue(ItemSettings[name], { lineColor: "#fff", storage: 1 }).storage > this.level).length
        ) ? "view" : "store";
        this.actionType = (this.ui.focused.row == 0 && this.ui.focused.slot == 0) ? "close" : "drop";

        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
        this.tipText = this.actionType == "close" ? "закрыть" : "выбросить";
    }

    onInteract() {
        super.onInteract();

        if (this.ui.enabled && this.ui.focused.row == 0 && this.ui.focused.slot == 0) {
            this.ui.enabled = false;
            return;
        }
        if (this.ui.enabled && this.ui.focused.row == 1) {
            const slotName = this.filterItems(this.contains.slots)[this.ui.ghostFocused.slot];
            this.drop(slotName, 1);
            return;
        }
        
        if (this.interactType == "store") {
            this.ui.enabled = false;
            this.store();
        } else if (this.interactType == "view") {
            if (!this.ui.enabled) {
                this.ui.focused.row = 0;
                this.ui.focused.slot = 0;
            }
            this.ui.enabled = true;
            if (this.ui.enabled)
                this.sound.play(this.game, "storage");
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
        const slotNames = this.filterItems(this.player.inventory.slots).filter(name=> safeValue(ItemSettings[name], { lineColor: "#fff", storage: 1 }).storage <= this.level);
        // Storage level less then need
        if (this.filterItems(this.player.inventory.slots).filter(name=> safeValue(ItemSettings[name], { lineColor: "#fff", storage: 1 }).storage > this.level).length > 0)
            this.player.spawnText("Низкий уровень\nхранилища", new Vector2(0, -90));
        
        slotNames.map(slot=> {
            if (!this.player) return;
            
            this.contains.slots[slot] = this.contains.slots[slot] || { count: 0 };
            
            // Add items
            if (this.contains.totalCount >= this.maxTotalCount) {
                this.player.spawnText("Хранилище перепольнено", new Vector2(0, -50));
                return;
            }

            const slotInstances = this.player.inventory.slots[slot].instances;
            
            for (let i = 0; i < slotInstances.length; i ++) {
                if (slotInstances[i] && slotInstances[i].picked) {
                    slotInstances[i].allowPickup = false;
                    slotInstances[i].picked = false;
                    slotInstances[i].foldToPosition = this.position;
                }
            }
            for (let i = 0; i < slotInstances.length; i ++) {
                if (slotInstances[i] && !slotInstances[i].picked) {
                    this.player.inventory.slots[slot].instances.splice(i, 1);
                }
            }

            storedCount = this.player.inventory.slots[slot].count + this.contains.totalCount <= this.maxTotalCount ? this.player.inventory.slots[slot].count : (this.maxTotalCount - this.contains.totalCount);
            this.contains.slots[slot].count += storedCount;
            totalStoredCount += storedCount;
            this.player.inventory.slots[slot].count -= storedCount;

            this.calculateTotalCount();
            this.player.calculateTotalCount();
        });
        
        if (slotNames.length <= 0) return;
        
        // Play store audio
        this.sound.play(this.game, "store");
        this.player.spawnText(totalStoredCount.toString());
    }
    drop(slotName: string, count: number) {
        if (!this.contains.slots[slotName]) return
        
        this.contains.slots[slotName].count -= count;

        this.game.add(new Items[slotName](this.position));
        this.game.initChildren();
        this.sound.play(this.game, "store");

        this.calculateTotalCount();
    }
    calculateTotalCount() {
        this.contains.totalCount = 0;

        Object.keys(this.contains.slots).map(slotName=> {
            this.contains.totalCount += this.contains.slots[slotName].count;
        });
    }

    renderUI() {
        super.renderUI();

        if (!this.ui.enabled) return;

        const slots = this.filterItems(this.contains.slots);
        this.ui.updateTemplate([
            slots.length > 0 ? 1 : 0,
            slots.length
        ]);
        if (!this.ui.template[0]) {
            this.ui.focused.row = 1;
            this.ui.focused.slot = 0;
        }
            
        this.renderInventoryUI(slots);

        const name = slots[this.ui.ghostFocused.slot]
        const item = ObjectNames[name];
        if (!item) return;
        
        const oreSettings = OreSettings[name.replace("raw-", "")];
        const special = [
            oreSettings ? `> Нужен инструмент ${ oreSettings.tool || 1 }ур. и выше` : "> Можно найти",
            item.special || ""
        ].filter(t=> t != "");

        // Render description
        this.ui.renderDescriptionUI({
            title: item.name,
            specials: special,
            description: item.desc, 
            renderIcon: (pos)=> {
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(name.replace("item-", ""))),
                    position: pos,
                    layer: "ui"
                });
            }
        });

    }

    renderInventoryUI(slots: string[]) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

        // Close button
        if (slots.length == 0) {
            this.ui.focused.row = 0;
            this.ui.focused.slot = 0;
        }
        
        const pos = new Vector2(size*2, -size * 2 - 20).add(windowCenter);
        this.ui.renderSlot(pos.add(new Vector2(-2, 2)), 0, 0, ()=> {

            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName(this.actionType)),
                position: pos,
                layer: "ui"
            });

        }, 14 / Config.SPRITE_PIXEL_SIZE);

        // Draw count text
        this.game.renderer.drawText({
            text: `${ this.contains.totalCount }/${ this.maxTotalCount }`,
            position: new Vector2(-size*2.25, -size * 2 + 10).add(windowCenter),
            color: this.contains.totalCount >= this.maxTotalCount ? Color.RED : "#fff",
            align: "left",
            layer: "ui"
        });

        slots.map((slot, index)=> {
            
            const pos = new Vector2(
                ((index % this.maxRowItemsCount) * size) - size * Math.floor(this.maxRowItemsCount / 2),
                Math.floor(index / this.maxRowItemsCount) * size
            ).add(windowCenter).add(new Vector2(0, -size));

            this.ui.renderSlot(pos, 1, index, ()=> {
                const count = this.contains.slots[slot].count;

                // Draw item sprite
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(slot.replace("item-", ""))),
                    position: pos,
                    layer: "ui"
                });

                // Draw item count text
                if (count > 1)
                    this.game.renderer.drawText({
                        text: count.toString(),
                        position: pos.add(Vector2.all(Config.SPRITE_SIZE * .3)),
                        layer: "ui"
                    });
                
            }, 1, 1, true);

        });
        
    }

    filterItems(slots: Storage["contains"]["slots"]) {
        return Object.keys(slots).filter(name=> slots[name].count > 0);
        // return Object.keys(slots).filter(name=> name.indexOf("raw") >= 0 && ((slots[name] as any).count ? (slots[name] as any).count > 0 : slots[name] > 0));
    }
}