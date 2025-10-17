import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    rules: {
      "no-unused-vars": "warn", // ⚠️ Flags unused imports/vars
      "react/react-in-jsx-scope": "off", // Not needed for Vite + React 17+
    },
    settings: {
      react: {
        version: "detect", // 👈 Fixes the "React version not specified" warning
      },
    },
  },
]);
