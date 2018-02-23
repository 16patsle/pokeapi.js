import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'PokeApi',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    minify( {
      // Options for babel-minify.
    })
  ]
};
