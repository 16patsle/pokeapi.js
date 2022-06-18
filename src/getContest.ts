import { getResource } from './getResource';

export function getContestType(id: number | string) {
  return getResource('contest-type/' + id);
}

export function getContestEffect(id: number | string) {
  return getResource('contest-effect/' + id);
}

export function getSuperContestEffect(id: number | string) {
  return getResource('super-contest-effect/' + id);
}
