# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2022-06-20

### Changed

- BREAKING: The library now only has named exports, so you can import each separate part. To mimic the previous usage, try importing all from the package with `import * as PokeApi from '@16patsle/pokeapi.js';` Usage with a script tag and the global Pokeapi variable should be identical to before.
- By default, the library now only attempts to support recent versions of modern browsers. If you need support for older browsers you can transpile the library using a tool like Babel.
- Converted code to TypeScript for type safety and autocomplete support. Some popular endpoints also have proper types for the return values (this is a work in process), which enables type-safe usage of API data.
- Implemented caching in IndexedDB instead of localStorage. This avoids issues where localStorage is full, as IndexedDB has a higher storage quota.
- Refactored to use modern JS features like async/await. This should not change anything for end users.
- Updated all dependencies

## [1.1.3] - 2018-11-23

### Fixed

- Fixed redirecting issue causing requests to fail (again)
- Fix typo in the code of last release

## [1.1.2] - 2018-11-23

### Fixed

- Fixed redirecting issue causing requests to fail

## [1.1.1] - 2018-02-23

### Changed

- Updated README.md to reflect new package name

## [1.1.0] - 2018-02-23

### Changed

- Project is split up in different modules, using ES modules
- Built using Rollup, transpiled using Babel
- Now available both in UMD (including global, AMD, CommonJS) and ES module formats
- Import only what you need!
- Minified, sourcemap available

## [1.0.0] - 2018-02-23

### Added

- Initial version of library

[unreleased]: https://github.com/16patsle/pokeapi.js/tree/develop
[2.0.0]: https://github.com/16patsle/pokeapi.js/tree/v2.0.0
[1.1.3]: https://github.com/16patsle/pokeapi.js/tree/v1.1.3
[1.1.2]: https://github.com/16patsle/pokeapi.js/tree/v1.1.2
[1.1.1]: https://github.com/16patsle/pokeapi.js/tree/v1.1.1
[1.1.0]: https://github.com/16patsle/pokeapi.js/tree/v1.1.0
[1.0.0]: https://github.com/16patsle/pokeapi.js/tree/v1.0
