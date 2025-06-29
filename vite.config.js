import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'forge-css',
            formats: ['es'],
            fileName: "index.js"
        },
        outDir: 'dist',
        rollupOptions: {
            external: [], // external dependencies (e.g., ['fs', 'path'])
        }
    }
});
