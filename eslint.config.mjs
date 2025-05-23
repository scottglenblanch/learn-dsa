import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{test.ts}'],
    rules: {
      'no-undef': 'off',
    },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node, // Add Node.js globals (module, require)
      },
      parser: tseslint.parser, // Use TypeScript parser
      sourceType: 'module', // Assume ESM; change to 'commonjs' if needed
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules, // Reinforce TypeScript rules
    },
  },
  {
    files: ['**/*.test.{js,ts}'], // Cover both .test.js and .test.ts
    languageOptions: {
      globals: {
        ...globals.jest, // Jest globals (describe, test, expect)
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules, // Jest recommended rules
      '@typescript-eslint/no-require-imports': 'off', // Allow require() in tests
      'no-undef': 'off', // Disable no-undef for test files
    },
  },
]);
