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
    playerWithBattery: boolean
    
    constructor(props?: ISpriteProps) {
        super("gear-oxygen-generator", 1, props);

        this.startPosition = this.position.expand();
        
        if (Config.IS_DEV) {
            this.oxygenLevel = 10;
            this.batteryLevel = 5;
        } else {
            this.oxygenLevel = 100;
            this.batteryLevel = 100;
        }
        this.animatedOxygenLevel = 100;
        this.animatedBatteryLevel = 100;
        this.playerWithBattery = false;
        this.allowActionButton = false;

        this.headerOffset.set(0, -Config.SPRITE_SIZE / 2 - 15);

    }

    init() {
        super.init();
        if (Config.IS_DEV) return;

        this.batteryLevel = this.game.loadKey("generator-batteryLevel", 100);
        this.oxygenLevel = this.game.loadKey("generator-oxygenLevel", 100);
    }
    update() {
        super.update();
        if (this.game.paused) return;
        
        if (this.player) {
            this.player.oxygenHungry = this.oxygenLevel <= 0;
            if (this.oxygenLevel > 0)
                this.player.oxygenHungryStartElapsed = this.game.clock.elapsed;
        }
        this.work();        
        this.checkBattery();

        if (this.oxygenLevel <= 50 || this.batteryLevel <= 10) {
            // Shake
            this.position.copy(this.startPosition.add(new Vector2(random(-1, 1), random(-1, 1))))
        } else {
            this.position.lerp(this.startPosition, .3);
        }

        this.animatedOxygenLevel = lerp(this.animatedOxygenLevel, this.oxygenLevel, .2);
        this.animatedBatteryLevel = lerp(this.animatedBatteryLevel, this.batteryLevel, .2);
    }

    render() {
        super.render();
        
        this.frame = new Vector2(4 - clamp(Math.floor((this.batteryLevel + 20) / 25), 0, 4));
        
        if (this.playerIsNear)
            this.renderBars();
    }

    onInteract() {
        super.onInteract();

        if (!this.playerWithBattery)
            this.ui.enabled = !this.ui.enabled;
        else {
            if (!this.player) return;

            this.player.foldItemsTo("battery", 1, this.position);
            this.updateBatteryLevel(randomInt(50, 65));
            this.updateOxygenLevel(randomInt(10, 14));
        }
    }

    work() {
        // Remove oxygen
        if (this.batteryLevel < 90) {
            if (this.game.tick(this.batteryLevel > 20 ? Config.OXYGEN_GENERATOR_OXYGEN_DEFUSE_TICK : (this.batteryLevel <= 0 ? 20 : 60)) && this.oxygenLevel > 0)
                this.updateOxygenLevel(-randomInt(1, 3));
        } else {
            if (this.game.tick(30))
                this.updateOxygenLevel(randomInt(1, 3));
        }
        
        // Remove battery
        if (this.game.tick(Config.OXYGEN_GENERATOR_BATTERY_DEFUSE_TICK) && this.batteryLevel > 0) {
            this.updateBatteryLevel(-clamp(randomInt(-2, 3), 1, 3));

            // Add oxygen
            if (this.batteryLevel > 20)
                this.updateOxygenLevel(randomInt(0, 8));
        }
    }
    updateBatteryLevel(value: number) {
        this.batteryLevel += value;
        this.batteryLevel = clamp(this.batteryLevel, 0, 100);
        this.saveData();
    }
    updateOxygenLevel(value: number) {
        this.oxygenLevel += value;
        this.oxygenLevel = clamp(this.oxygenLevel, 0, 100);
        this.saveData();
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

    checkBattery() {
        if (!this.playerIsNear || !this.player || !this.player.checkItemInInventory("battery")) {
            this.interactText = "";
            this.playerWithBattery = false;
            return;
        }
        
        this.playerWithBattery = true;
        this.interactText = "Зарядить";

    }

    saveData() {
        this.game.saveKey("generator-oxygenLevel", this.oxygenLevel.toString());
        this.game.saveKey("generator-batteryLevel", this.batteryLevel.toString());
    }
}