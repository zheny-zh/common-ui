import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["src/env.ts", "src/**/*.stories.ts"],
    }),
  ],

  build: {
    lib: {
      entry: "src/index.ts",
      name: "common-ui",
      fileName: (format) => `common-ui.${format}.js`,
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
