const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'index': path.join(__dirname, '/public/app/app.js')
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, '/dist/'),
    devtoolLineToLine: true,
    pathinfo: true,
    sourceMapFilename: '[name].js.map',
    publicPath: path.join(__dirname, '/public')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};