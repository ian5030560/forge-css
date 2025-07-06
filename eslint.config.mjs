import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts}", "test/**/*.{js,mjs,cjs,ts}"]
  },
  { languageOptions: { globals: globals.es2020 } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "warn",
      "no-explicit-any": "off",
      "@typescript-eslint/no-explicit-any": "off"
    },
  }
];