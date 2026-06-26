import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    host: true,
    port: 3000,
    allowedHosts: true, // Allow all hosts for the preview
  },
});
