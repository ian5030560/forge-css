import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
    input: {
        "index": "src/index.ts",
        "cli": "src/cli.ts"
    },
    output: {
        dir: "dist",
        format: "es",
        entryFileNames: "[name].mjs",
        chunkFileNames: "[name]-[hash].mjs",
        sourcemap: true,
    },
    external: ["sass", "immutable"],
    plugins: [
        nodeResolve(),
        commonjs({ignoreDynamicRequires: true}),
        typescript({ tsconfig: "./tsconfig.json" }),
        eslint()
    ],
});