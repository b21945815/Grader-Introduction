import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": {
        /*This address should be changed to the network IP shared with the Flask API for Docker.
        http://172.25.0.1:8080*/
        target: "http://127.0.0.1:9090",
        /*target: "http://172.25.0.2:8080",*/
        changeOrigin: true,
        secure: false,
      },
    },
    host: true,
    strictPort: true,
  },
});
