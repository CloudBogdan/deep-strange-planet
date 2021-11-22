import { Color, Config, GeneratorConfig } from "../config";
import { Particle } from "./components/Particles";
import { Game } from "./Game";
import { safeValue, Vector2 } from "./utils/math";

type RendererLayer = {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    update: boolean
    cameraFactor: number
}
export type StrokeSettings = { width: number, color: string }
export type DrawRectProps = {
    color?: string
    width?: number
    height?: number
    position?: Vector2
    rotation?: number
    opacity?: number
    stroke?: StrokeSettings
    layer?: string
};
export type DrawLineProps = {
    color?: string
    width: number
    points: [Vector2, Vector2]
    opacity?: number
    layer?: string
};
export type DrawTextProps = {
    text?: string
    color?: string
    font?: string
    centered?: boolean
    position?: Vector2
    rotation?: number
    scale?: Vector2
    opacity?: number
    layer?: string
};

export class Renderer {
    game: Game
    particles: Particle[]
    layers:{ [name: string]: RendererLayer }
    
    constructor(game: Game) {
        this.game = game;

        this.particles = [];

        this.layers = {
            "bg": this.createLayer("bg"),
            "game": this.createLayer("game"),
            "particles": this.createLayer("particles"),
            "ui": this.createLayer("ui", true, 0),
            "debug": this.createLayer("debug", false),
        };
        console.log(this.layers);
        
        document.body.style.background = Color.STONE_LAYER_COLOR;
    }
    
    // Create new layer
    createLayer(name: string, update?: boolean, cameraFactor?: number): RendererLayer {
        const canvas = document.createElement("canvas");

        canvas.setAttribute("id", name);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        const context = canvas.getContext("2d")!;
        context.imageSmoothingEnabled = false;

        return { canvas, context, update: safeValue(update, true), cameraFactor: safeValue(cameraFactor, 1) };
    }

