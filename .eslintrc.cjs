module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'stanard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off',
    'comma-dangle': 'off',
    'multiline-ternary': 'off',
    'react/jsx-curly-brace-presence': 'off'
  }
}
