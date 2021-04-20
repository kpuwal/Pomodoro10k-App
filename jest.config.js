module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native)/)"
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{tsx,js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js"
  ],
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  testPathIgnorePatterns : [
    "<rootDir>/__tests__/helpers/" 
  ]
};
