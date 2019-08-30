module.exports = {
  verbose: true,
  "modulePaths": ["client/src"],
  "setupFilesAfterEnv": [
    "<rootDir>/spec/client/item-details.js",
    "<rootDir>/spec/client/questions.js",
    "<rootDir>/spec/client/gift-now.js",
    "<rootDir>/spec/client/shipping.js",
    "<rootDir>/spec/client/sizing.js"
  ]
};
