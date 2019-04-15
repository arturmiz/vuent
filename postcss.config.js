const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const inlineSVG = require('postcss-inline-svg');

module.exports = {
  plugins: [
    autoprefixer(),
    mqpacker(),
    inlineSVG({
      path: 'src'
    }),
    cssnano({
      preset: 'default'
    })
  ]
}
