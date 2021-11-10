module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'eslint-config-prettier'],
  plugins: ['react', '@typescript-eslint'],
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

    'import/extensions': 'off',
    'import/no-unresolved': 'off'
  }
};