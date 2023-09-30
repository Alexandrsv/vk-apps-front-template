import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";

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
      host: "192.168.0.10",
      clientPort: 10888,
    },
  },
});
