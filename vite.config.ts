import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.vue'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'NanoBox',
      fileName: 'nano-box',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'nano-box.css'
          }
          return assetInfo.name || ''
        },
      },
    },
  },
})