import { getResource } from './getResource';

export function getGeneration(id) {
  return new Promise(function (resolve, reject) {
    getResource('generation/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPokedex(id) {
  return new Promise(function (resolve, reject) {
    getResource('pokedex/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getVersion(id) {
  return new Promise(function (resolve, reject) {
    getResource('version/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getVersionGroup(id) {
  return new Promise(function (resolve, reject) {
    getResource('version-group/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
