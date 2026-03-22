import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from 'vite-plugin-eslint'  // Comment this out

export default defineConfig({
  plugins: [
    react(),
    // eslint(),  // Comment this out
  ],
});
