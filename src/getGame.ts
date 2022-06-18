import { getResource } from './getResource';

export function getGeneration(id: number | string) {
  return getResource('generation/' + id);
}

export function getPokedex(id: number | string) {
  return getResource('pokedex/' + id);
}

export function getVersion(id: number | string) {
  return getResource('version/' + id);
}

export function getVersionGroup(id: number | string) {
  return getResource('version-group/' + id);
}
