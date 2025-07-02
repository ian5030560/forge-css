import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';

export default defineConfig({
    plugins: [
        typescript({ tsconfig: "./tsconfig.json" }),
        eslint({ baseConfig: "./eslint.config.mjs" }),
    ],
    input: "src/index.ts",
    output: {
        dir: "dir",
        file: "index.js",
        format: "cjs"
    }
});