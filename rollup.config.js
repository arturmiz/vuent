import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const input = 'src/index.js';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input,
    output: {
      name: 'vuent',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      vue({
        css: 'dist/vuent.css',
        compileTemplate: true,
        compileOptions: {
          preserveWhitespace: false
        }
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      production && uglify()
    ],
    external: [
      'vue'
    ]
  },
  {
    input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
