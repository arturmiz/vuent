const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer(),
    mqpacker(),
    cssnano({
      preset: 'default'
    })
  ]
}
