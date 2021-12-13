import { Color, Config } from "../../config";
import { Game, ISpriteProps } from "../../engine";
import { asImage, clamp, safeSlot, safeValue, Vector2 } from "../../engine/utils/math";
import { ObjectNames } from "../../names";
import { Items } from "../../objects";
import { Gear, GearLevel } from "./Gear";
import recipes from "./recipes";
import { Storage } from "./Storage";

export class Recycler extends Gear {
    storage: Storage
    recipes: { [key: string]: Recipe }
    
    constructor(storage: Storage, props?: ISpriteProps) {
        super("gear-recycler", 1, props);

        this.ui.focused.slot = 1;
        this.ui.focused.row = 10;

        this.storage = storage;
        this.recipes = recipes(this);
        this.headerOffset.set(0, -Config.SPRITE_SIZE);
    }
    
    onInteract() {
        super.onInteract();

        // Open
        this.ui.enabled = true;
        
        // Close
        if (this.ui.focused.slot == 0 && this.ui.focused.row == 0 && this.ui.enabled) {
            this.ui.enabled = false;
        
            this.ui.focused.slot = 1;
            this.ui.focused.row = 10;

            return;
        }

        if (this.ui.enabled && this.ui.focused.slot == 1 && this.ui.focused.row == 10) {
            this.ui.focused.slot = 0;
            this.ui.focused.row = 0;
        }

        if (this.ui.focused.row != 0) {
            
            const focused = this.ui.focused.slot + (this.ui.focused.row - 1) * this.maxRowItemsCount;
            const recipesKeys = this.getRecipesKeys();
            const recipe = this.recipes[recipesKeys[focused]];
            
            // Craft
            if (recipe.canCraft(this.storage)) {
                recipe.onCraft(this.game, this.storage, this.position, recipesKeys[focused]);
                this.ui.enabled = false;
                this.sound.play(this.game, "crafting");
                this.ui.focused.slot = 1;
                this.ui.focused.row = 10;
            } else {
                // Can't craft
                this.sound.play(this.game, "error");
                this.ui.spawnMessageText("Недостатачно ресурсов");
            }

        }
    }

    renderUI() {
        super.renderUI();

        const recipesKeys = this.getRecipesKeys();

        this.actionButtonAssetName = (this.ui.focused.row == 0 && this.ui.focused.slot == 0) ? "close" : "craft";
        this.tipText = this.actionButtonAssetName == "close" ? "закрыть" : "изготовить";

        this.ui.updateTemplate([
            1,
            clamp(recipesKeys.length, 0, this.maxRowItemsCount),
            recipesKeys.length > this.maxRowItemsCount ? recipesKeys.length - this.maxRowItemsCount : 0,
        ]);
        if (!this.ui.enabled) return;

        this.renderRecipesUI(recipesKeys);
        this.renderDescriptionUI(recipesKeys);
    }

