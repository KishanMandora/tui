import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'tui',
      formats: ['es'],
      // the proper extensions will be added
      fileName: 'tui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      // output: { 
      // Provide global variables to use in the UMD build
      // for externalized deps
      // globals: {
      //   vue: 'Vue',
      // },
      // },
    },
  },
})
