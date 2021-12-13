import { Config, OreSettings } from "../../config";
import { ISpriteProps } from "../../engine";
import { asImage, clamp, Vector2 } from "../../engine/utils/math";
import { ObjectNames } from "../../names";
import { Gear } from "./Gear";

export class Documentation extends Gear {
    constructor(props?: ISpriteProps) {
        super("gear-documentation", 1, props);

        this.width = 1;
        this.height = 1;
        this.allowActionButton = false;
    }

    renderUI() {
        super.renderUI();

        if (!this.ui.enabled) return;

        const objectNames = Object.keys(ObjectNames).filter(name=> (name.indexOf("gear") < 0 && name.indexOf("recipe") < 0));
        this.ui.updateTemplate([
            objectNames.length
        ]);
            
        this.renderObjectsCatalogUI(objectNames);
        
        const name = objectNames[this.ui.focused.slot];
        const itemSettings = ObjectNames[name];
        if (!itemSettings) return;
        
        const oreSettings = OreSettings[name.replace("raw-", "")];
        const special = oreSettings ? [
            oreSettings ? `> Нужен инструмент ${ oreSettings.tool || 1 }ур. и выше` : "> Можно найти",
            ...itemSettings.special || ""
        ].filter(t=> t != "") : null;
        const itemSpecial = itemSettings ? [
            ...itemSettings.special || ""
        ].filter(t=> t != "") : [];

        // Render description
        this.ui.renderDescriptionUI({
            title: itemSettings.name,
            specials: special || itemSpecial,
            description: itemSettings.desc, 
            renderIcon: (pos)=> {
                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(name)),
                    position: pos,
                    layer: "ui"
                });
            }
        });

    }

    renderObjectsCatalogUI(objectNames: string[]) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

        objectNames.map((objectName, index)=> {

            const slot = this.ui.focused.slot >= this.maxRowItemsCount ? this.ui.focused.slot : 0;

            const pos = new Vector2(
                index * size - Math.floor(this.maxRowItemsCount / 2)*size - slot*size,
                0
            ).add(windowCenter);
                
            if (index - slot < this.maxRowItemsCount && index+1 > slot)
            this.ui.renderFocusable(pos, 0, index, ()=> {

                this.game.renderer.drawSprite({
                    texture: asImage(this.game.getAssetByName(objectName)),
                    framed: false,
                    position: pos,
                    layer: "ui"
                })

            });

        });
        
    }

    onInteract() {
        super.onInteract();
        
        this.ui.enabled = !this.ui.enabled;
    }
}