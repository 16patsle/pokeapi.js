import { getResource } from './getResource';

export function getMachine(id: number | string) {
  return getResource('machine/' + id);
}
