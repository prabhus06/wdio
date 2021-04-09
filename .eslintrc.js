module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': ['eslint:recommended',
    'plugin:wdio/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  "plugins": [
    "wdio"
  ],
  'rules': {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
};
