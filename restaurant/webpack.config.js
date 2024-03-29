const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
   entry: {
     index: './src/index.js',
   },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
   devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
     publicPath: '/',
   },
  optimization: {
    runtimeChunk: 'single',
  },

};