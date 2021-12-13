import { Color, Config, ItemSettings, OreSettings } from "../../config";
import { ISpriteProps } from "../../engine";
import { asImage, clamp, safeValue, Vector2 } from "../../engine/utils/math";
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
    maxTotalCount: number
    interactType: InteractType
    
    constructor(props?: ISpriteProps) {
        super("gear-storage", 1, props);
        
        this.contains = { totalCount: 0, slots: {} };
        this.interactType = "view";
        this.maxTotalCount = MaxStorageTotalCount[`${ this.level }-level`];
        this.headerOffset.set(0, -Config.SPRITE_SIZE);
        this.changeMaxTotalCount();
    }

    init() {
        super.init();

        this.level = this.game.loadKey("storage-level", 1);
        this.contains = this.game.loadKey("storage-contains", { totalCount: 0, slots: {} });
        
        this.changeMaxTotalCount();
        this.calculateTotalCount();
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

        this.actionButtonAssetName = (this.ui.focused.row == 0) ? "close" : "drop";

        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
        this.tipText = this.actionButtonAssetName == "close" ? "закрыть" : "выбросить x1";
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
        
        slotNames.map(slotName=> {
            if (!this.player) return;
            
            this.contains.slots[slotName] = this.contains.slots[slotName] || { count: 0 };
            
            // Add items
            if (this.contains.totalCount >= this.maxTotalCount) {
                this.player.spawnText("Хранилище перепольнено", new Vector2(0, -50));
                return;
            }

            storedCount = this.player.inventory.slots[slotName].count + this.contains.totalCount <= this.maxTotalCount ? this.player.inventory.slots[slotName].count : (this.maxTotalCount - this.contains.totalCount);
            this.contains.slots[slotName].count += storedCount;
            totalStoredCount += storedCount;
            
            this.player.foldItemsTo(slotName, storedCount, this.position);

            this.calculateTotalCount();
            this.player.calculateTotalCount();
        });
        
        if (slotNames.length <= 0) return;
        
        // Play store audio
        this.sound.play(this.game, "store");
        this.player.spawnText(totalStoredCount.toString());

        this.saveData();
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

        this.saveData();
    }

    renderUI() {
        super.renderUI();

        if (!this.ui.enabled) return;

        const slotNames = this.filterItems(this.contains.slots);
        this.ui.updateTemplate([
            1,
            clamp(slotNames.length, 0, this.maxRowItemsCount),
            slotNames.length > this.maxRowItemsCount ? slotNames.length - this.maxRowItemsCount : 0,
        ]);
        if (!this.ui.template[0]) {
            this.ui.focused.row = 1;
            this.ui.focused.slot = 0;
        }
            
        this.renderInventoryUI(slotNames);

        const name = slotNames[this.ui.ghostFocused.slot + (this.ui.ghostFocused.row-1)*this.maxRowItemsCount]
        const item = ObjectNames[name];
        if (!item) return;
        
        const oreSettings = OreSettings[name.replace("raw-", "")];
        const special = [
            oreSettings ? `> Нужен инструмент ${ oreSettings.tool || 1 }ур. и выше` : "> Можно найти",
            ...item.special || ""
        ].filter(t=> t != "");

        // Render description
        this.ui.renderDescriptionUI({
            title: item.name,
            specials: special,
            description: item.desc, 
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

        // Close button
        if (slots.length == 0) {
            this.ui.focused.row = 0;
            this.ui.bounds();
        }

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

            this.ui.renderFocusable(
                pos,
                Math.floor(index / this.maxRowItemsCount) + 1,
                index % this.maxRowItemsCount,
                ()=> {
                const count = this.contains.slots[slot].count;

                // Draw item sprite
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(slot)),
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

    onInteract() {
        super.onInteract();

        if (this.ui.enabled && this.ui.focused.row == 0 && this.ui.focused.slot == 0) {
            this.ui.enabled = false;
            return;
        }
        if (this.ui.enabled && this.ui.focused.row != 0) {
            const slotName = this.filterItems(this.contains.slots)[this.ui.ghostFocused.slot + (this.ui.ghostFocused.row - 1) * this.maxRowItemsCount];
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

    filterItems(slots: Storage["contains"]["slots"]) {
        return Object.keys(slots).filter(name=> slots[name].count > 0);
        // return Object.keys(slots).filter(name=> name.indexOf("raw") >= 0 && ((slots[name] as any).count ? (slots[name] as any).count > 0 : slots[name] > 0));
    }
    saveData() {
        super.saveData();
        this.game.saveKey("storage-contains", JSON.stringify(this.contains));
        this.game.saveKey("storage-level", this.level.toString());
    }
    changeMaxTotalCount() {
        this.maxTotalCount = MaxStorageTotalCount[`${ this.level }-level`];
    }
    reset(): void {
        this.contains.totalCount = 0;
        this.contains.slots = {};
        
        super.reset();
    }
}