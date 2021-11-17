module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 2021
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'arrow-body-style': 'off',
    'jsx-quotes': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',

    'react/jsx-filename-extension': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    'no-use-before-define': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
