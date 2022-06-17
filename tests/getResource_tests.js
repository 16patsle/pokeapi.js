describe('getResource()', function () {
  it('should return correct resource data', function () {
    runs(function () {
      flag = false;

      PokeApi.getResource('pokemon/1').then(function (response) {
        if (response.name === 'bulbasaur') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'json data should have been returned',
      10000
    );
  });

  it('should return correct move resource data', function () {
    runs(function () {
      flag = false;

      PokeApi.getResource('move/13').then(function (response) {
        if (response.power === 80) {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'json data should have been returned',
      10000
    );
  });

  it('should return correct ability resource data', function () {
    runs(function () {
      flag = false;

      PokeApi.getResource('ability/4').then(function (response) {
        if (response.is_main_series === true) {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'json data should have been returned',
      10000
    );
  });

  it('should return all type data when id is not defined', function () {
    runs(function () {
      flag = false;

      PokeApi.getResource('type/' + undefined).then(function (response) {
        if (response.count >= 20) {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'json data should have been returned',
      10000
    );
  });
});

describe('getResourceFromUrl()', function () {
  it('should return correct resource data based on the url', function () {
    runs(function () {
      flag = false;

      PokeApi.getResourceFromUrl('https://pokeapi.co/api/v2/ability/4').then(
        function (response) {
          if (response.is_main_series === true) {
            flag = true;
          }
        }
      );
    });

    waitsFor(
      function () {
        return flag;
      },
      'json data should have been returned',
      10000
    );
  });

  it('should return all resource data based on url when no id is defined', function () {
    runs(function () {
      flag = false;

      PokeApi.getResourceFromUrl(
        'https://pokeapi.co/api/v2/type/' + undefined
      ).then(function (response) {
        if (response.count >= 20) {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'json data should have been returned',
      10000
    );
  });
});
