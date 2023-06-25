module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true, destructuredArrayIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }]
  },
  ignorePatterns: ['!.prettierrc.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
