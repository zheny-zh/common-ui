import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["src/env.ts", "src/**/*.stories.ts"],
    }),
    cssInjectedByJsPlugin(),
  ],

  build: {
    lib: {
      entry: "src/index.ts",
      name: "common-ui",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
