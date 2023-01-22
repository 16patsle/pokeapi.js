import { getResource } from './getResource';
import type { ResourceList } from './types/Common';
import type { Language } from './types/Language';

export function getLanguage(id: number): Promise<Language>;
export function getLanguage(id: string): Promise<ResourceList>;
export function getLanguage(id: number | string) {
  return getResource('language/' + id);
}
