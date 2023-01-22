import { getResource } from './getResource';
import type {
  Pokemon,
  PokemonColor,
  PokemonForm,
  PokemonSpecies,
  ResourceList,
  Stat,
  Type,
} from './types';

export function getAbility(id: number | string) {
  return getResource('ability/' + id);
}

export function getCharacteristic(id: number | string) {
  return getResource('characteristic/' + id);
}

export function getEggGroup(id: number | string) {
  return getResource('egg-group/' + id);
}

export function getGender(id: number | string) {
  return getResource('gender/' + id);
}

export function getGrowthRate(id: number | string) {
  return getResource('growth-rate/' + id);
}

export function getNature(id: number | string) {
  return getResource('nature/' + id);
}

export function getPokeathlonStat(id: number | string) {
  return getResource('pokeathlon-stat/' + id);
}

export function getPokemon(id: number | string): Promise<Pokemon> {
  return getResource('pokemon/' + id);
}

export function getPokemonColor(id: number): Promise<PokemonColor>;
export function getPokemonColor(id: string): Promise<ResourceList>;
export function getPokemonColor(id: number | string) {
  return getResource('pokemon-color/' + id);
}

export function getPokemonForm(id: number | string): Promise<PokemonForm> {
  return getResource('pokemon-form/' + id);
}

export function getPokemonHabitat(id: number | string) {
  return getResource('pokemon-habitat/' + id);
}

export function getPokemonShape(id: number | string) {
  return getResource('pokemon-shape/' + id);
}

export function getPokemonSpecies(id: number): Promise<PokemonSpecies>;
export function getPokemonSpecies(id: string): Promise<ResourceList>;
export function getPokemonSpecies(id: number | string) {
  return getResource('pokemon-species/' + id);
}

export function getStat(id: number): Promise<Stat>;
export function getStat(id: string): Promise<ResourceList>;
export function getStat(id: number | string) {
  return getResource('stat/' + id);
}

export function getType(id: number): Promise<Type>;
export function getType(id: string): Promise<ResourceList>;
export function getType(id: number | string) {
  return getResource('type/' + id);
}
