describe('getEvolutionChain()', function () {
  it('should return evolution chain data', function () {
    runs(function () {
      flag = false;

      PokeApi.getEvolutionChain(18).then(function (response) {
        if (response.chain.species.name === 'oddish') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct evolution chain data should have been returned',
      10000
    );
  });
});

describe('getEvolutionTrigger()', function () {
  it('should return evolution trigger data', function () {
    runs(function () {
      flag = false;

      PokeApi.getEvolutionTrigger(4).then(function (response) {
        if (response.name === 'shed') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct evolution trigger data should have been returned',
      10000
    );
  });
});
