export class Gamepad {
    eventKeys: {
        [name: string]: string[]
    }
    
    keys: {
        right: boolean
        left: boolean
        up: boolean
        down: boolean
        enter: boolean
    }

    pressed: boolean

    onKeyDownListeners: ({ name: string, callback: ()=> void})[]
    onAnyKeyDownListeners: ({ callback: (name: string)=> void })[]
    
    constructor() {
        this.eventKeys = {
            "right": ["ArrowRight", "KeyD"],
            "left": ["ArrowLeft", "KeyA"],
            "up": ["ArrowUp", "KeyW"],
            "down": ["ArrowDown", "KeyS"],
            "enter": ["Enter"],
        };

        this.keys = {
            right: false,
            left: false,
            up: false,
            down: false,
            enter: false,
        }

        this.pressed = false;
    
        this.onKeyDownListeners = [];
        this.onAnyKeyDownListeners = [];
        
        window.addEventListener("keydown", e=> {
            this.updateKey(e.code, true)

            if (this.pressed) return;
            this.onKeyDownListeners.map(listener=> {
                this.eventKeys[listener.name].map(key=> {
                    
                    if (e.code == key) {
                        listener.callback();
                        this.pressed = true;
                    }
                    
                });
            });
            this.onAnyKeyDownListeners.map(listener=> {
                Object.keys(this.eventKeys).map(ekey=> {
                
                    this.eventKeys[ekey].map(key=> {
    
                        if (key == e.code) {
                            listener.callback(ekey);
                            this.pressed = true;
                        }
    
                    })
                    
                });
            });
            
        });
        window.addEventListener("keyup", e=> {
            this.updateKey(e.code, false);
            this.pressed = false;
        });
    }

    onKeyDown(name: string, callback: ()=> void) {

        this.onKeyDownListeners.push({
            name, callback
        });
        
    }
    onAnyKeyDown(callback: (name: string)=> void) {
        
        this.onAnyKeyDownListeners.push({
            callback
        });

    }

    updateKey(code: string, enabled: boolean) {
        this.mapKeys((ekey, key)=> {
            if (code == key)
                this.keys[ekey as keyof typeof this.keys] = enabled;
        });
    }
    mapKeys(func: (ekey: string, key: string)=> void) {
        Object.keys(this.eventKeys).map(ekey=> {
            this.eventKeys[ekey].map(key=> func(ekey, key))
        })
    }
}