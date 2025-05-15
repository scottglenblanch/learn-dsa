import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import { rules } from "eslint-config-prettier";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  { 
    files: ["**/*.{test.ts}"], 
    rules: {
    "no-undef": "off"
  }},
  tseslint.configs.recommended,

]);
