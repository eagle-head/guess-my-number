module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        quotes: [2, "double", { avoidEscape: true }],
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
};
