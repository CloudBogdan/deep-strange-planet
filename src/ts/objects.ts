import { HealingFetus } from "./objects/food/HealingFetus";
import { Battery } from "./objects/item/Battery";
import { Box } from "./objects/item/Box";
import { Card } from "./objects/item/Card";
import { Drill } from "./objects/item/Drill";
import { RobotItem } from "./objects/item/RobotItem";
import { RawAntin } from "./objects/raws/RawAntin";
import { RawCidium } from "./objects/raws/RawCidium";
import { RawGradeCidium } from "./objects/raws/RawGradeCidium";
import { RawManty } from "./objects/raws/RawManty";
import { RawNerius } from "./objects/raws/RawNerius";
import { RawOsmy } from "./objects/raws/RawOsmy";
import { RawRady } from "./objects/raws/RawRady";
import { ReadyCidium } from "./objects/ready/ReadyCidium";

export const Items: { [key: string]: any }  = {
    // Raws
    "raw-cidium": RawCidium,
    "raw-osmy": RawOsmy,
    "raw-grade-cidium": RawGradeCidium,
    "raw-antin": RawAntin,
    "raw-rady": RawRady,
    "raw-nerius": RawNerius,
    "raw-manty": RawManty,
    // Ready
    "ready-cidium": ReadyCidium,
    // Items
    "item-robot": RobotItem,
    "battery": Battery,
    "drill": Drill,
    "box": Box,
    "card": Card,
    // Food
    "food-fetus": HealingFetus
};