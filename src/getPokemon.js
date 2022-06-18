import { getResource } from './getResource';

export function getAbility(id) {
  return getResource('ability/' + id);
}

export function getCharacteristic(id) {
  return getResource('characteristic/' + id);
}

export function getEggGroup(id) {
  return getResource('egg-group/' + id);
}

export function getGender(id) {
  return getResource('gender/' + id);
}

export function getGrowthRate(id) {
  return getResource('growth-rate/' + id);
}

export function getNature(id) {
  return getResource('nature/' + id);
}

export function getPokeathlonStat(id) {
  return getResource('pokeathlon-stat/' + id);
}

export function getPokemon(id) {
  return getResource('pokemon/' + id);
}

export function getPokemonColor(id) {
  return getResource('pokemon-color/' + id);
}

export function getPokemonForm(id) {
  return getResource('pokemon-form/' + id);
}

export function getPokemonHabitat(id) {
  return getResource('pokemon-habitat/' + id);
}

export function getPokemonShape(id) {
  return getResource('pokemon-shape/' + id);
}

export function getPokemonSpecies(id) {
  return getResource('pokemon-species/' + id);
}

export function getStat(id) {
  return getResource('stat/' + id);
}

export function getType(id) {
  return getResource('type/' + id);
}
