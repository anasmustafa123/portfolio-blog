import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { recmaCodeHike, remarkCodeHike } from "codehike/mdx";

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: { code: "Code" },
};

export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [[remarkCodeHike, chConfig]],
      recmaPlugins: [[recmaCodeHike, chConfig]],
      jsx: true,
    }),
  ],
  /*  build: {
    ssr: "src/entry-server.tsx", // Server-side entry point
  }, */
});
