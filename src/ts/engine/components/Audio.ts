import { Game } from "..";
import messages from "../../messages";
import { Asset } from "../Asset"
import { asAudio, safeValue } from "../utils/math";

export class Audio {
    assetName: string | null
    audio: HTMLAudioElement | null | undefined
    
    constructor() {
        this.assetName = null;
        this.audio = null;
    }

    play(game: Game, assetName: string, toStart?: boolean) {
        this.assetName = assetName;

        this.audio = asAudio(game.getAssetByName(assetName));

        if (!this.audio) {
            console.error(messages.err.audioPlayError(assetName));
            return;
        }
        
        if (safeValue(toStart, true))
            this.audio.currentTime = 0;
        this.audio.play();
    }
}