module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "off",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "vue/max-attributes-per-line": [2, {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      }
    }]
  }
};
