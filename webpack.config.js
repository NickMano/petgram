const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaPlugin = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WebpackPwaPlugin({
      name: 'Petgram - Your App of pet\'s photos',
      short_name: 'Petgram',
      description: 'With Petgram you can find photos of pets easily',
      background_color: '#fff',
      theme_color: '#07BEB8',
      icons: [{
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        type: 'image/png',
        purpose: 'any maskable',
      }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
