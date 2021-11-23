import { Game } from "./Game"
import { Ore } from "../objects/ores/Ore"
import { Vector2 } from "./utils/math"
import { Point } from "./components/Point";
import { Config } from "../config";
import { perlin2, seed } from "./utils/noise";
import { Destrony } from "../objects/ores/Destrony";

let __chunkId = 0;

export type Chunk = {
    group: string
    pos: Vector2
}
type GeneratorSettings = {
    value: [number, number]
    height: [number, number]
    ore: typeof Ore | any | null
    divider?: number
}

export class Generator {
    game: Game

    seed: number
    
    chunks: Chunk[]
    destroyedOres: string[]
    settings: GeneratorSettings[]
    range: Vector2[]
    
    constructor(game: Game) {
        this.game = game;

        this.seed = Date.now();
        // this.seed = 1636721068016;
        console.log(this.seed);
        seed(this.seed);

        this.chunks = [];
        this.destroyedOres = [];
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
        const pos = position.div(Config.SPRITE_SIZE * Config.CHUNK_SIZE).apply(Math.floor);
        
        if (pos.add(new Vector2(.5, .5)).mul(Config.SPRITE_SIZE * 5).distance(position) > 100) {

            this.range.map(p=> {

                if (!this.chunks.find(c=> Vector2.compare(c.pos, pos.add(p)))) {
                    const chunk = this.createChunk(pos.add(p));
                    if (chunk)
                        this.chunks.push(chunk);
                }
                
            });
            
        }

        this.chunks.map((chunk, index)=> {

            if (position.distance(chunk.pos.mul(Config.SPRITE_SIZE * Config.CHUNK_SIZE)) > 900) {
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
    
                    const div = gen.divider || 10;
                    const value = (+perlin2((x + pos.x * Config.CHUNK_SIZE) / div, (y + pos.y * Config.CHUNK_SIZE) / div) + 1) / 1.5;
    
                    // if (!(_x == Math.floor(Config.WORLD_WIDTH / 2) && (_y == 0 || _y == 1 || _y == 2))) {
                    if (value >= gen.value[0] && value <= gen.value[1] && _y >= gen.height[0] && _y <= gen.height[1])
                        ores[y][x] = gen.ore;
                    // }
                }
                
                const inChunkId = [x, y, pos.x, pos.y].join("-");
                if (ores[y][x] && this.destroyedOres.indexOf(inChunkId) < 0) {
                    const o = new (ores[y][x] as any)(new Vector2(_x, _y));
                    o.inChunkId = inChunkId;
                    o.group = `chunk-${ __chunkId }`;
                    this.game.add(o);
                }
    
                
            }
        }
    
        this.game.initChildren();
    
        return { group: `chunk-${ __chunkId }`, pos };

    }

    destroyOre(inChunkId: Point["id"]) {
        this.destroyedOres.push(inChunkId);
    }
}