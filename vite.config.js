import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      'framework7': resolve(__dirname, 'node_modules/framework7'),
      'framework7-svelte': resolve(__dirname, 'node_modules/framework7-svelte'),
      'framework7-icons': resolve(__dirname, 'node_modules/framework7-icons')
    }
  }
})
