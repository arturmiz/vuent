import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser as uglify } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import serve from 'rollup-plugin-serve';
import pkg from './package.json';

const input = 'src/index.js';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const external = [
  'vue'
];

export default [
  {
    input,
    output: {
      name: 'vuent',
      file: pkg.browser,
      format: 'umd',
      sourcemap: false,
      globals: {
        'vue': 'Vue'
      }
    },
    plugins: [
      resolve(),
      commonjs(),
      vue({
        css: false,
        template: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }),
      css({
        output: 'dist/vuent.css',
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      !production && serve({
        contentBase: '',
        port: 8888,
        verbose: false
      }),
      production && uglify()
    ],
    external
  },
  {
    input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
    ],
    plugins: [
      resolve(),
      vue({
        css: false,
        template: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }),
    ],
    external
  }
];
