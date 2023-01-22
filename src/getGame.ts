import { getResource } from './getResource';
import type { ResourceList } from './types/Common';
import type { Version } from './types/Version';

export function getGeneration(id: number | string) {
  return getResource('generation/' + id);
}

export function getPokedex(id: number | string) {
  return getResource('pokedex/' + id);
}

export function getVersion(id: number): Promise<Version>;
export function getVersion(id: string): Promise<ResourceList>;
export function getVersion(id: number | string) {
  return getResource('version/' + id);
}

export function getVersionGroup(id: number | string) {
  return getResource('version-group/' + id);
}
