import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        outDir: '.vite/build/preload',
        target: 'node18',
        rollupOptions: { external: ['electron'] }
    }
});
