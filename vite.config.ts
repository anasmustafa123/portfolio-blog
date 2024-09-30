import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [react(), mdx(/* jsxImportSource: …, otherOptions… */)],
 /*  build: {
    ssr: "src/entry-server.tsx", // Server-side entry point
  }, */
});
