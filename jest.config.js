module.exports = {
  verbose: true,
  "modulePaths": ["client/src"],
  "setupFilesAfterEnv": [
    "<rootDir>/spec/client/item-details-test.js",
    "<rootDir>/spec/client/questions-test.js",
    "<rootDir>/spec/client/gift-now-test.js",
    "<rootDir>/spec/client/shipping-test.js",
    "<rootDir>/spec/client/sizing-test.js",
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(gift-now-test))\\.js$",
};
