import { CustomFunction, sassFalse, SassMap, sassNull, SassNumber, SassString, sassTrue, Value } from "sass"
import { OrderedMap } from "immutable";
import defaultConfig from "../default/forgecss.config.json";
import { readFileSync } from "fs";

type ConfigOption = { [key: string]: any };

export function applyDiff(options: ConfigOption, partial: Partial<ConfigOption>) {
    for (const key in partial) {
        const oldValue = options[key];
        const newValue = partial[key];

        if (typeof oldValue !== typeof newValue) {
            throw new Error(`${typeof newValue} should be ${typeof oldValue}.`);
        }

        if (typeof oldValue === "object") {
            applyDiff(oldValue, newValue);
        }
        else {
            options[key] = newValue;
        }
    }
}

export function seekProperty(options: ConfigOption, key: string, ...subKeys: string[]) {
    return subKeys.reduce((prev, curr) => {
        if (typeof prev !== "object" || prev === null) {
            throw new Error(`Cannot seek property "${curr}" in a non-object value: ${JSON.stringify(prev)}.`);
        }
        if (!Object.keys(prev).includes(curr)) {
            throw new Error(`Can't seek property ${curr} in ${JSON.stringify(prev)}.`);
        }
        return prev[curr];
    }, options[key]);
}

function toSassMap(obj: object): SassMap {
    const mapData = Object.entries(obj).map(([key, value]) => {
        return [new SassString(key, { quotes: false }), toSass(value)] as [Value, Value];
    });
    const orderedMap = OrderedMap(mapData);
    return new SassMap(orderedMap);
}

function toSass(obj: any) {
    if (obj === null) {
        return sassNull;
    }
    else {
        switch (typeof obj) {
            case "string":
                return new SassString(obj);
            case "number":
                return new SassNumber(obj);
            case "boolean":
                return obj ? sassTrue : sassFalse;
            case "object":
                return toSassMap(obj);
            default:
                throw new Error("Unknown error in config function.");
        }
    }
}

/**
 * @description
 * make the custom function to access values in the config file
 * 
 * @example
 * in scss file:
 * $value = config("gap", "responsive"); // get 'responsive' property of 'gap' property in the config file.
 */
export default function makeConfigFunction(config?: string): Record<string, CustomFunction<"sync">> {
    const options = defaultConfig as ConfigOption;
    if (config) {
        const partial: Partial<ConfigOption> = JSON.parse(readFileSync(config, "utf-8"));
        applyDiff(options, partial);
    }

    return {
        "config($key, $sub-key...)": (args: Value[]) => {
            const key = args[0].assertString("key").text;
            const subKeys = args[args.length - 1].asList.map(it => it.assertString().text);

            const value = seekProperty(options, key, ...subKeys);
            return toSass(value);
        }
    }
}