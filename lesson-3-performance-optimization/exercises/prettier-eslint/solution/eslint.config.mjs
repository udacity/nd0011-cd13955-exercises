import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "no-console": "warn",
      "curly": "error" 
    },
  },
  pluginJs.configs.recommended,
];
