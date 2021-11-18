import { Config } from "../../config";
import { Game, ISpriteProps } from "../../engine";
import { Button } from "../../engine/components/UI";
import { Renderer } from "../../engine/Renderer";
import { asImage, Vector2 } from "../../engine/utils/math";
import { GearNames, RawNames, RecipeNames } from "../../names";
import { Player } from "../entities/Player";
import { Gear, Level } from "./Gear";
import { Storage } from "./Storage";

export class Recycler extends Gear {
    createButton: Button

    storage: Storage
    recipes: { [key: string]: Recipe }
    
    constructor(level: Level, storage: Storage, props?: ISpriteProps) {
        super("recycler", level, props);

        this.createButton = new Button(2, 1, "ui", "button", false);

        this.storage = storage;
        this.recipes = {
            "storage-level-up": new Recipe(
                { "raw-cidium": 3 },
                ()=> {
                    console.log("Crafted");
                }
            )
        };
    }
    
    onInteract(game: Game, player: Player) {
        super.onInteract(game, player);

        this.ui.enabled = !this.ui.enabled;

        console.log(this.storage);
        // if (this.ui.focused.slot == 0 && this.ui.focused.row == 1) {
        //     this.ui.enabled = false;
        //     this.ui.focused.slot = 0;
        //     this.ui.focused.row = 0;
        //     this.createButton.click();
        // }
    }

    renderUI(game: Game, renderer: Renderer) {
        super.renderUI(game, renderer);

        const recipes = Object.keys(this.recipes).filter(r=> this.recipes[r].canCraft(this.storage));

        this.closeText = (this.ui.focused.row == 0 && this.ui.focused.slot == 0) ? "закрыть" : "изготовить";

        this.ui.allowSelectSlots = true;
        this.ui.updateTemplate([
            1,
            recipes.length,
        ]);
        if (!this.ui.enabled) return;

        this.renderRecipesUI(recipes, game, renderer);

        if (this.ui.focused.row != 1) return;
        
        // Get recipe by focused slot
        const recipe = RecipeNames[recipes[this.ui.focused.slot]];

        if (!recipe) return;

        const selectedRecipe = this.recipes[recipes[this.ui.focused.slot]].recipe;
        
        this.ui.renderDescriptionUI({
            title: recipe.name,
            specials: [
                "Ресурсы:",
                ...Object.keys(selectedRecipe).map(s=> `> ${ RawNames[s].name } x${ selectedRecipe[s] }`)
            ],
            description: recipe.desc,
            renderIcon: (pos)=> {
                renderer.drawSprite({
                    texture: asImage(game.getAssetByName("storage-1")),
                    position: pos,
                    width: 2,
                    height: 2,
                    scale: Vector2.all(.8),
                    layer: "ui"
                });
                renderer.drawText({
                    text: "2ур.",
                    position: pos.add(Vector2.all(Config.SPRITE_SIZE * .4)),
                    layer: "ui"
                });
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
        
        recipes.map((recipe, index)=> {

            // Render recipe
            const pos = new Vector2(index * size - size * 2, 0).add(windowCenter);
            this.ui.renderSlot(pos, 1, index, ()=> {

                if (recipe == "storage-level-up") {
                    renderer.drawSprite({
                        texture: asImage(game.getAssetByName("storage-1")),
                        position: pos,
                        width: 2,
                        height: 2,
                        scale: Vector2.all(.7),
                        layer: "ui"
                    });
                    renderer.drawText({
                        text: "2ур.",
                        position: pos.add(Vector2.all(size * .3)),
                        layer: "ui"
                    });
                }

            });

        });

        /*
        const createButtonPos = new Vector2(size * 1.5, 0).add(windowCenter);
        this.ui.renderSlot(createButtonPos, 1, 0, ()=> {
            
            // Render button
            this.createButton.position = createButtonPos;
            this.createButton.render(game);

            // Render button text
            renderer.drawText({
                text: "Изготовить",
                position: createButtonPos.add(new Vector2(0, -5)),
                layer: "ui"
            });
            
        }, 2, 1)
        */

    }
}

class Recipe {
    recipe: Storage["contains"]["slots"]
    onCraft: ()=> void
    
    constructor(recipe: Recipe["recipe"], onCraft: Recipe["onCraft"]) {
        this.recipe = recipe;
        this.onCraft = onCraft;
    }

    canCraft(storage: Storage): boolean {
        const recipes = Object.keys(this.recipe);
        let can = false;

        // console.log(storage);
        for (let i = 0; i < recipes.length; i ++) {
            can = storage.contains.slots[recipes[i]] >= this.recipe[recipes[i]];
        }
        
        return can;
    }
}