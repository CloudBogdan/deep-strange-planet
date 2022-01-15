import { ISpriteProps } from ".";
import { Color, Config, GeneratorConfig } from "../config";
import { Particle } from "./components/Particles";
import { Game } from "./Game";
import { safeValue, Vector2 } from "./utils/math";

type RendererLayer = {
    render: boolean
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
    align?: CanvasTextAlign
    position?: Vector2
    rotation?: number
    scale?: Vector2
    opacity?: number
    layer?: string
    stroke?: StrokeSettings
    lineHeight?: number
};
export type DrawSpriteProps = {
    texture?: HTMLImageElement | undefined,
    width?: number, height?: number,
    position?: Vector2, rotation?: number, offset?: Vector2, origin?: Vector2
    layer?: string,
    scale?: Vector2, flip?: { x: boolean, y: boolean },
    opacity?: number, repeat?: Vector2,
    frame?: Vector2, framed?: boolean
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
            "player": this.createLayer("player"),
            "plants": this.createLayer("plants"),
            "game-ui": this.createLayer("game-ui"),
            "particles": this.createLayer("particles"),
            "ui": this.createLayer("ui", true, 0),
            "upper-ui": this.createLayer("upper-ui", true, 0),
            "debug": this.createLayer("debug", false),
        };
        
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
        // new ImageData()

        return {
            render: true,
            canvas,
            context,
            update: safeValue(update, true),
            cameraFactor: safeValue(cameraFactor, 1)
        };
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
    renderParticles() {
        this.particles.map(part=> {
            
            part.update(this.game);

            part.render(this, part);
        });
        this.particles.map((part, index)=> {

            if (part.size <= 0 || part.opacity <= 0) 
                this.particles.splice(index, 1);
        });
    }
    inCameraViewport(pos: Vector2, width?: number, height?: number): boolean {
        const cam = this.game.camera.position;
        const 
            w = innerWidth + 150,
            h = innerHeight + 150;
        width = safeValue(width, Config.SPRITE_SIZE);
        height = safeValue(height, Config.SPRITE_SIZE);
        return (
            pos.x + width / 2 > cam.x - w / 2 &&
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
    startTransform(layer?: string, pos?: Vector2, rotation?: number, scale?: Vector2, opacity?: number,origin?: Vector2) {
        const l = this.layers[layer || "game"];

        const p = pos || Vector2.zero();
        const o = origin || Vector2.zero();
        
        l.context.save();

        l.context.translate(innerWidth / 2 * l.cameraFactor, innerHeight / 2 * l.cameraFactor)
        l.context.rotate(this.game.camera.rotation * l.cameraFactor);

        l.context.transform(
            scale?.x || 1, 0, 0, scale?.y || 1,
            p.x - this.getCameraPosition(layer).x + o.x,
            p.y - this.getCameraPosition(layer).y + o.y
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
        if (!this.layers[props.layer || "game"].render) return;
        
        const w = Math.floor(safeValue(props.width, 1) * Config.SPRITE_SIZE);
        const h = Math.floor(safeValue(props.height, 1) * Config.SPRITE_SIZE);

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
        if (!this.layers[props.layer || "game"].render) return;
        
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
    drawWeb(props: Omit<DrawLineProps, "points"> & { points: Vector2[] }) { 
        if (!this.layers[props.layer || "game"].render) return;
        
        const context = this.getContext(props.layer);
        context.save();

        context.globalAlpha = safeValue(props.opacity, 1);
        
        context.lineWidth = props.width;
        context.strokeStyle = props.color || "#fff";

        const w = window.innerWidth / 2;
        const h = window.innerHeight / 2;
        
        context.moveTo(props.points[0].x - this.getCameraPosition(props.layer).x + w, props.points[0].y - this.getCameraPosition(props.layer).y + h);
        for (let i = 1; i < props.points.length-1; i ++)
            context.lineTo(props.points[i].x - this.getCameraPosition(props.layer).x + w, props.points[i].y - this.getCameraPosition(props.layer).y + h);
        context.lineTo(props.points[props.points.length-1].x - this.getCameraPosition(props.layer).x + w, props.points[props.points.length-1].y - this.getCameraPosition(props.layer).y + h);
        
        context.stroke();
        context.beginPath();
        context.restore();
    }
    drawText(props: DrawTextProps) { 
        if (!this.layers[props.layer || "game"].render) return;
        
        const context = this.getContext(props.layer);
        
        this.startTransform(props.layer, props.position, props.rotation, props.scale, props.opacity);

        const stroke = safeValue(props.stroke, { width: 8, color: Color.STONE_LAYER_COLOR });

        function renderText(text: string, pos: Vector2) {
            context.strokeText(text, pos.x, pos.y);
            context.fillText(text, pos.x, pos.y);
        }
        
        context.strokeStyle = stroke.color;
        context.lineWidth = stroke.width;
        context.miterLimit = stroke.width;
        context.lineJoin = "round";
        
        context.fillStyle = props.color || "#fff";
        context.font = props.font || "18px Pixel";
        context.textAlign = props.align || "center";
        context.textBaseline = "middle"

        if ((props as any).centered != undefined) {
            console.warn("Text centered!");
        }

        const text = props.text || "";
        if (text.indexOf("\n") >= 0) {
            for (let i = 0; i < text.split("\n").length; i ++)
                renderText(text.split("\n")[i], new Vector2(0, i * safeValue(props.lineHeight, parseInt(context.font.split(" ")[0]))));
        } else
            renderText(text, Vector2.zero());

        // context.s();
        
        this.endTransform(props.layer);
    }
    
    drawSprite(props: DrawSpriteProps) {
        if (!this.layers[props.layer || "game"].render) return;
        
        try {
            if (!props.texture) return;

            const size = Config.SPRITE_SIZE;

            const w = safeValue(props.width, 1) * size;
            const h = safeValue(props.height, 1) * size;
            const frameW = safeValue(props.width, 1) * Config.SPRITE_PIXEL_SIZE;
            const frameH = safeValue(props.height, 1) * Config.SPRITE_PIXEL_SIZE;
            const framePos = props.frame || Vector2.zero();
            
            const p = props.position || Vector2.zero();
            const o = props.offset || Vector2.zero();
            const or = props.origin || Vector2.zero();
            
            if ((!this.inCameraViewport(p, w*safeValue(props.repeat?.x, 1), h*safeValue(props.repeat?.y, 1))) && this.layers[props.layer || "game"].cameraFactor == 1) return;
            
            const f = safeValue(props.flip, { x: false, y: false });
            const s = props.scale || Vector2.all();
            const context = this.getContext(props.layer);
            
            this.startTransform(
                props.layer,
                p.add(o),
                props.rotation,
                new Vector2(s.x * (f.x ? -1 : 1), s.y * (f.y ? -1 : 1)),
                props.opacity,
                or
            );
            
            // Draw sprite without repeat
            if (!props.repeat || Vector2.compare(props.repeat || Vector2.all(), Vector2.all())) {

                if (safeValue(props.framed, true))
                    context.drawImage(
                        props.texture,
                        // Clip rect
                        framePos.x * frameW, framePos.y * frameH,
                        frameW, frameH,
                        
                        // Transform
                        -w / 2 - or.x, -h / 2 - or.y,
                        w, h
                    );
                else
                    context.drawImage(
                        props.texture,
                        // Transform
                        -w / 2 - or.x, -h / 2 - or.y,
                        w, h
                    );
                
            }
            else if (props.repeat)
                // And... With repeat?
                for (let repeatY = 0; repeatY < props.repeat.y; repeatY ++)
                    for (let repeatX = 0; repeatX < props.repeat.x; repeatX ++)
                        context.drawImage(
                            props.texture,
                            -w / 2 + repeatX * w,
                            -h / 2 + repeatY * h,
                            w, h
                        );

            this.endTransform(props.layer);
        } catch(err) {}
    }

    updateAspect() {
        Object.keys(this.layers).map(key=> {

            this.layers[key].canvas.width = window.innerWidth;
            this.layers[key].canvas.height = window.innerHeight;
            this.layers[key].context.imageSmoothingEnabled = false;

        })
    }
}