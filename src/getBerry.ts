import { getResource } from './getResource';

export function getBerry(id: number | string) {
  return getResource('berry/' + id);
}

export function getBerryFirmness(id: number | string) {
  return getResource('berry-firmness/' + id);
}

export function getBerryFlavor(id: number | string) {
  return getResource('berry-flavor/' + id);
}
