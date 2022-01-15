import { Game } from "./Game"
import { Ore } from "../objects/ores/Ore"
import { clamp, inChunkIdToPosition, inRange, Vector2 } from "./utils/math"
import { Point } from "./components/Point";
import { Color, Config } from "../config";
import { perlin2, seed } from "./utils/noise";
import { Block } from "../objects/Block";

let __chunkId = 0;

export type Chunk = {
    group: string
    pos: Vector2
}
type GeneratorSettings = {
    value?: [number, number]
    height: [number, number]
    block: typeof Block | any | null
    divider?: number
    rules?: (x: number, y: number)=> boolean
    // rules?: (noiseX: number, noiseY: number, getValue: (x: number, y: number, div?: number)=> number)=> boolean
}
export function noise(x: number, y: number, sharpness?: number, sharpnessDiv?: number): number {
    const sharp = sharpness ? noise(x * sharpness, y * sharpness) : 0;
    return clamp((perlin2(x, y) + 1) / 2 + sharp / (sharpnessDiv || 2), 0, 1);
}
export class Generator {
    game: Game

    seed: number
    
    chunks: Chunk[]
    destroyedOres: string[]
    modifiedOres: {
        [inChunkId: string]: { [dataKey: string]: any }
    }
    settings: GeneratorSettings[]
    range: Vector2[]

    onWorldChangeListeners: { id: string, pos: Vector2 | null, callback: ()=> void, listenChunks?: boolean }[]
    
    constructor(game: Game) {
        this.game = game;

        this.seed = 0;
        this.changeSeed();

        this.onWorldChangeListeners = [];

        this.chunks = [];
        this.destroyedOres = game.loadKey("destroyedOres", []);
        this.modifiedOres = game.loadKey("modifiedOres", {});
        this.settings = [];
        this.range = [
            new Vector2(1, 0), new Vector2(-1, 0),
            new Vector2(0, 1), new Vector2(0, -1),
            new Vector2(1, 1), new Vector2(-1, -1),
            new Vector2(-1, 1), new Vector2(1, -1),
            new Vector2(1, -1), new Vector2(-1, 1),
            new Vector2(0, 0)
        ];
        
    }

    generateChunksAt(position: Vector2) {
        const mul = 1;
        const pos = this.game.camera.position.div(Config.SPRITE_SIZE * (Config.CHUNK_SIZE * mul)).apply(Math.floor);
        const checkPos = pos.add(new Vector2(.5, .5)).mul(Config.SPRITE_SIZE * Config.CHUNK_SIZE * mul);
        
        // Create chunks
        if (checkPos.distance(this.game.camera.position) > 100) {

            this.range.map(p=> {

                if (!this.chunks.find(c=> Vector2.compare(c.pos, pos.mul(mul).add(p)))) {
                    const chunk = this.createChunk(pos.mul(mul).add(p));
                    if (chunk)
                        this.chunks.push(chunk);
                }
                
            });

            this.onWorldChangeListeners.filter(listener=> listener.listenChunks).map(listener=> {
                listener.callback();
            });
            
        }

        // Remove chunks
        this.chunks.map((chunk, index)=> {

            if (this.game.camera.position.distance(chunk.pos.mul(Config.SPRITE_SIZE * Config.CHUNK_SIZE)) > 800) {
                this.game.removeChildrenByGroupName(chunk.group);
                this.chunks.splice(index, 1);
            }
        
        });
        
    }
    
