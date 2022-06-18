import { getResource } from './getResource';

export function getEvolutionChain(id: number | string) {
  return getResource('evolution-chain/' + id);
}

export function getEvolutionTrigger(id: number | string) {
  return getResource('evolution-trigger/' + id);
}
