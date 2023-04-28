module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "project": ["./tsconfig.json"],
    "ecmaFeatures": {
      "jsx": true,
      "js": true
    }
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/default-props-match-prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/media-has-caption": "off",
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "./",
            "message": "Use import from non-index file in the same directory"
          },
          {
            "name": ".",
            "message": "Use import from non-index file in the same directory"
          }
        ]
      }
    ],
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "no-restricted-syntax": "off",
    "class-methods-use-this": "off",
    "default-case": "off",
    "array-callback-return": "off",
    "consistent-return": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "react/function-component-definition": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/destructuring-assignment": "off",
    "react/no-danger": "off",
    "react/no-array-index-key": "off",
    "react/state-in-constructor": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "jsx-a11y/iframe-has-title": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}
