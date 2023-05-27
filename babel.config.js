module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@storage': './src/storage'
        }
      }
    ]
  ]
};
