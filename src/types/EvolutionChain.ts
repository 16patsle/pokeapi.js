import type { NamedAPIResource } from './Common';

export type EvolutionChain = {
  /**
   * The identifier for this resource.
   */
  id: number;
  /**
   * The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon.
   */
  baby_trigger_item: NamedAPIResource;
  /**
   * The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order.
   */
  chain: ChainLink;
};

export type ChainLink = {
  /**
   * Whether or not this link is for a baby Pokémon. This would only ever be true on the base link.
   */
  is_baby: boolean;
  /**
   * The Pokémon species at this point in the evolution chain.
   */
  species: NamedAPIResource;
  /**
   * All details regarding the specific details of the referenced Pokémon species evolution.
   */
  evolution_details: EvolutionDetail[];
  /**
   * A List of chain objects
   */
  evolves_to: ChainLink[];
};

export type EvolutionDetail = {
  /**
   * The item required to cause evolution this into Pokémon species.
   */
  item: NamedAPIResource;
  /**
   * The type of event that triggers evolution into this Pokémon species.
   */
  trigger: NamedAPIResource;
  /**
   * The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species.
   */
  gender: 1 | 2 | 3;
  /**
   * The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species.
   */
  held_item: NamedAPIResource;
  /**
   * The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species.
   */
  known_move: NamedAPIResource;
  /**
   * The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species.
   */
  known_move_type: NamedAPIResource;
  /**
   * The location the evolution must be triggered at.
   */
  location: NamedAPIResource;
  /**
   * The minimum required level of the evolving Pokémon species to evolve into this Pokémon species.
   */
  min_level: number;
  /**
   * The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species.
   */
  min_happiness: number;
  /**
   * The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species.
   */
  min_beauty: number;
  /**
   * The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species.
   */
  min_affection: number;
  /**
   * Whether or not it must be raining in the overworld to cause evolution this Pokémon species.
   */
  needs_overworld_rain: number;
  /**
   * The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species.
   */
  party_species: NamedAPIResource;
  /**
   * The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species.
   */
  party_type: NamedAPIResource;
  /**
   * The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense.
   */
  relative_physical_stats: 1 | 0 | -1;
  /**
   * The required time of day. Day or night.
   */
  time_of_day: 'day' | 'night';
  /**
   * Pokémon species for which this one must be traded.
   */
  trade_species: NamedAPIResource;
  /**
   * Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.
   */
  turn_upside_down: number;
};
