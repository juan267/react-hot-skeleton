const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval', //enable sour-maps
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel'],
        include: path.join(__dirname, 'app')
      }
    ]
  }
}