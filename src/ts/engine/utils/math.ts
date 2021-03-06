import { Config } from "../../config";
import { Storage } from "../../objects/gear/Storage";
import { Axes, Direction } from "../../types";
import { Asset, AssetType } from "../Asset";
import { simplex2 } from "./noise";

export class Vector2 {
    x: number
    y: number
    
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    set(x?: number, y?: number): Vector2 {
        this.x = x || 0;
        this.y = y || 0;
        
        return this;
    }
    copy(vec: Vector2): Vector2 {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }
    normalize(): Vector2 {
        const v = new Vector2(this.x, this.y);

        const a = Math.sqrt(v.x ** 2 + v.y ** 2);
        v.x /= a || 1;
        v.y /= a || 1;

        return v;
    }
    distance(vec: Vector2): number {
        return Math.sqrt((this.x - vec.x) ** 2 + (this.y - vec.y) ** 2);
    }
    expand(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    apply(func: (v: number)=> number) {
        return new Vector2(func(this.x), func(this.y));
    }

    add(vec: Vector2): Vector2 {
        return new Vector2(this.x + vec.x, this.y + vec.y);
    }
    sub(vec: Vector2): Vector2 {
        return new Vector2(this.x - vec.x, this.y - vec.y);
    }
    mul(value: number): Vector2 {
        return new Vector2(this.x * value, this.y * value);
    }
    div(value: number): Vector2 {
        return new Vector2(this.x / value, this.y / value);
    }

    lerp(to: Vector2, time: number): Vector2 {
        this.x = this.x + (to.x - this.x) * time;
        this.y = this.y + (to.y - this.y) * time;
        
        return this;
    }
    angle(): number {

        if (this.x > 0 && this.y > 0) return Math.PI / 2 - Math.atan(this.x / this.y);
        if (this.x < 0 && this.y > 0) return Math.PI / 2 - Math.atan(this.x / this.y);
        if (this.x < 0 && this.y < 0) return Math.PI + Math.atan(this.y / this.x);
        if (this.x > 0 && this.y < 0) return Math.PI * 3 / 2 + Math.abs(Math.atan(this.x / this.y));

        return 0;

    }
    clamp(xMin: number, xMax: number, yMin: number, yMax: number): Vector2 {
        return new Vector2(clamp(this.x, xMin, xMax), clamp(this.y, yMin, yMax));
    }

    static add(vec1: Vector2, vec2: Vector2): Vector2 {
        return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    }
    static sub(vec1: Vector2, vec2: Vector2): Vector2 {
        return new Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
    }
    
    static zero(): Vector2 {
        return new Vector2();
    }
    static all(value?: number): Vector2 {
        return new Vector2(value || 1, value || 1);
    }
    static compare(vec1: Vector2, vec2: Vector2): boolean {
        return vec1.x == vec2.x && vec1.y == vec2.y;
    }
}

export function assetIsValid(asset: Asset | undefined | null, type: AssetType): boolean {
    return asset != null && asset.type != null && asset.type == type;
}
export function safeValue<T>(value: T | undefined | null, safe: T): T {
    return (value === undefined || value === null) ? safe : value;
}
export function safeSlot(slot: Storage["contains"]["slots"][0] | undefined): Storage["contains"]["slots"][0] {
    return safeValue(slot, { count: 0 });
}
export function asImage(asset: Asset | undefined | null): HTMLImageElement | undefined {
    if (!asset) return;

    if (assetIsValid(asset as any, "image"))
        return ((asset as Asset).element as HTMLImageElement[])[0];
}
export function asAudio(asset: Asset | undefined | null): HTMLAudioElement | undefined {
    if (!asset) return;

    if (assetIsValid(asset as any, "audio"))
        return (asset as Asset).element as HTMLAudioElement;
}

export function standardName(name: string): string {
    return name.trim().split(" ").join("-").toLocaleLowerCase();
}
export function compareNames(name1: string, name2: string): boolean {
    return standardName(name1) == standardName(name2);
}
export function buildName(...args: string[]) {
    return [...args].join(" ");
}
export function wrapText(text: string, maxLength: number): { text: string, wrapCount: number } {
    let result: string = "";
    let wrapCount = 0;

    for (let i = 0; i < text.length; i ++) {

        let letter = text[i];
        
        if ((i-1) > 0 && (i-1) % maxLength == 0) {
            if (text[i] != " ")
                result += `-\n`;
            else
                result += `\n`;

            wrapCount ++;
            letter = text[i].trim();
        }
        result += letter;
        
    }
        
    return {
        text: result,
        wrapCount
    };
}
export function inChunkIdToPosition(inChunkId: string): Vector2 {
    const size = Config.SPRITE_SIZE;
    const inChunkPos = inChunkId.split("-").map(p=> +p);

    return new Vector2(
        (inChunkPos[0] + inChunkPos[2] * Config.CHUNK_SIZE) * size,
        (inChunkPos[1] + inChunkPos[3] * Config.CHUNK_SIZE) * size,
    );
}

export function lerp(from: number, to: number, time: number): number {
    return from + (to - from) * time;
}
export function random(from: number, to: number): number {
    return Math.random() * (to - from) + from;
}
export function randomInt(from: number, to: number): number {
    return Math.floor(Math.random() * ((to + 1) - from) + from);
}
export function randomNoise(depends: number, from: number, to: number): number {
    return ((simplex2(depends/4, depends/4) + 1) / 2) * (to - from) + from;
}
export function chance(percent: number): boolean {
    return randomInt(0, 100) <= percent;
}
export function clamp(value: number, min: number, max: number) {
    if (value < min)
        return min;
    else if (value > max)
        return max;
    else
        return value;
}
export function inRange(value: number, from: number, to: number): boolean {
    return value >= from && value <= to;
}