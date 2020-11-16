/* eslint-disable no-undef */
module.exports = {
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "prettier/vue",
    "prettier/@typescript-eslint",
  ],
};
