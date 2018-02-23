# pokeapi.js
A simple JavaScript wrapper for the PokéAPI (v2), with simple built-in caching

## General
This is a simple wraper for the [PokéAPI](http://pokeapi.co) by [Paul Hallett](http://phalt.co). It is written in JavaScript and uses modern technologies like fetch and promises.

## Install
While v1 is working just fine, it has no good way to install yet. The contents of `src/cachedFetch.js` and `src/getResource.js` need to be loaded for the other methods to work. The rest of the files can be included as needed.

## Testing
This library uses Testem along with Jasmine for testing. To run the test suite in CI mode:

```
npm test
```

In development:

```
npm run test:dev
```

## Compatibility
Here is the compatibility table in case you are concerned about support for ancient browsers. To support auto-caching in browsers without support for localStorage, include the polyfill in `src/localStotage.js`.

| Compatibility      | pokeapi.js | pokeapi.js + [fetch polyfill](https://github.com/github/fetch) | pokeapi.js + [fetch polyfill](https://github.com/github/fetch) + [es6-promise polyfill](https://github.com/stefanpenner/es6-promise) |
|--------------------|------------|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Firefox            | 43+        | 29+                                                            | 1+                                                                                                                                   |
| Chrome             | 42+        | 33+                                                            | 1+                                                                                                                                   |
| Opera              | 35+        | 35+                                                            | 11+ (at least)                                                                                                                       |
| IE                 | ?          | 10+                                                            | 7+                                                                                                                                   |
| Edge               | ?          | 13+                                                            | 11+                                                                                                                                  |
| Safari             | ?          | 9+                                                             | 1.2+                                                                                                                                 |
| Chrome for Android | 49+        | 49+                                                            | 1+                                                                                                                                   |
| Android Browser    | 47+        | 4.4.4+                                                         | 4.4.4+ (at least)                                                                                                                    |
| iOS Safari         | ?          | 8.4+                                                           | 8.4+ (at least)                                                                                                                      |
