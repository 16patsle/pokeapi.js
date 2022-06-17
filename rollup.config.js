import { babel } from '@rollup/plugin-babel';
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
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser()
  ]
};
