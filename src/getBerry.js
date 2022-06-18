import { getResource } from './getResource';

export function getBerry(id) {
  return getResource('berry/' + id);
}

export function getBerryFirmness(id) {
  return getResource('berry-firmness/' + id);
}

export function getBerryFlavor(id) {
  return getResource('berry-flavor/' + id);
}
