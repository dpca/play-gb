var Webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname + '/src'
      }
    ]
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}