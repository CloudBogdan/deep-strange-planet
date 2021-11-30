import { ISpriteProps } from "../../engine";
import { Gear } from "./Gear";

export class OxygenGenerator extends Gear {
    constructor(props?: ISpriteProps) {
        super("gear-oxygen-generator", 1, props);


    }
}