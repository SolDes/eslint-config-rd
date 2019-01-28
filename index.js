module.exports = {
  env: {
    node: true,
    es6: true
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],

  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ]
};
