import { getResource } from './getResource';

export function getContestType(id) {
  return new Promise(function (resolve, reject) {
    getResource('contest-type/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getContestEffect(id) {
  return new Promise(function (resolve, reject) {
    getResource('contest-effect/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getSuperContestEffect(id) {
  return new Promise(function (resolve, reject) {
    getResource('super-contest-effect/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
