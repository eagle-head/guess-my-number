module.exports = {
  preset: "./test/jest-preset.js",
  transformIgnorePatterns: ["node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation/(.*))"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  clearMocks: true,
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/test"],
  transform: {},
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  resetMocks: true,
  restoreMocks: true,
};
