import { compile } from "sass";
import makeConfigFunction from "./config";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));

export default function forgeCss(config?: string) {
    const root = resolve(__dir, "..");
    const scssEntry = join(root, "scss", "index.scss");
    
    const result = compile(scssEntry, {
        functions: {
            ...makeConfigFunction(config)
        },
        loadPaths: [join(root, "scss")],
        style: "compressed"
    });

    return result.css;
}