import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

// The following tells IDE to use proper code completions for eslint
/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      }
    }
  },
  prettier //must always be last
]
