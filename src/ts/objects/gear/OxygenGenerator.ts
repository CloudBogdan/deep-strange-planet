import { Color, Config } from "../../config";
import { ISpriteProps } from "../../engine";
import { clamp, lerp, random, randomInt, Vector2 } from "../../engine/utils/math";
import { Gear } from "./Gear";

export class OxygenGenerator extends Gear {
    startPosition: Vector2
    
    oxygenLevel: number
    batteryLevel: number
    animatedOxygenLevel: number
    animatedBatteryLevel: number
    
    constructor(props?: ISpriteProps) {
        super("gear-oxygen-generator", 1, props);

        this.startPosition = this.position.expand();
        
        this.oxygenLevel = 100;
        this.batteryLevel = 100;
        this.animatedOxygenLevel = 100;
        this.animatedBatteryLevel = 100;

        this.headerOffset.set(0, -Config.SPRITE_SIZE - 20);

    }

    update() {
        super.update();

        this.work();        

        if (this.player) {
            this.player.oxygenHungry = this.oxygenLevel <= 0;
        }

        this.animatedOxygenLevel = lerp(this.animatedOxygenLevel, this.oxygenLevel, .2);
        this.animatedBatteryLevel = lerp(this.animatedBatteryLevel, this.batteryLevel, .2);
    }

    render() {
        super.render();

        if (this.oxygenLevel <= 10 || (this.batteryLevel <= 0 && this.oxygenLevel < 50)) {
            this.position.copy(this.startPosition.add(new Vector2(random(-1, 1), random(-1, 1))))
        } else {
            this.position.lerp(this.startPosition, .3);
        }
        
        if (this.playerIsNear)
            this.renderBars();
    }

    onInteract() {
        super.onInteract();

        this.ui.enabled = !this.ui.enabled;
        // this.oxygenLevel += 5;
        // if (this.oxygenLevel > 100) 
        //     this.oxygenLevel = 100;
    }

    work() {
        // Remove oxygen
        if (this.batteryLevel < 90) {
            if (this.game.tick(this.batteryLevel > 20 ? 220 : (this.batteryLevel <= 0 ? 20 : 60)) && this.oxygenLevel > 0) {
                this.oxygenLevel -= randomInt(1, 3);
                this.oxygenLevel = clamp(this.oxygenLevel, 0, 100);
            }
        } else {
            if (this.game.tick(30)) {
                this.oxygenLevel += randomInt(1, 3);
                this.oxygenLevel = clamp(this.oxygenLevel, 0, 100);
            }
        }
        
        // Remove battery
        if (this.game.tick(300) && this.batteryLevel > 0) {
            this.batteryLevel -= clamp(randomInt(-2, 4), 1, 4);
            this.batteryLevel = clamp(this.batteryLevel, 0, 100);

            // Add oxygen
            if (this.batteryLevel > 20) {
                this.oxygenLevel += randomInt(0, 2);
                this.oxygenLevel = clamp(this.oxygenLevel, 0, 100);
            }
        }
        this.frame = new Vector2(4 - clamp(Math.floor((this.oxygenLevel + 20) / 25), 0, 4));
    }
    
    renderUI() {
        super.renderUI();
        if (!this.ui.enabled) return;

        const size = Config.SPRITE_SIZE;
        const windowCenter = new Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

        // > Names
        this.game.renderer.drawText({
            text: "Кислород",
            position: new Vector2(size*1.3, -size).add(windowCenter),
            layer: "ui",
            align: "left"
        });
        this.game.renderer.drawText({
            text: "Батарея",
            position: new Vector2(size*1.3, 0).add(windowCenter),
            layer: "ui",
            align: "left"
        });

        // > Progresses
        const oxygenProgress = (this.animatedOxygenLevel / 100);
        const batteryProgress = (this.animatedBatteryLevel / 100);
        
        // Oxygen
        this.game.renderer.drawRect({
            width: 2.5 * oxygenProgress,
            height: .3,
            color: Color.BLUE,
            position: new Vector2(-size + (size * 2.5 * oxygenProgress - size*2.5)/2, -size).add(windowCenter),
            layer: "ui"
        });
        // Battery
        this.game.renderer.drawRect({
            width: 2.5 * batteryProgress,
            height: .3,
            color: Color.YELLOW,
            position: new Vector2(-size + (size * 2.5 * batteryProgress - size*2.5)/2).add(windowCenter),
            layer: "ui"
        });

        // > Percents
        // Oxygen
        this.game.renderer.drawText({
            text: `${ this.oxygenLevel }%`,
            position: new Vector2(-size*2.1, -size).add(windowCenter),
            layer: "ui",
            align: "left"
        });
        // Battery
        this.game.renderer.drawText({
            text: `${ this.batteryLevel }%`,
            position: new Vector2(-size*2.1, 0).add(windowCenter),
            layer: "ui",
            align: "left"
        });
    }

    renderBars() {
        
        // Oxygen text
        this.game.renderer.drawText({
            text: `${ this.oxygenLevel }%`,
            position: this.position.add(new Vector2(-80, -65)),
            layer: "particles"
        })
        // Battery text
        this.game.renderer.drawText({
            text: `${ this.batteryLevel }%`,
            position: this.position.add(new Vector2(80, -65)),
            layer: "particles"
        })
        
        // Oxygen level
        this.ui.renderProgressBar({
            progress: this.animatedOxygenLevel / 100,
            position: this.position.add(new Vector2(-80, 0)),
            width: 10,
            height: 80,
            layer: "particles",
            color: Color.BLUE,
            strokeColor: Color.BLUE
        });
        // Battery level
        this.ui.renderProgressBar({
            progress: this.animatedBatteryLevel / 100,
            position: this.position.add(new Vector2(80, 0)),
            width: 10,
            height: 80,
            layer: "particles"
        });
        
    }
}