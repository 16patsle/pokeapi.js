describe('getMachine()', function () {
  it('should return machine data', function () {
    runs(function () {
      flag = false;

      PokeApi.getMachine(12).then(function (response) {
        if (response.move.name === 'hone-claws') {
          flag = true;
        }
      });
    });

    waitsFor(
      function () {
        return flag;
      },
      'correct machine data should have been returned',
      10000
    );
  });
});
