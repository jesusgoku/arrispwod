import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'arrispwod',
      },
      {
        file: pkg.browser.replace(/\.js$/, '.min.js'),
        format: 'umd',
        name: 'arrispwod',
        plugins: [terser()],
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      resolve(),
      commonjs(),
    ],
  },
];
