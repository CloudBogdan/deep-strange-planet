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
        
        window.addEventListener("keydown", e=> {
            this.updateKey(e.code, true)

            if (!this.pressed)
            this.onKeyDownListeners.map(listener=> {
                this.eventKeys[listener.name].map(key=> {
                    
                    if (e.code == key) {
                        listener.callback();
                        this.pressed = true;
                    }
                    
                });
            });
            
        });
        window.addEventListener("keyup", e=> {
            this.updateKey(e.code, false);
            this.pressed = false;
        });
    }

    onKeyDown(name: string, callback: ()=> void) {

        // window.addEventListener("keydown", e=> {
            // this.eventKeys[name].map(key=> {
                
            //     if (e.code == key && !this.pressed) {
            //         callback();
            //         this.pressed = true;
            //     }
                
            // });
        // });
        this.onKeyDownListeners.push({
            name, callback
        });

    }
    onAnyKeyDown(callback: (name: string)=> void) {

        window.addEventListener("keydown", e=> {
            Object.keys(this.eventKeys).map(ekey=> {
                
                this.eventKeys[ekey].map(key=> {

                    if (key == e.code && !this.pressed) {
                        callback(ekey);
                        this.pressed = true;
                    }

                })
                
            });
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