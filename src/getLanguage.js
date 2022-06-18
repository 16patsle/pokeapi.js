import { getResource } from './getResource';

export function getLanguage(id) {
  return getResource('language/' + id);
}
