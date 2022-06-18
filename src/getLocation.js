import { getResource } from './getResource';

export function getLocation(id) {
  return getResource('location/' + id);
}

export function getLocationArea(id) {
  return getResource('location-area/' + id);
}

export function getPalParkArea(id) {
  return getResource('pal-park-area/' + id);
}

export function getRegion(id) {
  return getResource('region/' + id);
}
