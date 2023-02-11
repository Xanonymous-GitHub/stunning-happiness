import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 50000,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].min.js',
        freeze: true,
        minifyInternalExports: true,
        sourcemap: false,
        strict: true,
        compact: true,
      },
    },
  },
  esbuild: {
    legalComments: 'none',
    minifySyntax: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    platform: 'browser',
  },
  plugins: [
    splitVendorChunkPlugin(),
    createHtmlPlugin(),
  ],
})
