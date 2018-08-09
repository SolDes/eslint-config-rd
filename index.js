module.exports = {
  extends: [
    'eslint-config-airbnb',
    'plugin:flowtype/recommended'
  ],
  env: {
    'es6': true,
    'node': true
  },
  plugins: [
    'flowtype',
    'html',
    'jsdoc',
    'node'
  ],
  settings: {
    'html/html-extensions': ['.html', '.ejs']
  },
  globals: {
    'filterXSS': true,
    'document': true,
    'navigator': true,
    'window': true,
    'FileReader': true,
    'alert': true,
    'jQuery': true,
    'Blob': true,
    '$': true,
    'XMLHttpRequest': true,
    'contrast': true,
    'angular': true,
    'sessionStorage': true,
    'localStorage': true,
    'location': true,
    'CKEDITOR': true,
    'MediumEditor': true,
    'MediumButton': true,
    'moment': true,
    'MutationObserver': true,
    'Bloodhound': true,
    'Mustache': true,
    'Handlebars': true,
    'FormData': true,
    '_etmc': true,
    'ga': true,
    'Prism': true,
    'Vivus': true
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
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': ['error', {
      components: [],
      required: {
        some: ['nesting', 'id']
      },
      allowChildren: false
    }],
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
    'react/jsx-boolean-value': 0,
    'react/prop-types': 0,
    'space-before-function-paren': ['error', {
      anonymous: 'ignore',
      named: 'ignore',
      asyncArrow: 'always'
    }]
  }
};
