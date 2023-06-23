module.exports = {
  rules: {
    'import/order': [
      'warn',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@types',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@db/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@firebase',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@constants/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@resolvers/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@middlewares',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@models/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@i18n/**',
            group: 'internal',
            position: 'before'
          }
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './server/tsconfig.json'
      }
    }
  }
};
