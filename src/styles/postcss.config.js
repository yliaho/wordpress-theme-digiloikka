const autoprefixer = require('autoprefixer')

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    cssnano: {},
    autoprefixer: { grid: true }
  }
}
