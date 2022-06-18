import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/pokeapi.js',
    format: 'umd',
    name: 'PokeApi',
    sourcemap: true,
    generatedCode: 'es2015',
  },
  plugins: [
    commonjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
