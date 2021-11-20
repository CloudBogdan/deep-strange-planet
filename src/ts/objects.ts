import { RawAntin } from "./objects/raws/RawAntin";
import { RawCidium } from "./objects/raws/RawCidium";
import { RawGradeCidium } from "./objects/raws/RawGradeCidium";
import { RawNerius } from "./objects/raws/RawNerius";
import { RawOsmy } from "./objects/raws/RawOsmy";
import { RawRady } from "./objects/raws/RawRady";

export const Raws: { [key: string]: any }  = {
    "raw-cidium": RawCidium,
    "raw-osmy": RawOsmy,
    "raw-grade-cidium": RawGradeCidium,
    "raw-antin": RawAntin,
    "raw-rady": RawRady,
    "raw-nerius": RawNerius,
};