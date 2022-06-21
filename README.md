# pokeapi.js

A simple JavaScript wrapper for the PokéAPI (v2), with simple built-in caching

## General

This is a simple wraper for the [PokéAPI](http://pokeapi.co) by [Paul Hallett](http://phalt.co). It is written in JavaScript and uses modern technologies like fetch and async/await.

## Install

pokeapi.js v2.0 is available both in UMD and ES module format.

### ES modules

If you are using ES modules in your project (through Webpack or Rollup for example), the ES module version (`dist/pokeapi.esm.js`) should be chosen automatically by your module bundler. Just install it from npm:

```sh
npm install @16patsle/pokeapi.js
```

Then you just import it normally:

```javascript
import * as PokeApi from '@16patsle/pokeapi.js';
```

Individual named exports like `getPokemon` or `getBerry` is available and recommended.

### With a script tag (browser global)

Like you would expect:

```html
<script src="path/to/pokeapi.js"></script>
```

`PokeApi` is now a global variable.

If you place `pokeapi.js.map` in the same folder, you will get a better debug experience in the browser dev tools.

### CommonJS or another module system

Just import the library like you would normally. For example for Commonjs:

```javascript
const PokeApi = require('@16patsle/pokeapi.js');
```

## Usage

You access the methods from this library with the variable `PokeApi` (or whatever you chose to name it if you are using a module loader). All methods can be accessed on this object, but can also be imported separately when used as an ES module.

### Example

This code will fetch the data for Cinccino, the Pokémon with id 573, and log the name to the console.

```javascript
PokeApi.getPokemon(573).then(function (response) {
  console.log(response.name); // "cinccino"
});
```

### API Docs

Docs for the data the API returns can be found on the [API's website](https://pokeapi.co/docsv2/). The method names follow the same naming scheme as the API endpoints and is structured the same way. There are also TypeScript types available for the returned data, but this does not cover all everything yet.

## Building

To build the project, first run `npm install`. Then, use `npm run build` to build the files.

## Testing

This library uses [Testem](https://github.com/testem/testem) along with [Jasmine](https://jasmine.github.io/) for testing. To run the test suite in CI mode:

```sh
npm test
```

In development:

```sh
npm run test:dev
```

## Compatibility

The library supports modern browsers through the default browserslist config. Browsers that support async/await should also support the other necessary features.
