import { getResource } from './getResource';

export function getLocation(id) {
  return new Promise(function (resolve, reject) {
    getResource('location/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getLocationArea(id) {
  return new Promise(function (resolve, reject) {
    getResource('location-area/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getPalParkArea(id) {
  return new Promise(function (resolve, reject) {
    getResource('pal-park-area/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getRegion(id) {
  return new Promise(function (resolve, reject) {
    getResource('region/' + id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
