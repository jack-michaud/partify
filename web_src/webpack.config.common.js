const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'build.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Knockchat',
      filename: 'index.html',
      template: 'src/index.html',
      meta: {
        viewport: "width=device-width, initial-scale=1"
      }
    }),
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin({
      API_URL: 'http://localhost:8080'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === 'production' ?
            MiniCssExtractPlugin.loader :
            'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ]
            }
          },
          'sass-loader'
        ],
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.ts', '.tsx']
  }
};
