var Webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader'],
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
    new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    contentBase: './dist',
    hot: true,
    stats: {
      progress: true,
      colors: true
    }
  }
}
