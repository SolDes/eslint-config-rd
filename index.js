module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier', 'plugin:node/recommended'],
  plugins: [
    'import',
    'html',
    'jsdoc',
    'json',
    'prefer-object-spread',
    'prettier',
    'promise'
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  settings: {
    'html/html-extensions': ['.html', '.ejs']
  },
  rules: {
    'prettier/prettier': ['error'],
    'comma-dangle': ['error', 'never'],
    'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never',
        jsx: 'never'
      }
    ],
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': 0,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-object-spread/prefer-object-spread': 2,
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'always'
      }
    ]
  }
};
