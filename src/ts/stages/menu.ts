import { Color, Config, VERSION } from "../config";
import { Game } from "../engine";
import { UI } from "../engine/components/UI";
import { Renderer } from "../engine/Renderer";
import { asImage, Vector2 } from "../engine/utils/math";
import { Player } from "../objects/entities/Player";

type IButton = {
    text: string
}

export function initMenu(game: Game, player: Player) {

    const ui = new UI();
    const menuUi = new UI();
    const aboutUi = new UI();
    const buttons: IButton[] = [
        { text: "Иследовать" },
        { text: "Заново" },
        { text: "Об игре" }
    ];
    menuUi.updateTemplate(buttons.map(()=> 1));
    
    function init() {
        ui.init(game);
        menuUi.init(game);
        aboutUi.enabled = false;
        aboutUi.init(game);
        
        // UI actions
        game.gamepad.onKeyDown("menu-ui", "enter", ()=> {

            if (!ui.enabled) return;
            
            if (aboutUi.enabled) {
                menuUi.enabled = true;
                aboutUi.enabled = false;
                return;
            }
            
            // Play button
            if (menuUi.focused.row == 0)
                game.paused = false;
            // Retry button
            else if (menuUi.focused.row == 1) {
                game.clearAllKeys();
                location.reload();
            }
            // About button
            else if (menuUi.focused.row == 2) {
                menuUi.enabled = false;
                aboutUi.enabled = true;
            }

        });
    }
    function update() {
        ui.enabled = game.paused && !player.dead;
        menuUi.allowSelectSlots = ui.enabled;
    }
    function render() {
        if (!ui.enabled) return;
        
        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2);

        ui.rect({
            position: windowCenter,
            width: innerWidth / size,
            height: innerHeight / size,
            color: "rgba(0, 0, 0, .5)",
        })
        ui.sprite("logo", {
            width: 6,
            height: 2,
            position: new Vector2(windowCenter.x, 160),
        })
        // Version
        ui.text(`Версия - ${ VERSION }`, {
            font: "16px Pixel",
            position: new Vector2(innerWidth - size / 2, innerHeight - size / 2),
            align: "right"
        });
        
        // Render menu
        if (menuUi.enabled && !aboutUi.enabled)
            renderMenu(size, windowCenter);
        if (aboutUi.enabled)
            renderAbout(size, windowCenter);
    }

    function renderMenu(size: number, windowCenter: Vector2) {        
        // Buttons
        const buttonsPos = new Vector2().add(windowCenter);

        for (let i = 0; i < buttons.length; i++) {
            
            const pos = new Vector2(0, i * size).add(buttonsPos);
            menuUi.renderFocusable(pos, i, 0, ()=> {
    
                menuUi.text(buttons[i].text, {
                    font: `22px Pixel`,
                    position: pos,
                    layer: "ui"
                })
                
            }, 2.5, .8);

        }
    }
    function renderAbout(size: number, windowCenter: Vector2) {

        const aboutText = [
            "Я Богдан, мне 15 лет. Я разрабатываю эту игру в свободное от школы время,",
            "потому что мне это просто нравится. Каждый может привнести что-то в своё в эту игру.",
            "Есть идеи? Отлично! Напиши мне, и мы их обсудим!",
            "Игра была создана для турнира от Сбера на Sber Box.",
            "@ Bogdanov :D",
            "",
            "[OK] - назад",
        ];
        const contactsTexts = [
            "Telegram: @bbogdan_ov",
            "Email: bbogdanov_bog908@mail.ru",
            "Vk: bbog908"
        ];
        
        aboutUi.text("Приветсвую в Deep Strange Planet!", {
            position: new Vector2().add(windowCenter),
            font: "22px Pixel",
            align: "center"
        });
        aboutUi.text(aboutText.join("\n"), {
            position: new Vector2(0, 46).add(windowCenter),
            font: "18px Pixel",
            lineHeight: 26,
            align: "center"
        });

        contactsTexts.map((contact, index)=> {

            aboutUi.text(contact, {
                position: new Vector2(size / 2, index * 26 + size),
                font: "18px Pixel",
                align: "left"
            });
            
        });
        
        /*
        const about1 = [
            `> Идея: Bogdanov`,
            `> Худоник: Bogdanov`,
            `> Программист: Bogdanov`,
            `> Саунд-дизайнер: Bogdanov`,
            `> Оператор: Bogdanov`,
            `> Бариста: Bogdanov`,
            `> Псих-поддержка: Bogdanov`,
        ].join("\n");
        const about2 = `
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
            Кто знает, что там ещё может быть
        `
        */
    }
    
    return { init, update, render };

}