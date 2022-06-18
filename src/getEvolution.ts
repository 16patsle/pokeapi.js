import { getResource } from './getResource';
import type { EvolutionChain } from './types/EvolutionChain';

export function getEvolutionChain(id: number | string): Promise<EvolutionChain> {
  return getResource('evolution-chain/' + id);
}

export function getEvolutionTrigger(id: number | string) {
  return getResource('evolution-trigger/' + id);
}
