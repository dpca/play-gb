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
      },
      {
        test: /\.css$/,
        loaders: ['style', 'raw'],
        include: __dirname + '/src'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname + '/src'
      }
    ]
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
