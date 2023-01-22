import { getResource } from './getResource';

export function getMove(id: number | string) {
  return getResource('move/' + id);
}

export function getMoveAilment(id: number | string) {
  return getResource('move-ailment/' + id);
}

export function getMoveBattleStyle(id: number | string) {
  return getResource('move-battle-style/' + id);
}

export function getMoveCategory(id: number | string) {
  return getResource('move-category/' + id);
}

export function getMoveDamageClass(id: number | string) {
  return getResource('move-damage-class/' + id);
}

export function getMoveLearnMethod(id: number | string) {
  return getResource('move-learn-method/' + id);
}

export function getMoveTarget(id: number | string) {
  return getResource('move-target/' + id);
}
