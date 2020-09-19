module.exports = {
 parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,

    },
    ecmaVersion: 12,
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  plugins: [
    'react'
  ],
  rules: {}
}
