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
            pattern: '@resolvers/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@schema/**',
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
