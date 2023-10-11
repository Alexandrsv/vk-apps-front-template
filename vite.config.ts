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
    rollupOptions: {
      onLog: (level, log, handler) => {
        // скрыть сообщения о use-client в либах @vkontakte при билде
        if (
          level === 'warn' &&
          log.message.includes('use-client') &&
          log.message.includes('@vkontakte') &&
          log.message.includes('was ignored')
        ) {
          return
        }

        handler(level, log)
      },
    },
  },
  css: {
    // devSourcemap: true,
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
