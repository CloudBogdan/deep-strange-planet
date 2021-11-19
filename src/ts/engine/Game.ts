import { Point } from "./components/Point";
import { Asset, AssetType } from "./Asset";
import { Container } from "./components/Container";
import { Gamepad } from "./events/Gamepad";
import { Physics } from "./Physics";
import { Renderer } from "./Renderer";
import { Vector2 } from "./utils/math";
import { Generator } from "./Generator";

export type Clock = {
    elapsed: number
};
type Camera = {
    position: Vector2
    follow: (pos: Vector2, lerp?: number)=> void
}

export class Game extends Container {
    gamepad: Gamepad
    camera: Camera
    
    assets: Asset[]

    clock: Clock
    initListeners: (()=> void)[]
    updateListeners: ((clock: Clock)=> void)[]
    renderListeners: ((renderer: Renderer)=> void)[]
    
    renderer: Renderer
    physics: Physics
    generator: Generator
    
    constructor() {
        super();

        this.gamepad = new Gamepad();
        this.camera = {
            position: Vector2.zero(),
            follow(pos: Vector2, lerp?: number) {
                if (lerp)
                    this.position.lerp(pos, lerp);
                else
                    this.position.copy(pos);
            }
        };
        
        this.assets = [];
        
        this.clock = {
            elapsed: 0
        };
        this.initListeners = [];
        this.updateListeners = [];
        this.renderListeners = [];
        
        this.renderer = new Renderer(this);
        this.physics = new Physics(this);
        this.generator = new Generator(this);

    }

    loadAsset(name: string, src: Asset["src"], type?: AssetType) {
        this.assets.push(new Asset(name, src));
    }
    getAssetByName(name: string): Asset | null | undefined {
        return this.assets.find(asset=> asset.name == name);
    }
    
    removeChildById(id: Point["id"]) {
        super.removeChildById(id);
        // this.renderer.app.stage.removeChildAt(this.renderer.app.stage.children.findIndex(child=> compareNames((child as any).id, id)));
        // this.renderer.app.stage.children.find(child=> compareNames((child as any).id, id)).visible = false;
    }

    initChildren() {
        // this.gamepad.onAnyKeyDownListeners = [];
        // this.gamepad.onKeyDownListeners = [];
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

    init() {

        // Init
        this.initListeners.map(listener=> listener());
        this.initChildren();
        
        const loop = ()=> {
            requestAnimationFrame(loop);
            this.renderer.render();
            this.clock.elapsed ++;
            
            // Update
            this.physics.update();
            this.callChildren("update", this);
            this.updateListeners.map(listener=> listener(this.clock));
            
            this.callChildren("render", this, this.renderer);
            this.renderListeners.map(listener=> listener(this.renderer));

            this.renderer.renderParticles(this);
            
        }
        loop();

        // Canvas update
        window.addEventListener("resize", ()=> {
            this.renderer.updateAspect();
        });
        
    }
}