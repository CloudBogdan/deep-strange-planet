export class Timer {
    started: boolean
    elapsed: number
    elapsedSeconds: number
    startElapsed: number
    triggerElapsed: number
    
    constructor(triggerElapsed: number) {
        this.started = false;
        this.elapsed = triggerElapsed * 60;
        this.elapsedSeconds = triggerElapsed;
        this.startElapsed = 0;
        this.triggerElapsed = triggerElapsed;
    }

    start(elapsed: number) {
        if (this.started) return;
        
        this.started = true;
        this.startElapsed = elapsed;
    }
    reset() {
        this.started = false;
        this.startElapsed = this.triggerElapsed;
        this.elapsed = this.triggerElapsed * 60;
        this.elapsedSeconds = this.triggerElapsed;
    }
    update(elapsed: number) {
        if (!this.started) return;
        
        this.elapsed = this.triggerElapsed * 60 - (elapsed - this.startElapsed);
        this.elapsedSeconds = this.triggerElapsed - Math.floor((elapsed - this.startElapsed) / 60);
    }
    
    isTriggered(): boolean {
        return this.elapsed <= 0 && this.started;
    }
}