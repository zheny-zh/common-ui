import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
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
      external: [
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "motion",
        "react",
        "react-bootstrap",
        "react-dom",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-bootstrap": "ReactBootstrap",
          "@fortawesome/react-fontawesome": "FontAwesomeReact",
          "@fortawesome/free-solid-svg-icons": "FontAwesomeFreeSolidIcon",
          motion: "motion",
        },
      },
    },
  },
});
