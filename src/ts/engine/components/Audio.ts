import { Game } from "..";
import messages from "../../messages";
import { Asset } from "../Asset"
import { asAudio, clamp, safeValue, Vector2 } from "../utils/math";

export class Audio {
    assetName: string | null
    audio: HTMLAudioElement | null | undefined
    volume: number
    
    constructor() {
        this.assetName = null;
        this.audio = null;
        this.volume = 1;
    }

    play(game: Game, assetName: string, volume?: number, loop?: boolean, toStart?: boolean) {
        this.assetName = assetName;

        this.audio = asAudio(game.getAssetByName(assetName));

        if (!this.audio) {
            console.error(messages.err.audioPlayError(assetName));
            return;
        }
        
        if (safeValue(toStart, true))
            this.audio.currentTime = 0;
            this.volume = safeValue(volume, 1)
        this.audio.volume = this.volume;
        this.audio.play();

        if (loop)
            this.audio.ontimeupdate = ()=> {
                if (!this.audio) return;

                if (this.audio.currentTime >= this.audio.duration-.3) {
                    this.audio.currentTime = 0;
                    this.audio.play();
                }
            }
    }
    stop() {
        if (!this.audio) return;
        if (this.audio.paused) return;
        
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    update3D(game: Game, emitterPosition: Vector2, maxDistance?: number) {
        if (!this.audio) return;

        const distance = safeValue(maxDistance, innerHeight / 2 );
        this.audio.volume = clamp(this.volume * (1 - game.camera.position.distance(emitterPosition) / distance), 0, 1);
        
    }
}