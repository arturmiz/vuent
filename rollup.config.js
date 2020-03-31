import path from 'path'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser as uglify } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import license from 'rollup-plugin-license';
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
        }
      }),
      css({
        output: 'dist/vuent.css',
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      production && uglify(),
      license({
        thirdParty: {
          allow: '(MIT OR Apache-2.0)',
          output: {
            file: path.join(__dirname, 'dist', 'dependencies.md'),
          }
        }
      })
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
      css({
        output: false
      })
    ],
    external
  }
];
