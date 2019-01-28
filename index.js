module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'import',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error'
    ]
  },
  settings: {
    'html/html-extensions': [
      '.html',
      '.ejs'
    ]
  }
};
