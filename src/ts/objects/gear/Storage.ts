import { Color, Config, OreSettings } from "../../config";
import { Game, ISpriteProps } from "../../engine";
import { UI } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, assetIsValid, safeValue, Vector2, wrapText } from "../../engine/utils/math";
import { GearNames, RawNames } from "../../names";
import { Player } from "../entities/Player";
import { Raw } from "../raws/Raw";
import { Gear, Level } from "./Gear";

type InteractType = "store" | "view";
enum MaxStorageTotalCount {
    "1-level" = 16,
    "2-level" = 28,
    "3-level" = 42,
}

export class Storage extends Gear {
    ui: UI
    
    contains: Player["inventory"]
    interactType: InteractType
    maxTotalCount: number
    uiEnabled: boolean
    
    constructor(level: Level, props?: ISpriteProps) {
        super("storage", level, props);

        this.ui = new UI();
        
        this.contains = { totalCount: 0, slots: {} };
        this.interactType = "view";
        this.maxTotalCount = MaxStorageTotalCount[`${ level }-level`];
        this.uiEnabled = false;
    }

    init(game: Game) {
        super.init(game);

        this.ui.init(game);
    }
    update(game: Game) {
        super.update(game);
        
        const player = game.getChildById<Player>("player");
        if (!player) return;
        player.allowMove = !this.uiEnabled;
        
        this.interactType = (player.inventory.totalCount == 0 || this.contains.totalCount >= this.maxTotalCount) ? "view" : "store";
        this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
    }

    onInteract(game: Game, player: Player) {
        super.onInteract(game, player);

        if (this.interactType == "store") {
            this.store(game, player);
            this.uiEnabled = false;
        } else if (this.interactType == "view") {
            console.log(this.contains.totalCount, this.contains.slots);
            this.uiEnabled = !this.uiEnabled;
        }
    }

    store(game: Game, player: Player) {
        if (this.contains.totalCount >= this.maxTotalCount) return;
        
        let storedCount = 0;
        let totalStoredCount = 0;
        
        Object.keys(player.inventory.slots).map(slot=> {
            this.contains.slots[slot] = this.contains.slots[slot] || 0
            
            // Add items
            if (this.contains.totalCount >= this.maxTotalCount) {
                player.spawnText(game, "Хранилище перепольнено", new Vector2(0, -50));
                return;
            }

            storedCount = player.inventory.slots[slot] + this.contains.totalCount <= this.maxTotalCount ? player.inventory.slots[slot] : (this.maxTotalCount - this.contains.totalCount);
            this.contains.slots[slot] += storedCount;
            this.contains.totalCount += storedCount;
            totalStoredCount += storedCount;
        });
        
        game.getChildrenByName<Raw>("raw").filter(r=> r.picked).map((raw, index)=> {
            if (!(index <= storedCount)) return;
            // Destroy on fold in storages
            raw.allowPickup = false;
            raw.picked = false;
            raw.foldToPosition = this.position;
        });
        
        if (player.inventory.totalCount <= 0) return;
        
        player.spawnText(game, totalStoredCount.toString());
        player.inventory = { totalCount: 0, slots: {} };
    }

    renderUI(game: Game, renderer: Renderer) {
        super.renderUI(game, renderer);
        this.ui.allowSelectButtons = this.uiEnabled;
        if (!this.uiEnabled || !this.ui) return;

        const slots = Object.keys(this.contains.slots).filter(s=> this.contains.slots[s] > 0);
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        this.ui.buttonsCount = slots.length;

        // BG
        renderer.drawRect({
            color: "rgba(0, 0, 0, .6)",
            width: innerWidth / size,
            height: innerHeight / size,
            position: windowCenter,
            layer: "ui"
        });

        this.renderInventoryUI(slots, game, renderer);
        this.renderDescriptionUI(slots[this.ui.buttonFocused], game, renderer);

    }

    renderInventoryUI(slots: string[], game: Game, renderer: Renderer) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        const height = 140;

        // Container
        // this.ui.drawContainer(
        //     (size * 5 + 40) / size,
        //     (size + height) / size,
        //     new Vector2(0, -(height / 3))
        // );
        renderer.drawSprite({
            texture: asImage(game.getAssetByName("storage-ui")),
            position: new Vector2().add(windowCenter),
            width: 7,
            height: 5,
            layer: "ui"
        });
        renderer.drawSprite({
            texture: asImage(game.getAssetByName([this.gearType, this.level].join("-"))),
            position: new Vector2(-size * 2, -size - 15).add(windowCenter),
            width: 2,
            height: 2,
            layer: "ui"
        });
        // Title
        renderer.drawText({
            text: `${ GearNames[this.name].name } ${ this.level }ур.`,
            position: new Vector2(-size * 1.2, -size - 15).add(windowCenter),
            centered: false,
            layer: "ui"
        });

        slots.map((slot, index)=> {

            const pos = new Vector2(
                (index * size) - (5 * size) / 2 + size / 2,
                0
            ).add(windowCenter);

            this.ui.renderButton(pos, index, ()=> {

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
    renderDescriptionUI(currentSlotName: string, game: Game, renderer: Renderer) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        const margin = 6;
        const lineHeight = 22;

        // Container
        renderer.drawSprite({
            texture: asImage(game.getAssetByName("description-ui")),
            position: new Vector2(0, size * 3).add(windowCenter),
            width: 7,
            height: 5,
            layer: "ui"
        });
        
        const raw = RawNames[currentSlotName];
        if (!raw) return;

        // Sprite
        renderer.drawSprite({
            texture: asImage(game.getAssetByName(currentSlotName)),
            position: new Vector2(-2.5 * size + size / 2, size + 70).add(windowCenter),
            layer: "ui"
        });

        // Texts
        const rawName = wrapText(raw.name, 26);
        const oreSettings = OreSettings[currentSlotName.replace("raw-", "")];
        const descTextArray = [
            oreSettings ? `> Нужен инструмент ${ oreSettings.tool || 1 }ур. и выше` : "> Можно найти",
            raw.special || ""
        ];
        
        renderer.drawText({
            text: rawName.text,
            font: "20px Pixel",
            position: new Vector2(-size * 1.2, size + 70 - size / 2 + 15).add(windowCenter),
            centered: false,
            layer: "ui"
        });
        renderer.drawText({
            text: descTextArray.join("\n"),
            color: Color.ORANGE,
            position: new Vector2(-size * 1.2, size + 70 + margin + (rawName.wrapCount >= 1 ? lineHeight : 0)).add(windowCenter),
            centered: false,
            layer: "ui"
        });
        renderer.drawText({
            text: wrapText(raw.desc, 31).text,
            position: new Vector2(-size * 1.2, size + 70 + lineHeight + margin * 2 + lineHeight * rawName.wrapCount + lineHeight * (descTextArray.length - 1)).add(windowCenter),
            centered: false,
            layer: "ui"
        });

    }
}