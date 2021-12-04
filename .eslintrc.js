module.exports = {
  extends: "eslint:recommended",
  // parse: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "script",
  },
  rules: {
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
  },
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  globals: {
    window: true,
  },
};
