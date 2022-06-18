import { getResource } from './getResource';

export function getEncounterMethod(id: number | string) {
  return getResource('encounter-method/' + id);
}

export function getEncounterCondition(id: number | string) {
  return getResource('encounter-condition/' + id);
}

export function getEncounterConditionValue(id: number | string) {
  return getResource('encounter-condition-value/' + id);
}
