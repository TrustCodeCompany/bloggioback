module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@models': './src/models',
          '@config': './src/config',
          '@controllers': './src/controllers',
          '@views': './src/views',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@middlewares': './src/middlewares'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }] // add decorator
  ]
  // ignore: ['**/*.spec.ts']
};
