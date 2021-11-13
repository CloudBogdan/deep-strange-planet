import { Color, Config } from "../config";
import { Particle } from "./components/Particles";
import { Game } from "./Game";
import { safeValue, Vector2 } from "./utils/math";

type RendererLayer = {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    update: boolean
}

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
            "ui": this.createLayer("ui"),
            "debug": this.createLayer("debug", false),
        };
        
        document.body.style.background = Color.GROUND_COLOR;
    }
    
    // Create new layer
    createLayer(name: string, update?: boolean): RendererLayer {
        const canvas = document.createElement("canvas");

        canvas.setAttribute("id", name);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        const context = canvas.getContext("2d")!;
        context.imageSmoothingEnabled = false;

        return { canvas, context, update: update == undefined ? true : update };
    }

    render() {
        // > Clear layers
        Object.keys(this.layers).map(key=> {
            if (this.layers[key].update)
                this.layers[key].context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        });
    }
    // > Render particles
    renderParticles(game: Game) {
        this.particles.map(part=> {
            
            part.update(this.game);

            part.render(this, part);
        });
        this.particles.map((part, index)=> {

            if (part.size <= 0) 
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

    // Get layer context
    getContext(layer?: string): Renderer["layers"][0]["context"] {
        return this.layers[layer || "game"].context;
    }
    startTransform(layer?: string, pos?: Vector2, rotation?: number, scale?: Vector2, opacity?: number) {
        const context = this.layers[layer || "game"].context;

        const p = pos || Vector2.zero();
        
        context.save();
        context.transform(
            scale?.x || 1, 0, 0, scale?.y || 1,
            p.x - this.game.camera.position.x + window.innerWidth / 2,
            p.y - this.game.camera.position.y + window.innerHeight / 2
        );
        context.rotate(rotation || 0);

        const op = safeValue(opacity, 1);
        context.globalAlpha = op > 0 ? op : 0;
    }
    endTransform(layer?: string) {
        this.layers[layer || "game"].context.restore();
    }
    
    // Draw primitives
    drawRect(
        color: string,
        width?: number, height?: number,
        pos?: Vector2, rotation?: number,
        opacity?: number, layer?: string
    ) {
        const w = safeValue(width, 1) * Config.SPRITE_SIZE;
        const h = safeValue(height, 1) * Config.SPRITE_SIZE;

        if (!this.inCameraViewport(safeValue(pos, Vector2.zero()), w, h)) return;

        this.startTransform(layer, pos, rotation, Vector2.all(), opacity);

        this.getContext(layer).fillStyle = color;
        this.getContext(layer).fillRect(-w / 2, -h / 2, w, h);

        this.endTransform(layer);
    }
    drawLine(
        color: string, width: number,
        points: [Vector2, Vector2],
        opacity?: number, layer?: string
    ) { 
        const context = this.getContext(layer);
        context.save();

        context.globalAlpha = safeValue(opacity, 1);
        
        context.lineWidth = width;
        context.strokeStyle = color;

        const w = window.innerWidth / 2;
        const h = window.innerHeight / 2;
        
        context.moveTo(points[0].x - this.game.camera.position.x + w, points[0].y - this.game.camera.position.y + h);
        context.lineTo(points[1].x - this.game.camera.position.x + w, points[1].y - this.game.camera.position.y + h);
        
        context.stroke();
        context.beginPath();
        context.restore();
    }
    drawText(
        text: string, color?: string, font?: string,
        pos?: Vector2, rotation?: number,
        scale?: Vector2,
        opacity?: number, layer?: string
    ) { 
        const context = this.getContext(layer);
        
        this.startTransform(layer, pos, rotation, scale, opacity);

        function renderText(text: string, pos: Vector2) {
            context.strokeText(text, pos.x, pos.y);
            context.fillText(text, pos.x, pos.y);
        }
        
        context.strokeStyle = Color.GROUND_COLOR;
        context.lineWidth = 8;
        context.miterLimit = 8;
        context.lineJoin = "round";
        
        context.fillStyle = color || "#ff";
        context.font = font || "18px Pixel";
        context.textAlign = "center";
        context.textBaseline = "middle"
        if (text.indexOf("\n") >= 0) {
            for (let i = 0; i < text.split("\n").length; i ++)
                renderText(text.split("\n")[i], new Vector2(0, i * (parseInt(context.font.split(" ")[0]))));
        } else
            renderText(text, Vector2.zero());

        // context.s();
        
        this.endTransform(layer);
    }
    
    drawSprite(
        texture: HTMLImageElement,
        width?: number, height?: number,
        pos?: Vector2, rotation?: number, offset?: Vector2,
        layer?: string,
        scale?: Vector2, flip?: { x: boolean, y: boolean }, opacity?: number, repeat?: number
    ) {
        const w = safeValue(width, 1) * Config.SPRITE_SIZE;
        const h = safeValue(height, 1) * Config.SPRITE_SIZE;
        
        const p = safeValue(pos, Vector2.zero());
        const o = safeValue(offset, Vector2.zero());
        
        if (!this.inCameraViewport(p, w, h, repeat) || !texture) return;
        
        const f = flip || { x: false, y: false };
        const s = safeValue(scale, Vector2.all());
        const context = this.getContext(layer);
        
        this.startTransform(
            layer,
            p.add(o),
            rotation,
            new Vector2(s.x * (f.x ? -1 : 1), s.y * (f.y ? -1 : 1)),
            opacity
        );
        
        // Draw sprite without repeat
        if (!repeat)
            context.drawImage(texture, -w / 2, -h / 2, w, h);
        else
            // And... With repeat?
            for (let i = 0; i < repeat; i ++)
                context.drawImage(texture, -w / 2 + i * w, -h / 2, w, h);

        this.endTransform(layer);
    }

    updateAspect() {
        Object.keys(this.layers).map(key=> {

            this.layers[key].canvas.width = window.innerWidth;
            this.layers[key].canvas.height = window.innerHeight;
            this.layers[key].context.imageSmoothingEnabled = false;

        })
    }
}