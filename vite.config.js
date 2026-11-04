import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/opencode-observability/",
  plugins: [react()],
  build: { outDir: "dist", emptyOutDir: true, sourcemap: false },
});
