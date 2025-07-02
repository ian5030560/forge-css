import { compile } from "sass";
import { validateFilePath } from "./util";
import makeConfigFunction from "./config";
import { join, resolve } from "path";

export default function forgeCss(config?: string) {
    if (config) {
        validateFilePath(config);
    }
    
    // eslint-disable-next-line no-undef
    const root = resolve(__dirname, "..");
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