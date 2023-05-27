module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
    'react-native/react-native': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-native', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
    ],
    'react/self-closing-comp': ['error', { component: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      'warn',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@navigation/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@screens/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@services/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@helpers/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@i18n',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: './styles',
            group: 'sibling',
            position: 'after'
          }
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
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
