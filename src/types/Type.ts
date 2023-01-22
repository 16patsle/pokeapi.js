import type { GenerationGameIndex, Name, NamedAPIResource } from './Common';

export type Type = {
  /**
   * The identifier for this resource.
   */
  id: number;
  /**
   * The name for this resource.
   */
  name: string;
  /**
   * A detail of how effective this type is toward others and vice versa.
   */
  damage_relations: TypeRelations;
  /**
   * A list of details of how effective this type was toward others and vice versa in previous generations
   */
  past_damage_relations: TypeRelationsPast[];
  /**
   * A list of game indices relevent to this item by generation.
   */
  game_indices: GenerationGameIndex[];
  /**
   * The generation this type was introduced in.
   */
  generation: NamedAPIResource;
  /**
   * The class of damage inflicted by this type.
   */
  move_damage_class: NamedAPIResource;
  /**
   * The name of this resource listed in different languages.
   */
  names: Name[];
  /**
   * A list of details of Pokémon that have this type.
   */
  pokemon: TypePokemon[];
  /**
   * A list of moves that have this type.
   */
  moves: NamedAPIResource[];
};

type TypePokemon = {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;
  /**
   * The Pokémon that has the referenced type.
   */
  pokemon: NamedAPIResource;
};

type TypeRelations = {
  /**
   * A list of types this type has no effect on.
   */
  no_damage_to: NamedAPIResource[];
  /**
   * A list of types this type is not very effect against.
   */
  half_damage_to: NamedAPIResource[];
  /**
   * A list of types this type is very effect against.
   */
  double_damage_to: NamedAPIResource[];
  /**
   * A list of types that have no effect on this type.
   */
  no_damage_from: NamedAPIResource[];
  /**
   * A list of types that are not very effective against this type.
   */
  half_damage_from: NamedAPIResource[];
  /**
   * A list of types that are very effective against this type.
   */
  double_damage_from: NamedAPIResource[];
};

type TypeRelationsPast = {
  /**
   * The last generation in which the referenced type had the listed damage relations
   */
  generation: NamedAPIResource;
  /**
   * The damage relations the referenced type had up to and including the listed generation
   */
  damage_relations: TypeRelations;
};
