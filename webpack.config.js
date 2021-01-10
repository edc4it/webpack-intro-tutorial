const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // bundle's entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: '[name].js', // name of the generated bundle
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
  ],
};
