import { getResource } from './getResource';

export function getEvolutionChain(id) {
  return getResource('evolution-chain/' + id);
}

export function getEvolutionTrigger(id) {
  return getResource('evolution-trigger/' + id);
}
