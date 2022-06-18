import { getResource } from './getResource';

export function getContestType(id) {
  return getResource('contest-type/' + id);
}

export function getContestEffect(id) {
  return getResource('contest-effect/' + id);
}

export function getSuperContestEffect(id) {
  return getResource('super-contest-effect/' + id);
}
