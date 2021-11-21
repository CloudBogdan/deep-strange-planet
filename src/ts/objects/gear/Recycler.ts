import { Color, Config } from "../../config";
import { Game, ISpriteProps } from "../../engine";
import { Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, Vector2 } from "../../engine/utils/math";
import { GearNames, RawNames, RecipeNames } from "../../names";
import { MaxToolLevel, Player } from "../entities/Player";
import { Gear, GearLevel, MaxGearLevel } from "./Gear";
import recipes from "./recipes";
import { Storage } from "./Storage";

export class Recycler extends Gear {
    storage: Storage
    recipes: { [key: string]: Recipe }
    
    constructor(level: GearLevel, storage: Storage, props?: ISpriteProps) {
        super("gear-recycler", level, props);

        this.ui.focused.slot = 1;
        this.ui.focused.row = 10;

        this.storage = storage;
        this.recipes = recipes(this);
    }
    
    onInteract(game: Game) {
        super.onInteract(game);

        // Open
        this.ui.enabled = true;
        
        // Close
        if (this.ui.focused.slot == 0 && this.ui.focused.row == 0 && this.ui.enabled) {
            this.ui.enabled = false;
        
            this.ui.focused.slot = 1;
            this.ui.focused.row = 10;

        }

        if (this.ui.enabled && this.ui.focused.slot == 1 && this.ui.focused.row == 10) {
            this.ui.focused.slot = 0;
            this.ui.focused.row = 0;
        }

        // Craft
        if (this.ui.focused.row == 1) {

            const recipesKeys = this.getRecipesKeys();
            const recipe = this.recipes[recipesKeys[this.ui.focused.slot]];

            if (recipe.canCraft(this.storage)) {
                recipe.onCraft(game, this.storage);
                this.ui.enabled = false;
            } else {
                this.ui.spawnMessageText(game, "Недостатачно ресурсов");
            }

        }
    }

    renderUI(game: Game, renderer: Renderer) {
        super.renderUI(game, renderer);

        const recipesKeys = this.getRecipesKeys();

        this.closeText = (this.ui.focused.row == 0 && this.ui.focused.slot == 0) ? "закрыть" : "изготовить";

        this.ui.allowSelectSlots = true;
        this.ui.updateTemplate([
            1,
            recipesKeys.length,
        ]);
        if (!this.ui.enabled) return;

        this.renderRecipesUI(recipesKeys, game, renderer);

        if (this.ui.focused.row != 1) return;
        
        // Get recipe by focused slot
        const currentRecipe = this.recipes[recipesKeys[this.ui.focused.slot]];
        const recipeDescription = RecipeNames[recipesKeys[this.ui.focused.slot]];

        if (!recipeDescription) return;

        const selectedRecipe = this.recipes[recipesKeys[this.ui.focused.slot]].recipe();
        const isInStockCount = (slotName: string)=> this.storage.contains.slots[slotName];
        
        this.ui.renderDescriptionUI({
            title: recipeDescription.name,
            titleColor: currentRecipe.canCraft(this.storage) ? "#fff" : Color.RED,
            specials: [
                "Ресурсы:",
                ...Object.keys(selectedRecipe).map(slotName=> {
                    const count = isInStockCount(slotName);
                    const recipeItem = RawNames[slotName];
                    return `> ${ recipeItem?.name || "ERROR" } ${ count || 0 } из ${ selectedRecipe[slotName] }`
                })
            ],
            description: recipeDescription.desc,
            renderIcon: (pos)=> {
                currentRecipe.icon(game, pos);   
            }
        }, game, renderer);
    }

    renderRecipesUI(recipes: string[], game: Game, renderer: Renderer) {
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        
        const closePosition = new Vector2(size * 1.5 + 20, -size - 20).add(windowCenter);
        this.ui.renderSlot(closePosition, 0, 0, ()=> {

            renderer.drawSprite({
                // texture: asImage(game.getAssetByName("close")),
                texture: asImage(game.getAssetByName("button")),
                position: closePosition,
                width: 2,
                layer: "ui"
            });
            renderer.drawText({
                text: "Закрыть",
                position: closePosition,
                layer: "ui"
            });

        }, 1.75);
        
        recipes.map((recipeName, index)=> {

            // Render recipe
            const pos = new Vector2(index * size - size * 2, 0).add(windowCenter);
            this.ui.renderSlot(pos, 1, index, ()=> {

                // Render recipe icon
                this.recipes[recipeName].icon(game, pos);
                
                // Darken
                if (!this.recipes[recipeName].canCraft(this.storage))
                    renderer.drawRect({
                        position: pos,
                        color: Color.STONE_LAYER_COLOR,
                        layer: "ui",
                        opacity: .5,
                        width: .95,
                        height: .95,
                    });

            });

        });

    }

    getRecipesKeys(): string[] {
        return Object.keys(this.recipes).filter(name=> !this.recipes[name].isRemoved())
    }
}

export class Recipe {
    recipe: ()=> Storage["contains"]["slots"]
    _onCraft: (game: Game)=> void
    isRemoved: ()=> boolean
    icon: (game: Game, pos: Vector2)=> void
    
    constructor(props: {
        recipe: Recipe["recipe"]
        onCraft: Recipe["_onCraft"]
        icon: Recipe["icon"]
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
            if (storage.contains.slots[recipes[i]] >= this.recipe()[recipes[i]])
                hasCount ++;
        }
        
        return hasCount >= recipes.length;
        // return can;
    }
    onCraft(game: Game, storage: Storage) {
        const recipes = Object.keys(this.recipe());

        for (let i = 0; i < recipes.length; i ++) {
            storage.contains.slots[recipes[i]] -= this.recipe()[recipes[i]];
        }

        this._onCraft(game);
    }
}