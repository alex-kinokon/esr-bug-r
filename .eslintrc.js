module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@eslint-react/eslint-plugin"],
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: ["plugin:@eslint-react/recommended-legacy"],
    },
  ],
};
