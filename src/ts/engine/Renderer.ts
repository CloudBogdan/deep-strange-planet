import { Color, Config } from "../config";
import { Particle } from "./components/Particles";
import { Game } from "./Game";
import { Vector2 } from "./utils/math";

type RendererLayer = {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    update: boolean
}

export class Renderer {
    // app: PIXI.Application
    game: Game

    particles: Particle[]

    layers:{ [name: string]: RendererLayer }
    // canvas: HTMLCanvasElement
    // context: CanvasRenderingContext2D
    
    constructor(game: Game) {
        this.game = game;

        this.particles = [];

        this.layers = {
            "bg": this.createLayer("bg"),
            "game": this.createLayer("game"),
            "particles": this.createLayer("particles"),
            "debug": this.createLayer("debug", false),
        };
        
        // this.canvas = document.createElement("canvas");
        // this.canvas.width = game.width;
        // this.canvas.height = game.height;
        // this.canvas.style.background = Color.GROUND_COLOR;
        // document.body.appendChild(this.canvas);
        document.body.style.background = Color.GROUND_COLOR;

        // this.context = this.canvas.getContext("2d");
        // this.context.imageSmoothingEnabled = false;
    }
    
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
        Object.keys(this.layers).map(key=> {
            if (this.layers[key].update)
                this.layers[key].context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        });
    }
    renderParticles(game: Game) {
        // Render particles
        for (let i = 0; i < this.particles.length; i ++) {
            const part = this.particles[i];
            
            part.update(this.game);

            // if (part.custom) {
            //     part.custom.render(game, this);
            // } else
            part.render(this, part);
            // this.drawRect(part.color, part.size * .2, part.size * .2, part.position, part.rotation, "particles");

            if (part.size <= 0)
                this.particles.splice(i, 1);
        }
    }
    checkCameraDistance(pos: Vector2, width: number, height: number): boolean {
        const cam = this.game.camera.position;
        const 
            w = innerWidth + 150,
            h = innerHeight + 150;
        return !(
            pos.x + width / 2 > cam.x - w / 2 &&
            pos.y + height / 2 > cam.y - h / 2 &&
            pos.x - width / 2 < cam.x + w / 2 &&
            pos.y - height / 2 < cam.y + h / 2
        );
    }

    startTransform(layer?: string, pos?: Vector2, rotation?: number, scale?: Vector2) {
        const context = this.layers[layer || "game"].context;

        const p = pos || Vector2.zero();
        
        context.save();
        context.transform(
            scale?.x || 1, 0, 0, scale?.y || 1,
            p.x - this.game.camera.position.x + window.innerWidth / 2,
            p.y - this.game.camera.position.y + window.innerHeight / 2
        );
        context.rotate(rotation || 0);
    }
    endTransform(layer: string) {
        this.layers[layer].context.restore();
    }
    
    // Draw primitives
    drawRect(
        color: string,
        width?: number, height?: number,
        pos?: Vector2, rotation?: number,
        layer?: string
    ) {
        const w = (width || 1) * Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE;
        const h = (height || 1) * Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE;

        if (this.checkCameraDistance(pos || Vector2.zero(), w, h)) return;
        
        const context = this.layers[layer || "game"].context;

        this.startTransform(layer || "game", pos, rotation);


        context.fillStyle = color;
        context.fillRect(-w / 2, -h / 2, w, h);

        this.endTransform(layer || "game");
    }
    drawLine(
        color: string, width: number,
        points: [Vector2, Vector2],
        layer?: string
    ) { 
        const context = this.layers[layer || "game"].context;
        context.save();
        
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
        layer?: string
    ) {
        const l = layer || "game"
        const context = this.layers[l].context;
        
        this.startTransform(l, pos, rotation, scale);

        
        context.fillStyle = color || "#ff";
        context.font = font || "18px Pixel";
        context.textAlign = "center";
        context.textBaseline = "middle"
        if (text.indexOf("\n") >= 0) {
            for (let i = 0; i < text.split("\n").length; i ++)
                context.fillText(text.split("\n")[i], 0, i * (parseInt(context.font.split(" ")[0])));
        } else
            context.fillText(text, 0, 0);
        
        this.endTransform(l);
    }
    
    drawSprite(
        texture: HTMLImageElement,
        width?: number, height?: number,
        pos?: Vector2, rotation?: number, offset?: Vector2,
        layer?: string,
        scale?: Vector2, flip?: { x: boolean, y: boolean }, opacity?: number, repeat?: number
    ) {
        const w = (width || 1) * Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE;
        const h = (height || 1) * Config.SPRITE_PIXEL_SIZE * Config.SPRITE_SCALE;
        
        const p = pos || Vector2.zero();
        const o = offset || Vector2.zero();
        
        if (this.checkCameraDistance(p, w * ((repeat || 1) + 4), h) || !texture) return;
        
        const f = flip || { x: false, y: false };
        const s = scale ? scale : Vector2.all();
        const context = this.layers[layer || "game"].context;
        
        this.startTransform(
            layer || "game",
            p.add(o),
            rotation,
            new Vector2(s.x * (f.x ? -1 : 1), s.y * (f.y ? -1 : 1))
        );
        
        context.globalAlpha = (opacity === undefined ? 1 : opacity);
        
        if (!repeat)
            context.drawImage(texture, -w / 2, -h / 2, w, h);
        else
            for (let i = 0; i < repeat; i ++)
                context.drawImage(texture, -w / 2 + i * w, -h / 2, w, h);

        this.endTransform(layer || "game");
    }

    updateAspect() {
        Object.keys(this.layers).map(key=> {

            this.layers[key].canvas.width = window.innerWidth;
            this.layers[key].canvas.height = window.innerHeight;
            this.layers[key].context.imageSmoothingEnabled = false;

        })
        // this.app.view.width = window.innerWidth;
        // this.app.view.height = window.innerHeight;
    }
}