    render() {
        // > Clear layers
        Object.keys(this.layers).map(key=> {
            if (this.layers[key].update)
                this.layers[key].context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        });

        this.changeBGColor();
    }
    // > Change bg color
    changeBGColor() {
        const spriteSize = Config.SPRITE_SIZE;
        const layerBlendHeight = GeneratorConfig.LAYERS_BLEND_HEIGHT;
        
        // Basalt layer color
        if (this.game.camera.position.y > (GeneratorConfig.BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize)
            document.body.style.background = Color.BASALT_LAYER_COLOR;
        // Burnt basalt layer color
        if (this.game.camera.position.y > (GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize)
            document.body.style.background = Color.BURNT_BASALT_LAYER_COLOR;
        // Stone layer color
        else if (this.game.camera.position.y < (GeneratorConfig.BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize)
            document.body.style.background = Color.STONE_LAYER_COLOR;
    }
    // > Render particles
    renderParticles(game: Game) {
        this.particles.map(part=> {
            
            part.update(this.game);

            part.render(this, part);
        });
        this.particles.map((part, index)=> {

            if (part.size <= 0 || part.opacity <= 0) 
                this.particles.splice(index, 1);
        });
    }
    inCameraViewport(pos: Vector2, width?: number, height?: number, repeat?: number): boolean {
        const cam = this.game.camera.position;
        const 
            w = innerWidth + 150,
            h = innerHeight + 150;
        width = safeValue(width, Config.SPRITE_SIZE);
        height = safeValue(height, Config.SPRITE_SIZE);
        return (
            pos.x + width / 2 + (repeat ? repeat * width : 1) > cam.x - w / 2 &&
            pos.y + height / 2 > cam.y - h / 2 &&
            pos.x - width / 2 < cam.x + w / 2 &&
            pos.y - height / 2 < cam.y + h / 2
        );
    }
    getCameraPosition(layer?: string): Vector2 {
        const factor = this.layers[layer || "game"];
        
        return this.game.camera.position.add(this.game.camera.offset).mul(factor.cameraFactor);
    }

    // Get layer context
    getContext(layer?: string): Renderer["layers"][0]["context"] {
        return this.layers[layer || "game"].context;
    }
    startTransform(layer?: string, pos?: Vector2, rotation?: number, scale?: Vector2, opacity?: number) {
        const l = this.layers[layer || "game"];

        const p = pos || Vector2.zero();
        
        l.context.save();
        l.context.transform(
            scale?.x || 1, 0, 0, scale?.y || 1,
            p.x - this.getCameraPosition(layer).x + window.innerWidth / 2 * l.cameraFactor,
            p.y - this.getCameraPosition(layer).y + window.innerHeight / 2 * l.cameraFactor
        );
        l.context.rotate(rotation || 0);

        const op = safeValue(opacity, 1);
        l.context.globalAlpha = op > 0 ? op : 0;
    }
    endTransform(layer?: string) {
        this.layers[layer || "game"].context.restore();
    }
    
    // Draw primitives
    drawRect(props: DrawRectProps) {
        const w = safeValue(props.width, 1) * Config.SPRITE_SIZE;
        const h = safeValue(props.height, 1) * Config.SPRITE_SIZE;

        if (!this.inCameraViewport(safeValue(props.position, Vector2.zero()), w, h) && this.layers[props.layer || "game"].cameraFactor == 1) return;

        this.startTransform(props.layer, props.position, props.rotation, Vector2.all(), props.opacity);

        const context = this.getContext(props.layer);

        context.fillStyle = props.color || "#fff";
        context.fillRect(-w / 2, -h / 2, w, h);
        if (props.stroke) {
            context.lineWidth = props.stroke.width;
            context.strokeStyle = props.stroke.color;
            context.strokeRect(-w / 2, -h / 2, w, h);
        }

        this.endTransform(props.layer);
    }
    drawLine(props: DrawLineProps) { 
        const context = this.getContext(props.layer);
        context.save();

        context.globalAlpha = safeValue(props.opacity, 1);
        
        context.lineWidth = props.width;
        context.strokeStyle = props.color || "#fff";

        const w = window.innerWidth / 2;
        const h = window.innerHeight / 2;
        
        context.moveTo(props.points[0].x - this.getCameraPosition(props.layer).x + w, props.points[0].y - this.getCameraPosition(props.layer).y + h);
        context.lineTo(props.points[1].x - this.getCameraPosition(props.layer).x + w, props.points[1].y - this.getCameraPosition(props.layer).y + h);
        
        context.stroke();
        context.beginPath();
        context.restore();
    }
    drawText(props: DrawTextProps) { 
        const context = this.getContext(props.layer);
        
        this.startTransform(props.layer, props.position, props.rotation, props.scale, props.opacity);

        function renderText(text: string, pos: Vector2) {
            context.strokeText(text, pos.x, pos.y);
            context.fillText(text, pos.x, pos.y);
        }
        
        context.strokeStyle = Color.STONE_LAYER_COLOR;
        context.lineWidth = 8;
        context.miterLimit = 8;
        context.lineJoin = "round";
        
        context.fillStyle = props.color || "#fff";
        context.font = props.font || "18px Pixel";
        if (safeValue(props.centered, true))
            context.textAlign = "center";
        context.textBaseline = "middle"

        const text = props.text || "";
        if (text.indexOf("\n") >= 0) {
            for (let i = 0; i < text.split("\n").length; i ++)
                renderText(text.split("\n")[i], new Vector2(0, i * (parseInt(context.font.split(" ")[0]))));
        } else
            renderText(text, Vector2.zero());

        // context.s();
        
        this.endTransform(props.layer);
    }
    
    drawSprite(props: {
        texture: HTMLImageElement | undefined,
        width?: number, height?: number,
        position?: Vector2, rotation?: number, offset?: Vector2,
        layer?: string,
        scale?: Vector2, flip?: { x: boolean, y: boolean }, opacity?: number, repeat?: number
    }) {
        if (!props.texture) return;

        const w = safeValue(props.width, 1) * Config.SPRITE_SIZE;
        const h = safeValue(props.height, 1) * Config.SPRITE_SIZE;
        
        const p = safeValue(props.position, Vector2.zero());
        const o = safeValue(props.offset, Vector2.zero());
        
        if ((!this.inCameraViewport(p, w, h, props.repeat)) && this.layers[props.layer || "game"].cameraFactor == 1) return;
        
        const f = safeValue(props.flip, { x: false, y: false });
        const s = safeValue(props.scale, Vector2.all());
        const context = this.getContext(props.layer);
        
        this.startTransform(
            props.layer,
            p.add(o),
            props.rotation,
            new Vector2(s.x * (f.x ? -1 : 1), s.y * (f.y ? -1 : 1)),
            props.opacity
        );
        
        // Draw sprite without repeat
        if (!props.repeat)
            context.drawImage(props.texture, -w / 2, -h / 2, w, h);
        else
            // And... With repeat?
            for (let i = 0; i < props.repeat; i ++)
                context.drawImage(props.texture, -w / 2 + i * w, -h / 2, w, h);

        this.endTransform(props.layer);
    }

    updateAspect() {
        Object.keys(this.layers).map(key=> {

            this.layers[key].canvas.width = window.innerWidth;
            this.layers[key].canvas.height = window.innerHeight;
            this.layers[key].context.imageSmoothingEnabled = false;

        })
    }
}