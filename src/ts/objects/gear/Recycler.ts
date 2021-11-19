import { Color, Config } from "../../config";
import { Game, ISpriteProps } from "../../engine";
import { Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, Vector2 } from "../../engine/utils/math";
import { GearNames, RawNames, RecipeNames } from "../../names";
import { Player } from "../entities/Player";
import { Gear, Level } from "./Gear";
import { Storage } from "./Storage";

export class Recycler extends Gear {
    storage: Storage
    recipes: { [key: string]: Recipe }
    
    constructor(level: Level, storage: Storage, props?: ISpriteProps) {
        super("gear-recycler", level, props);

        this.ui.focused.slot = 1;
        this.ui.focused.row = 10;

        this.storage = storage;
        this.recipes = {
            "storage-level-up": new Recipe(
                { "raw-cidium": 10, "raw-osmy": 4 },
                ()=> {
                    this.storage.upgrade(1);
                },
                (game, pos)=> {
                    game.renderer.drawSprite({
                        texture: asImage(game.getAssetByName("gear-storage-1")),
                        position: pos,
                        width: 2,
                        height: 2,
                        scale: Vector2.all(.8),
                        layer: "ui"
                    });
                    game.renderer.drawText({
                        text: "2ур.",
                        position: pos.add(Vector2.all(Config.SPRITE_SIZE * .4)),
                        layer: "ui"
                    });
                }
            )
        };
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

            const recipesKeys = Object.keys(this.recipes);
            const recipe = this.recipes[recipesKeys[this.ui.focused.slot]];

            if (recipe.canCraft(this.storage))
                recipe.onCraft();

        }
    }

    renderUI(game: Game, renderer: Renderer) {
        super.renderUI(game, renderer);

        const recipesKeys = Object.keys(this.recipes);

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

        const selectedRecipe = this.recipes[recipesKeys[this.ui.focused.slot]].recipe;
        const isInStockCount = (slotName: string)=> this.storage.contains.slots[slotName];
        
        this.ui.renderDescriptionUI({
            title: recipeDescription.name,
            titleColor: currentRecipe.canCraft(this.storage) ? "#fff" : Color.RED,
            specials: [
                "Ресурсы:",
                ...Object.keys(selectedRecipe).map(slotName=> {
                    const count = isInStockCount(slotName);
                    return `> ${ RawNames[slotName].name } ${ count || 0 } из ${ selectedRecipe[slotName] }`
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

        }, 1.8);
        
        recipes.map((recipeName, index)=> {

            // Render recipe
            const pos = new Vector2(index * size - size * 2, 0).add(windowCenter);
            this.ui.renderSlot(pos, 1, index, ()=> {

                // Render recipe icon
                this.recipes[recipeName].icon(game, pos);
                
                if (!this.recipes[recipeName].canCraft(this.storage))
                    renderer.drawRect({
                        position: pos,
                        color: Color.STONE_LAYER_COLOR,
                        layer: "ui",
                        opacity: .5,
                        width: 1.1,
                        height: 1.1
                    });

            });

        });

    }
}

class Recipe {
    recipe: Storage["contains"]["slots"]
    onCraft: ()=> void
    icon: (game: Game, pos: Vector2)=> void
    
    constructor(recipe: Recipe["recipe"], onCraft: Recipe["onCraft"], icon: Recipe["icon"]) {
        this.recipe = recipe;
        this.onCraft = onCraft;
        this.icon = icon;
    }

    canCraft(storage: Storage): boolean {
        const recipes = Object.keys(this.recipe);
        let can = false;

        for (let i = 0; i < recipes.length; i ++) {
            can = storage.contains.slots[recipes[i]] >= this.recipe[recipes[i]];
        }
        
        return can;
    }
}