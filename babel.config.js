module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services'
        }
      }
    ]
  ]
};
