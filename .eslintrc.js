module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
  },
  globals: {
    sessionStorage: true,
  },
};
