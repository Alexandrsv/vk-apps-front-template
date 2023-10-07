import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: /\.svg$/,
      svgrOptions: {
        // icon: true,
      },
    }),
    react(),
    viteBasicSslPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  server: {
    port: 10888,
    https: true,
    host: true,
    hmr: {
      host: '192.168.0.10',
      clientPort: 10888,
    },
  },
})
