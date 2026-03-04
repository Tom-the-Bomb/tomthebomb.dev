import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],

  { plugins: { prettier } },

  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  { ignores: ["dist/**", "**/*.d.ts", ".github/"] },
];
