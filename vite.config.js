import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/opencode-observability/",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 5175,
    strictPort: true,
    proxy: {
      "/api": { target: "https://127.0.0.1:5099", secure: false, changeOrigin: true },
    },
  },
});
