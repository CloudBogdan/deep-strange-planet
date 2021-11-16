import { buildName } from "./engine/utils/math";

type NameType = {
    name: string
    desc: string
    special?: string 
}

const prefixes = {
    raw: "Необработанный"
}

export const RawNames: { [key: string]: NameType } = {
    "raw-cidium": {
        name: buildName(prefixes.raw, "цидиум"),
        desc: "Жёлтая руда, которая непонятным образом выделяет энергию, если её правильно обработать. При этом её очень легко найти",
    },
    "raw-osmy": {
        name: buildName(prefixes.raw, "осмий"),
        desc: "Осмий, кристалы, которые также есть и на земле. Казалось бы, ничего интересного, но вместе с цидиумом, осмий будет очень полезен",
    },
    "raw-grade-cidium": {
        name: buildName(prefixes.raw, "второсортний цидиум"),
        desc: "Цидиум 2-го сорта, руда, иногда встречающаяся вместе с осмием",
    },
    "raw-antin": {
        name: buildName(prefixes.raw, "антин"),
        desc: "Антин, крайне странная руда, имеющая красный оттенок. Предположительно кристалы, которые миллионы лет назад из-за вулканической активности. Не зря они расположены ближе к мантии",
    },
    "raw-rady": {
        name: buildName(prefixes.raw, "радий"),
        desc: "Радий... Нам не удалось его подробно изучить. Известно только, то что он очень глубоко под землёй и излучает радиационный фон до 67.2 мк/ч, что выше нормы в 4 раза",
        special: "> Требуется специальная колба для сбора!"
    },
}
export const GearNames: { [key: string]: NameType } = {
    "storage": {
        name: "Хранилище ресурсов",
        desc: ""
    },
    "recycler": {
        name: "Переработчик",
        desc: ""
    },
    "upgrader": {
        name: "Улучшатель",
        desc: ""
    },
}