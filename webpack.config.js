const HtmlWebPackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const webpack = require('webpack')

const libraryName = 'plateNumberInput'
const { version } = require('./package.json')
const banner = `
  ${libraryName}.js v${version}
  (c) 2018 - 2018 liaoyinglong
  https://github.com/liaoyinglong/plate-number-input
`

const baseConfig = {
  entry: './src/index.js',
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
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './example/index.html',
      filename: './index.html',
    }),
    new webpack.BannerPlugin({
      banner,
      entryOnly: true,
    }),
  ],
}

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'

  if (isDev) {
    return {
      ...baseConfig,
      output: {
        path: resolve(__dirname, './dist'),
        filename: `${libraryName}.js`,
        library: libraryName,
        libraryExport: 'default',
        libraryTarget: 'umd',
        globalObject: 'this',
      },
    }
  }
  return [
    {
      ...baseConfig,
      output: {
        path: resolve(__dirname, './dist'),
        filename: `${libraryName}.min.js`,
        library: libraryName,
        libraryExport: 'default',
        libraryTarget: 'umd',
        globalObject: 'this',
      },
    },
    {
      ...baseConfig,
      output: {
        path: resolve(__dirname, './dist'),
        filename: `${libraryName}.js`,
        library: libraryName,
        libraryExport: 'default',
        libraryTarget: 'umd',
        globalObject: 'this',
      },
      optimization: {
        minimize: false,
      },
    },
  ]
}
