import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import { defineConfig, configDefaults } from "vitest/config";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    css: false,
    globals: true,
    environment: "happy-dom",
    setupFiles: path.resolve(__dirname, "./tests/setup.ts"),
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        "lib/vite-env.d.ts",
        ".eslintrc.cjs",
        "lib/components/**/index.ts",
        "lib/layout/**/index.ts",
        "src/**/*",
        "lib/styles",
        "lib/index.ts",
        "lib/**/*.css.ts",
        "html",
      ],
      provider: "v8",
      reporter: ["html", "json", "text", "json-summary"],
      reportOnFailure: true,
      thresholds: {
        statements: 70,
        functions: 70,
        branches: 70,
        lines: 70,
      },
    },
  },
  plugins: [
    react(),
    /* Currently broken
    // some classes have undefined debugId causing clashes in css classNames
    // vanillaExtractPlugin({
    //   identifiers: ({ debugId }) => `ta_${debugId}`
    // }),
    */
    vanillaExtractPlugin({
      identifiers: 'debug'
    }),
    libInjectCss(),
    dts({ include: ["lib"], exclude: ["src"] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
      name: "ui",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "vitest-axe"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
