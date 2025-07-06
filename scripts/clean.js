import { argv } from 'process';
import { existsSync, rmdirSync, rm, stat } from 'fs';
import { resolve } from 'path';

const path = argv[2];
if (!path) {
    throw new Error("No path provided.");
}
if (!existsSync(path)) {
    throw new Error(`${path} does not exist.`);
}

const absolute = resolve(path);
stat(absolute, (err, stats) => {
    if (err) {
        throw err;
    }
    if (stats.isDirectory()) {
        rmdirSync(absolute, { recursive: true });
    } else {
        rm(absolute);
    }
});