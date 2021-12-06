import { Point } from "./components/Point";
import { Asset, AssetType } from "./Asset";
import { Container } from "./components/Container";
import { Gamepad } from "./events/Gamepad";
import { Physics } from "./Physics";
import { Renderer } from "./Renderer";
import { random, Vector2 } from "./utils/math";
import { Generator } from "./Generator";
import { Sound } from "./components/Sound";
import messages from "../messages";

export type Clock = {
    elapsed: number
    fps: number
    delta: number
};
type Camera = {
    position: Vector2
    rotation: number
    offset: Vector2
    startShakeElapsed: number
    shaking: boolean
    shakeAmplitude: number
    follow: (pos: Vector2, lerp?: number)=> void
    shake: (amplitude?: number)=> void
}

export class Game extends Container {
    paused: boolean
    gamepad: Gamepad
    camera: Camera
    
    assets: Asset[]
    sounds: Sound[]

    clock: Clock
    initListeners: (()=> void)[]
    updateListeners: ((clock: Clock)=> void)[]
    renderListeners: ((renderer: Renderer)=> void)[]
    
    renderer: Renderer
    physics: Physics
    generator: Generator
    
    constructor() {
        super();

        this.paused = !false;
        this.gamepad = new Gamepad();
        this.camera = {
            position: Vector2.zero(),
            rotation: 0,
            offset: Vector2.zero(),
            startShakeElapsed: 0,
            shaking: false,
            shakeAmplitude: 2,
            follow(pos: Vector2, lerp?: number) {
                if (lerp)
                    this.position.lerp(pos, lerp);
                else
                    this.position.copy(pos);
            },
            shake(amplitude?: number) {
                this.shakeAmplitude = amplitude || 2;
                if (!this.shaking) {
                    this.shaking = true;
                }
            }
        };
        
        this.assets = [];
        this.sounds = [];
        
        this.clock = {
            elapsed: 0,
            fps: 0,
            delta: 0
        };
        this.initListeners = [];
        this.updateListeners = [];
        this.renderListeners = [];
        
        this.renderer = new Renderer(this);
        this.physics = new Physics(this);
        this.generator = new Generator(this);

    }

    saveKey(key: string, value: string) {
        localStorage.setItem(key, value);
    }
    loadKey<T>(key: string, safe: T): T {
        if (localStorage.getItem(key))
            return JSON.parse(localStorage.getItem(key)!);
        else
            return safe;
    }
    clearAllKeys() {
        localStorage.clear();
    }

    loadAsset(name: string, src: Asset["src"], type?: AssetType) {
        this.assets.push(new Asset(name, src, type));
    }
    getAssetByName(name: string): Asset | null | undefined {
        const asset = this.assets.find(asset=> asset.name == name);
        
        if (asset)
            return asset;
        else
            console.error(messages.err.assetLoadError(name));
    }
    
    removeChildById(id: Point["id"], listenerId?: string) {
        this.gamepad.removeListenerById(listenerId || id);
        this.generator.removeListenerById(listenerId || id);
        super.removeChildById(id);
    }

    initChildren() {
        super.initChildren(this);
    }
    
    addInit(listener: Game["initListeners"][0]) {
        this.initListeners.push(listener);
    }
    addUpdate(listener: Game["updateListeners"][0]) {
        this.updateListeners.push(listener);
    }
    addRender(listener: Game["renderListeners"][0]) {
        this.renderListeners.push(listener);
    }

    tick(tick: number): boolean {
        return this.clock.elapsed % tick == 0;
    }
    playSoundAt(position: Vector2, assetName: string, volume?: number) {
        const sound = new Sound();

        sound.play(this, assetName, volume);
        
        this.sounds.push(sound);
    }

    init() {

        // Init
        this.initListeners.map(listener=> listener());
        this.initChildren();

        let lastLoop = 0;
        
        const loop = ()=> {
            requestAnimationFrame(loop);
            this.renderer.render();
            this.clock.elapsed ++;

            // Camera shake
            if (!this.camera.shaking) {
                this.camera.startShakeElapsed = this.clock.elapsed;
                this.camera.offset.lerp(Vector2.zero(), .2);
            } else {
                if ((this.clock.elapsed - this.camera.startShakeElapsed) % 10 == 0)
                    this.camera.shaking = false;
                this.camera.offset.copy(this.camera.offset.add(new Vector2(random(-this.camera.shakeAmplitude, this.camera.shakeAmplitude), random(-this.camera.shakeAmplitude, this.camera.shakeAmplitude))));
            }

            // Update clock
            const thisLoop = Date.now();
            this.clock.delta = (thisLoop - lastLoop) / 1000;
            if (this.tick(30)) {
                this.clock.fps = +(1000 / (thisLoop - lastLoop)).toFixed(1);
            }
            lastLoop = thisLoop;
            
            // Update
            this.physics.update();
            this.callChildren("update");
            this.updateListeners.map(listener=> listener(this.clock));
            
            this.callChildren("render");
            this.renderListeners.map(listener=> listener(this.renderer));

            this.renderer.renderParticles();
            
        }
        loop();

        // Canvas update
        window.addEventListener("resize", ()=> {
            this.renderer.updateAspect();
        });
        
    }
}