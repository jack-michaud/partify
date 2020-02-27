const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
});
