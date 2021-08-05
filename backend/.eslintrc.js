module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    rules: {
        "import/prefer-default-export": 0,
        "max-len": ["error", { "ignoreComments": true, "code": 120 }],
      },
      settings: {
        "import/resolver": {
          "node": {
            "extensions": [".js",".ts",]
          }
        }
      },
};
