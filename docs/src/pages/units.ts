type UnitData = {
    name: string;
    url?: string;
    description?: string;
}

export default {
    length: {
        name: "length",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length",
    },
    "length-percentage": {
        name: "length-percentage",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage",
    },
    "calc()": {
        name: "calc()",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/calc"
    },
    "boolean": {
        name: "boolean",
        description: "A true/false value."
    }
} as Record<string, UnitData>;