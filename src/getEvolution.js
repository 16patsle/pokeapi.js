import { getResource } from './getResource';

export function getEvolutionChain(id) {
  return new Promise(function (resolve, reject) {
    getResource('evolution-chain/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getEvolutionTrigger(id) {
  return new Promise(function (resolve, reject) {
    getResource('evolution-trigger/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
