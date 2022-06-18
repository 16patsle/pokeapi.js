import { getResource } from './getResource';

export function getLocation(id: number | string) {
  return getResource('location/' + id);
}

export function getLocationArea(id: number | string) {
  return getResource('location-area/' + id);
}

export function getPalParkArea(id: number | string) {
  return getResource('pal-park-area/' + id);
}

export function getRegion(id: number | string) {
  return getResource('region/' + id);
}
