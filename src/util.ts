import { existsSync } from "fs";
import { resolve } from "path";

export function validateFilePath(path: string){
    if (!existsSync(resolve(path))) {
        throw new Error(`${path} is not found.`);
    }
}