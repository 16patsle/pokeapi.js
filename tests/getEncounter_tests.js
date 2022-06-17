describe('getEncounterMethod()', function () {
  it('should return encounter method data', function () {
    runs(function () {
      flag = false;

      PokeApi.getEncounterMethod(7).then(function (response) {
        if (response.name === 'headbutt') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct encounter method data should have been returned',
      10000
    );
  });
});

describe('getEncounterCondition()', function () {
  it('should return encounter condition data', function () {
    runs(function () {
      flag = false;

      PokeApi.getEncounterCondition(6).then(function (response) {
        if (response.name === 'season') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct encounter condition data should have been returned',
      10000
    );
  });
});

describe('getEncounterConditionValue()', function () {
  it('should return encounter condition value data', function () {
    runs(function () {
      flag = false;

      PokeApi.getEncounterConditionValue(6).then(function (response) {
        if (response.condition.name === 'radar') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct encounter condition value data should have been returned',
      10000
    );
  });
});
