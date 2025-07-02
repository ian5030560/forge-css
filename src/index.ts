import { compile } from "sass";
import { validateFilePath } from "./util";
import importer from "./importer";
import { writeFileSync } from "fs";

const templates = "scss/index.scss";
export default function forgeCss(output: string, config?: string) {
    if (config) {
        validateFilePath(config);
    }
    validateFilePath(output);

    const result = compile(templates, {
        importers: [importer(config)]
    });

    writeFileSync(output, result.css, { flag: "w+" });
}