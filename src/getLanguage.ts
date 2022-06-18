import { getResource } from './getResource';

export function getLanguage(id: number | string) {
  return getResource('language/' + id);
}
