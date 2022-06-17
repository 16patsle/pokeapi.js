import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/pokeapi.js',
    format: 'umd',
    name: 'PokeApi',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
