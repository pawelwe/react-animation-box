module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx", "json", "node", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  transformIgnorePatterns: ["/node_modules"],
  transform: {
    "\\.(ts|tsx)?$": "ts-jest",
    "\\.svg$": "<rootDir>/fileTransformer.js",
  },
  moduleNameMapper: {
    ".+\\.(css|scss)$": "identity-obj-proxy",
  },
};
