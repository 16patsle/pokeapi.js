import { getResource } from './getResource';

export function getGeneration(id) {
  return getResource('generation/' + id);
}

export function getPokedex(id) {
  return getResource('pokedex/' + id);
}

export function getVersion(id) {
  return getResource('version/' + id);
}

export function getVersionGroup(id) {
  return getResource('version-group/' + id);
}
