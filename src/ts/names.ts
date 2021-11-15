import { buildName } from "./engine/utils/math";

type NamesType = {
    [key: string]: {
        name: string
        desc: string
    }
}

const prefixes = {
    raw: "Необработанный"
}

export const RawNames: NamesType = {
    "raw-cidium": {
        name: buildName(prefixes.raw, "цидиум"),
        desc: "Жёлтая руда, которая непонятным образом выделяет энергию, если её правильно обработать. При этом её очень легко найти"
    },
    "raw-osmy": {
        name: buildName(prefixes.raw, "осмий"),
        desc: "Осмий, кристалы, которые также есть и на земле. Казалось бы, ничего интересного, но вместе с цидиумом осмий будет очень полезен"
    },
    "raw-grade-cidium": {
        name: buildName(prefixes.raw, "второсортний цидиум"),
        desc: "Тот же цидиум, но другого сорта. Но не стоит её недооценивать"
    },
    "raw-antin": {
        name: buildName(prefixes.raw, "антин"),
        desc: "Антин, крайне странная руда, имеющая красный оттенок. Предположительно кристалы, которые образовались тысячи или даже миллионы лет назад из-за вулканической активности. Не зря они расположены ближе к мантии"
    },
    "raw-rady": {
        name: buildName(prefixes.raw, "радий"),
        desc: "Радий... Нам не удалось его подробно изучить. Известно только, то что он очень глубоко под землёй и излучает радиационный фон до 67.2 мк/ч, что выше нормы в 4 раза"
    },
}
export const GearNames: NamesType = {
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