    renderRecipesUI(recipes: string[]) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        
        recipes.map((recipeName, index)=> {

            // Render recipe
            const pos = new Vector2(
                (index % this.maxRowItemsCount) * size - size * 2,
                -size + Math.floor(index / this.maxRowItemsCount) * size
            ).add(windowCenter);

            this.ui.renderFocusable(
                pos,
                // Row
                Math.floor(index / this.maxRowItemsCount) + 1,
                // Slot
                index % this.maxRowItemsCount,
                ()=> {
                
                // Background
                this.game.renderer.drawRect({
                    position: pos,
                    color: Color.STONE_LAYER_COLOR,
                    layer: "ui",
                    width: .5,
                    height: .5,
                });
                
                // Render recipe icon
                const renderIcon = this.recipes[recipeName].icon;
                if (renderIcon)
                    renderIcon(
                        this.game,
                        pos,
                        this.recipes[recipeName].canCraft(this.storage) ? 1 : .5
                    );
                else
                    this.game.renderer.drawSprite({
                        texture: asImage(this.game.getAssetByName(recipeName)),
                        position: pos,
                        opacity: this.recipes[recipeName].canCraft(this.storage) ? 1 : .5,
                        layer: "ui"
                    })

            }, 1, 1, true);

        });

    }
    renderDescriptionUI(recipesKeys: string[]) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

        // Get recipe by focused slot
        const selectedSlot = this.ui.ghostFocused.slot + (this.ui.ghostFocused.row - 1) * this.maxRowItemsCount;
        const currentRecipe = this.recipes[recipesKeys[selectedSlot]];
        const recipeDescription = ObjectNames[recipesKeys[selectedSlot]];

        if (!recipeDescription) return;

        const isInStockCount = (slotName: string): number => safeSlot(this.storage.contains.slots[slotName]).count;
        
        this.ui.renderDescriptionUI({
            title: recipeDescription.name,
            titleColor: currentRecipe.canCraft(this.storage) ? "#fff" : Color.RED,
            specials: ["", ""],
            description: recipeDescription.desc,
            renderIcon: (pos)=> {
                const renderIcon = currentRecipe.icon
                if (renderIcon)
                    renderIcon(this.game, pos, 1);   
                else
                    this.game.renderer.drawSprite({
                        texture: asImage(this.game.getAssetByName(recipesKeys[selectedSlot])),
                        position: pos,
                        layer: "ui"
                    })
            }
        });

        //
        const selectedRecipeKeys = Object.keys(currentRecipe.recipe());
        selectedRecipeKeys.map((slotName, index)=> {
            const pos = new Vector2(index * Config.SPRITE_SIZE - size, size*2 + 5).add(windowCenter);
            const count = isInStockCount(slotName);
            const needCount = currentRecipe.recipe()[slotName].count;
            
            // Sprite
            this.game.renderer.drawSprite({
                texture: asImage(this.game.getAssetByName(slotName)),
                position: pos,
                layer: "ui"
            });
            // Count
            this.game.renderer.drawText({
                text: `${ count }/${ needCount }`,
                color: count >= needCount ? "#fff" : Color.RED, 
                position: pos.add(Vector2.all(Config.SPRITE_SIZE * .2)),
                layer: "ui"
            })

            // Plus
            if (index < selectedRecipeKeys.length - 1)
                this.game.renderer.drawText({
                    text: "+",
                    font: "22px Pixel",
                    position: pos.add(new Vector2(size / 2)),
                    layer: "ui"
                })
            
        });

    }

    getRecipesKeys(): string[] {
        return Object.keys(this.recipes).filter(name=> !this.recipes[name].isRemoved())
    }
}

export class Recipe {
    recipe: ()=> Storage["contains"]["slots"]
    _onCraft: ((game: Game)=> void) | undefined
    isRemoved: ()=> boolean
    icon: ((game: Game, pos: Vector2, opacity: number)=> void) | undefined
    
    constructor(props: {
        recipe: Recipe["recipe"]
        onCraft?: Recipe["_onCraft"]
        icon?: Recipe["icon"]
        isRemoved?: Recipe["isRemoved"]
    }) {
        this.recipe = props.recipe;
        this._onCraft = props.onCraft;
        this.icon = props.icon;
        this.isRemoved = props.isRemoved || (()=> false);
    }

    canCraft(storage: Storage): boolean {
        const recipes = Object.keys(this.recipe());
        // let can = false;
        let hasCount = 0;

        for (let i = 0; i < recipes.length; i ++) {
            if (safeSlot(storage.contains.slots[recipes[i]]).count >= safeSlot(this.recipe()[recipes[i]]).count)
                hasCount ++;
        }
        
        return hasCount >= recipes.length;
        // return can;
    }
    onCraft(game: Game, storage: Storage, position: Vector2, name: string) {
        const recipes = Object.keys(this.recipe());

        for (let i = 0; i < recipes.length; i ++) {
            storage.contains.slots[recipes[i]].count -= this.recipe()[recipes[i]].count;
        }

        storage.calculateTotalCount()
        if (this._onCraft)
            this._onCraft(game);
        else {
            game.add(new Items[name](position));
            game.initChildren();
        }
    }
}