    createChunk(pos: Vector2): Chunk | undefined {

        // if (pos.x < 0 || pos.x > Config.WORLD_WIDTH / Config.CHUNK_SIZE || pos.y < 0 || pos.y > Config.WORLD_HEIGHT / Config.CHUNK_SIZE)
        if (pos.y < 0 || pos.y > Config.WORLD_HEIGHT / Config.CHUNK_SIZE)
            return;
        
        const ores: (typeof Ore | null)[][] = [[null]];
        __chunkId ++;
    
        for (let y = 0; y < Config.CHUNK_SIZE; y ++) {
            ores.push([]);
            for (let x = 0; x < Config.CHUNK_SIZE; x ++) {
                ores[y].push(null);
                const _y = y + pos.y * Config.CHUNK_SIZE;
                const _x = x + pos.x * Config.CHUNK_SIZE;
                
                for (let i = 0; i < this.settings.length; i ++) {
                    const gen = this.settings[i];
    
                    const noiseX = (x + pos.x * Config.CHUNK_SIZE)
                    const noiseY = (y + pos.y * Config.CHUNK_SIZE)
                    // const getValue = (x: number, y: number, div?: number)=> (+perlin2(x / (div || 10), y / (div || 10)) + 1) / 1.5;
                    const getValue = (x: number, y: number, div?: number)=> noise(x / (div || 10), y / (div || 10), 3);
                    const value = getValue(noiseX, noiseY, gen.divider);
    
                    const isValue = gen.value ? inRange(value, gen.value[0], gen.value[1]) : true; 
                    const rules = gen.rules ? gen.rules(noiseX, noiseY) : isValue;
                    
                    if (inRange(_y, gen.height[0], gen.height[1]) && rules)
                        ores[y][x] = gen.block;
                    // if (inRange(value, gen.value[0], gen.value[1]) && inRange(_y, gen.height[0], gen.height[1]) && rules)
                    //     ores[y][x] = gen.block;
                }
                
                const inChunkId = [x, y, pos.x, pos.y].join("-");
                if (ores[y][x] && this.destroyedOres.indexOf(inChunkId) < 0) {

                    const ore = new (ores[y][x] as any)(new Vector2(_x, _y), this.modifiedOres[inChunkId]);
                    ore.inChunkId = inChunkId;
                    ore.group = `${ __chunkId }`;

                    this.game.add(ore);

                }
    
                
            }
        }
    
        this.game.initChildren();
    
        return { group: `${ __chunkId }`, pos };

    }

    checkIsInLoadedChunk(checkPosition: Vector2): boolean {
        return this.chunks.findIndex(chunk=> Vector2.compare(chunk.pos, checkPosition.add(Vector2.all(Config.SPRITE_SIZE / 2)).div(Config.SPRITE_SIZE * Config.CHUNK_SIZE).apply(Math.floor))) >= 0;
    }
    destroyOre(inChunkId: Point["id"]) {

        delete this.modifiedOres[inChunkId];
        this.destroyedOres.push(inChunkId);

        this.onWorldChangeListeners.map(listener=> {
            if ((listener.pos != null && listener.pos.distance(inChunkIdToPosition(inChunkId)) < 200) || !listener.pos)
                listener.callback()
        });

        this.saveData();
        
    }
    modifyOre(inChunkId: Point["id"], data: Generator["modifiedOres"][0]["data"]) {
        this.modifiedOres[inChunkId] = data;
        this.saveData();
    }
    onWorldChange(id: string, pos: Vector2 | null, callback: Generator["onWorldChangeListeners"][0]["callback"], listenChunks?: boolean) {
        this.onWorldChangeListeners.push({ id, pos, callback, listenChunks });
    }
    removeListenerById(id: string) {
        this.onWorldChangeListeners = this.onWorldChangeListeners.filter(listener=> listener.id != id);
    }

    changeSeed() {
        const needSeed = this.game.loadKey("seed", Date.now());
        this.seed = (typeof needSeed == "number" ? needSeed : Date.now());
        // this.seed = Config.IS_DEV ? 1636721068016 : (typeof needSeed == "number" ? needSeed : Date.now());
        seed(this.seed);
        this.game.saveKey("seed", this.seed.toString());
        console.log(`%cСид мира: ${ this.seed }`, `background: ${ Color.BLACK };color: ${ Color.YELLOW };padding:15px;font-size:20px;`);
    }
    saveData() {
        this.game.saveKey("destroyedOres", JSON.stringify(this.destroyedOres));
        this.game.saveKey("modifiedOres", JSON.stringify(this.modifiedOres));
    }
    reset() {
        this.modifiedOres = {};
        this.destroyedOres = [];
        this.changeSeed();

        this.saveData();
    }
}