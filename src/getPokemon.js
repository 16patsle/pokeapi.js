import { getResource } from './getResource';

export function getAbility(id) {
  return new Promise(function (resolve, reject) {
    getResource('ability/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getCharacteristic(id) {
  return new Promise(function (resolve, reject) {
    getResource('characteristic/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getEggGroup(id) {
  return new Promise(function (resolve, reject) {
    getResource('egg-group/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getGender(id) {
  return new Promise(function (resolve, reject) {
    getResource('gender/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getGrowthRate(id) {
  return new Promise(function (resolve, reject) {
    getResource('growth-rate/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getNature(id) {
  return new Promise(function (resolve, reject) {
    getResource('nature/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokeathlonStat(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokeathlon-stat/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokemon(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokemon/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokemonColor(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokemon-color/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokemonForm(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokemon-form/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokemonHabitat(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokemon-habitat/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokemonShape(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokemon-shape/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokemonSpecies(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokemon-species/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getStat(id) {
  return new Promise(function (resolve, reject) {
    getResource('stat/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getType(id) {
  return new Promise(function (resolve, reject) {
    getResource('type/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
