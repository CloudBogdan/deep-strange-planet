import { Config } from "../config";
import { Game } from "../engine";
import { UI } from "../engine/components/UI";
import { Renderer } from "../engine/Renderer";
import { asImage, Vector2 } from "../engine/utils/math";
import { Player } from "../objects/entities/Player";

type IButton = {
    text: string
}

export function initMenu(game: Game, player: Player) {

    const menuUI = new UI();
    const buttons: IButton[] = [
        { text: "Иследовать" },
        { text: "Заново" },
        { text: "Об игре" }
    ];
    menuUI.updateTemplate(buttons.map(()=> 1));
    
    function init() {
        menuUI.init(game);
        
        // UI actions
        game.gamepad.onKeyDown("menu-ui", "enter", ()=> {

            if (menuUI.focused.row == 0)
                game.paused = false;
            else if (menuUI.focused.row == 1) {
                game.clearAllKeys();
                location.reload();
            }

        });
    }
    function update() {
        menuUI.enabled = game.paused && !player.dead;
    }
    function render(renderer: Renderer) {
        if (menuUI.enabled) {
            const size = Config.SPRITE_SIZE;
            const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2);
        
            renderer.drawRect({
                position: windowCenter,
                width: innerWidth / size,
                height: innerHeight / size,
                color: "rgba(0, 0, 0, .5)",
                layer: "ui"
            })
            renderer.drawSprite({
                texture: asImage(game.getAssetByName("logo")),
                width: 6,
                height: 2,
                position: new Vector2(windowCenter.x, 160),
                layer: "ui"
            })
            
            // About text
            if (menuUI.isFocused(buttons.length - 1, 0)) {
                renderer.drawText({
                    text: [
                        `> Идея: Bogdanov`,
                        `> Худоник: Bogdanov`,
                        `> Программист: Bogdanov`,
                        `> Саунд-дизайнер: Bogdanov`,
                        `> Оператор: Bogdanov`,
                        `> Бариста: Bogdanov`,
                        `> Псих-поддержка: Bogdanov`,
                    ].join("\n"),
                    font: "22px Pixel",
                    position: new Vector2(innerWidth - innerWidth / 4 + 140, innerHeight / 2 - 50),
                    layer: "ui",
                    align: "right"
                });
                renderer.drawText({
                    text: `
                        Deep strange planet - игра в жанре\n
                        приключения, где вы выступайте в роли\n
                        добровольца, который хочет исследовать новую\n
                        и опасную для человечества планету ради науки.\n
                        Предположительно, на ней есть жизнь в виде\n
                        бактерий. Исследуй планету, пробираясь всё\n
                        ниже, вплоть до самого ядра, собирая ценные\n
                        для науки ресурсы, но будьте внимательней,\n
                        следите за своим запасом кислорода,\n
                        уворачивайтесь от обвалов и сталакитов.\n
                        Кто знает, что там ещё может быть`,
                    font: "18px Pixel",
                    lineHeight: 10,
                    position: new Vector2(innerWidth / 4 - 480, innerHeight / 2 - 50),
                    layer: "ui",
                    align: "left"
                });
            }
            
            // Play button
            const buttonsPos = new Vector2().add(windowCenter);

            for (let i = 0; i < buttons.length; i++) {
                const pos = new Vector2(0, i * size).add(buttonsPos);
                menuUI.renderFocusable(pos, i, 0, ()=> {
        
                    renderer.drawText({
                        text: buttons[i].text,
                        font: `${ i == 0 ? 26 : 22 }px Pixel`,
                        position: pos,
                        layer: "ui"
                    })
                    
                }, 2.5, .8);
            }
            
        }
    }
    
    return { init, update, render };

}