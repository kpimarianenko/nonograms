module.exports = {
  env: {
    browser: false,
    node: true,
    'react-native/react-native': true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  extends: ['plugin:react/recommended'],
  ignorePatterns: ['src/graphql/index.ts'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-color-literals': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
    ],
    'react/self-closing-comp': ['error', { component: true }],
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
            pattern: '{react,react-native}',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@storage',
            group: 'internal',
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
            pattern: '@gql',
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
            position: 'before'
          },
          {
            pattern: '{@theme,@theme/**}',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@constants/**',
            group: 'internal',
            position: 'before'
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
    }
  }
};
