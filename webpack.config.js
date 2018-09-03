//@ts-check

const webpack = require('webpack')
const path = require('path')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**
 * Holy shit, type checking for Webpack configuration! (works out of the box if you're on vscode)
 * @type webpack.Configuration
 */
const config = {
  mode: 'production',
  devtool: 'cheap-eval-source-map',
  entry: './src/entry.ts',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'site.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  stats: {
    assets: false,
    entrypoints: false,
    children: false
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new WebpackBar({
      profile: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
      // disable: process.env.NODE_ENV === 'development'
    })
  ]
}

module.exports = config
