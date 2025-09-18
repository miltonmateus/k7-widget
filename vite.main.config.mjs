import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        outDir: '.vite/build/main',
        target: 'node18',
        rollupOptions: { external: ['electron'] }
    }
});
