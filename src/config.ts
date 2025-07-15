import { CustomFunction, sassFalse, SassMap, sassNull, SassNumber, SassString, sassTrue, Value } from "sass"
import { OrderedMap } from "immutable";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";

type ConfigOption = { [key: string]: any };

export function seekProperty(options: ConfigOption, key: string, ...subKeys: string[]) {
    return subKeys.reduce((prev, curr) => {
        if(prev === undefined || prev === null){
            return prev;
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
    if (obj === null || obj === undefined) {
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
                if(Array.isArray(obj)){
                    throw new Error("Array is not supported.");
                }
                return toSassMap(obj);
            default:
                throw new Error(`${typeof obj} is not supported`);
        }
    }
}

/**
 * @description
 * make the custom function to access values in the config file
 * 
 * @example
 * // in scss:
 * $value = config("gap", "responsive"); // get 'responsive' property of 'gap' property in the config file.
 */
export default function makeConfigFunction(config?: string): Record<string, CustomFunction<"sync">> {
    if (config && !existsSync(resolve(config))) {
        throw new Error(`${config} is not found.`);
    }

    let options = {} as ConfigOption;
    if (config) {
        options = JSON.parse(readFileSync(resolve(config), "utf-8"));
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