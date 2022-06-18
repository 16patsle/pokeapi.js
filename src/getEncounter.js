import { getResource } from './getResource';

export function getEncounterMethod(id) {
  return getResource('encounter-method/' + id);
}

export function getEncounterCondition(id) {
  return getResource('encounter-condition/' + id);
}

export function getEncounterConditionValue(id) {
  return getResource('encounter-condition-value/' + id);
}
