const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const extractScss = new MiniCssExtractPlugin({
  filename: '[name].css'
  // disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/entry.ts',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'site.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
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
  plugins: [extractScss]
}
