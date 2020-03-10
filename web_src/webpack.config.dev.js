const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    require.resolve('react-hot-loader/patch'),
    './src/main.tsx',
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
});
