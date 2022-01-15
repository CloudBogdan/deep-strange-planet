import { randomInt } from "../../engine/utils/math";
import { Entity } from "./Entity";

export class Worm extends Entity {
    length: number
    segments: WormSegment[]
    
    constructor() {
        super("worm", "rady");

        this.length = 0;
        this.segments = [];
    }

    init() {
        super.init();
        
        this.length = randomInt(6, 12);

        this.segments.push(new WormSegment(null));
        for (let i = 0; i < this.length+1; i ++)
            this.segments.push(new WormSegment(this.segments[i]));
    }
}

class WormSegment {
    parent: WormSegment | null
    
    constructor(parent: WormSegment | null) {
        this.parent = parent;
    }
}