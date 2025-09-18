// vite.renderer.config.mjs
import { defineConfig } from 'vite';

export default defineConfig({
    // O Vite vai servir seu index.html a partir de src/renderer
    root: 'src/renderer',
    base: '', // importante pra caminhos relativos funcionarem no build
    build: {
        // sair para a pasta .vite/build/renderer (volta duas pastas por causa do root)
        outDir: '../../.vite/build/renderer',
        emptyOutDir: true,
    },
});
