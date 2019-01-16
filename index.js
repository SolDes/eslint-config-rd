module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: [
    'prettier',
    'html',
    'jsdoc',
    'json',
    'node',
    'prefer-object-spread'
  ],
  globals: {
    filterXSS: true,
    document: true,
    navigator: true,
    window: true,
    FileReader: true,
    alert: true,
    jQuery: true,
    Blob: true,
    $: true,
    XMLHttpRequest: true,
    contrast: true,
    angular: true,
    sessionStorage: true,
    localStorage: true,
    location: true,
    CKEDITOR: true,
    MediumEditor: true,
    MediumButton: true,
    moment: true,
    MutationObserver: true,
    Bloodhound: true,
    Mustache: true,
    Handlebars: true,
    FormData: true,
    _etmc: true,
    ga: true,
    Prism: true,
    Vivus: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
      modules: true
    }
  },
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': ['error', 'never'],
    'consistent-return': 0,
    'func-names': 0,
    'global-require': 0,
    'import/no-named-as-default-member': 0,
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
    'node/no-deprecated-api': 'error',
    'node/process-exit-as-throw': 'error',
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-loop-func': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-script-url': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { args: 'none' }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    radix: 0,
    'space-before-function-paren': ['error', {
      anonymous: 'ignore',
      named: 'ignore',
      asyncArrow: 'always'
    }]
  },
  settings: {
    'html/html-extensions': ['.html', '.ejs']
  }
};
