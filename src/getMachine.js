import { getResource } from './getResource';

export function getMachine(id) {
  return getResource('machine/' + id);
}
