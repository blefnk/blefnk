// @ts-check

import eslint from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

/** @type {import("typescript-eslint").Config} */
const config = tseslint.config(
  {
    ignores: ["**/.{git,astro}/", "**/{node_modules,dist}/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ["**/*.{js,jsx,md,json}"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
      },
    },
    plugins: {
      perfectionist,
      "@stylistic": stylistic,
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-throw-literal": "warn",
      "no-constant-binary-expression": "off",
      "no-constant-condition": "off",
      "no-case-declarations": "off",
      "max-lines": ["error", 700],
      "perfectionist/sort-imports": "warn",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/indent": "off",
      "@stylistic/quotes": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/indent-binary-ops": "off",
    },
  },
  {
    files: ["**/*.json"],
    plugins: {
      json,
    },
    language: "json/json",
    rules: {
      "no-irregular-whitespace": "off",
      "json/no-duplicate-keys": "error",
    },
  },
  {
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    language: "markdown/commonmark",
    rules: {
      "no-irregular-whitespace": "off",
      "markdown/no-html": [
        "error",
        {
          allowed: [
            "a",
            "br",
            "Card",
            "CardGrid",
            "details",
            "div",
            "h1",
            "img",
            "p",
            "picture",
            "source",
            "span",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "tr",
            "b",
          ],
        },
      ],
    },
  },
);

export default config;
