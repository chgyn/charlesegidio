import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures all assets use relative paths for GitHub Pages compatibility
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 3000,
    open: false,
  }
});
