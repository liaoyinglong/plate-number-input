const HtmlWebPackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
var libraryName = 'plateNumberInput'
var outputFile = libraryName + '.js'
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: outputFile,
    library: libraryName,
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './example/index.html',
      filename: './index.html',
    }),
  ],
  optimization: {},
}
