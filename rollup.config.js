import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { uglify } from 'rollup-plugin-uglify';
import css from 'rollup-plugin-css-only';
import pkg from './package.json';
import cssnano from 'cssnano';

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
      sourcemap: true,
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
        },
        style: {
          postcssPlugins: [
            cssnano({
              preset: 'default'
            })
          ]
        }
      }),
      css({
        output: 'dist/vuent.css',
      }),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers']
      }),
      production && uglify()
    ],
    external
  },
  {
    input,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
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
