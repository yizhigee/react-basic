// .eslintrc.js
export default {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
