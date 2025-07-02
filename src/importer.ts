import { type Importer, type ImporterResult } from "sass";
// import { readFileSync } from "fs"
// import { resolve } from "path";
// import defaultConfig from "../default/forgecss.config.json";

/**
 * @description
 * access the config values in scss/sass files.
 * example: @use "config:property[:subproperty...]"
 */
export default function (config?: string): Importer<"sync"> {

    // const jsonObj = config ? JSON.parse(readFileSync(resolve(config), "utf-8")) : defaultConfig;

    const head = "config";
    const prefix = `${head}:`;
    const prefixDoubleSlash = `${prefix}//`;
    
    const extractProperty = (url: string) => {
        return url.slice(prefixDoubleSlash.length);
    } 

    return {
        canonicalize: function (url: string) {
            if (!url.startsWith(prefix)) {
                return null;
            }

            const property = url.slice(prefix.length);
            if(property.length == 0) throw new Error("The property name can't be empty.");
            return new URL(`${prefixDoubleSlash}${property}`);
        },
        load: function (canonicalUrl: URL): ImporterResult | null {
            const property = extractProperty(canonicalUrl.pathname);

            return {
                contents: `$${property}`,
                syntax: "scss",
            }
        },

        nonCanonicalScheme: [head]
    }
};