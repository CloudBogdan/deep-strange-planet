import { standardName } from "./utils/math";

export type AssetType = "image" | "audio"; 

export class Asset {
    name: string
    src: string | string[]
    type: AssetType
    element: HTMLAudioElement | HTMLImageElement[]
    // element: PIXI.Texture | HTMLAudioElement | PIXI.Texture[]
    
    constructor(name: string, src: string | string[], type?: AssetType) {
        this.name = standardName(name);
        this.src = src;
        this.type = type || "image";
        this.element = [];

        if (this.type == "image") {
            this.element = (this.src as string[]).map(s=> {
                const i = new Image();
                i.src = s;
                return i;
            });
            // this.element = (this.src as string[]).map(s=> PIXI.Texture.from(s));
        }
        else if (this.type == "audio" && typeof this.src == "string")
            this.element = new Audio(this.src);
    }
}