describe('getGeneration()', function () {
  it('should return generation data', function () {
    runs(function () {
      flag = false;

      PokeApi.getGeneration(4).then(function (response) {
        if (response.main_region.name === 'sinnoh') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct generation data should have been returned',
      10000
    );
  });
});

describe('getPokedex()', function () {
  it('should return pokedex data', function () {
    runs(function () {
      flag = false;

      PokeApi.getPokedex(3).then(function (response) {
        if (response.name === 'original-johto') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct pokedex data should have been returned',
      10000
    );
  });
});

describe('getVersion()', function () {
  it('should return version data', function () {
    runs(function () {
      flag = false;

      PokeApi.getVersion(5).then(function (response) {
        if (response.name === 'silver') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct version data should have been returned',
      10000
    );
  });
});

describe('getVersionGroup()', function () {
  it('should return version group data', function () {
    runs(function () {
      flag = false;

      PokeApi.getVersionGroup(10).then(function (response) {
        if (response.name === 'heartgold-soulsilver') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct version group data should have been returned',
      10000
    );
  });
});
