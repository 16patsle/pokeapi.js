import type { AbilityEffectChange } from './Ability';
import type {
  APIResource,
  FlavorText,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
} from './Common';

export type Move = {
  /**
   * The identifier for this resource.
   */
  id: number;
  /**
   * The name for this resource.
   */
  name: string;
  /**
   * The percent value of how likely this move is to be successful.
   */
  accuracy: number;
  /**
   * The percent value of how likely it is this moves effect will take effect.
   */
  effect_chance: number | null;
  /**
   * Power points. The number of times this move can be used.
   */
  pp: number;
  /**
   * A value between -8 and 8. Sets the order in which moves are executed during battle. See {@link http://bulbapedia.bulbagarden.net/wiki/Priority Bulbapedia} for greater detail.
   */
  priority: number;
  /**
   * The base power of this move with a value of 0 if it does not have a base power.
   */
  power: number;
  /**
   * A detail of normal and super contest combos that require this move.
   */
  contest_combos: ContestComboSets | null;
  /**
   * The type of appeal this move gives a Pokémon when used in a contest.
   */
  contest_type: NamedAPIResource | null;
  /**
   * The effect the move has when used in a contest.
   */
  contest_effect: APIResource | null;
  /**
   * The type of damage the move inflicts on the target, e.g. physical.
   */
  damage_class: NamedAPIResource;
  /**
   * The effect of this move listed in different languages.
   */
  effect_entries: VerboseEffect[];
  /**
   * The list of previous effects this move has had across version groups of the games.
   */
  effect_changes: AbilityEffectChange[];
  /**
   * List of Pokemon that can learn the move
   */
  learned_by_pokemon: NamedAPIResource[];
  /**
   * The flavor text of this move listed in different languages.
   */
  flavor_text_entries: MoveFlavorText[];
  /**
   * The generation in which this move was introduced.
   */
  generation: NamedAPIResource;
  /**
   * A list of the machines that teach this move.
   */
  machines: MachineVersionDetail[];
  /**
   * Metadata about this move
   */
  meta: MoveMetaData | null;
  /**
   * The name of this resource listed in different languages.
   */
  names: Name[];
  /**
   * A list of move resource value changes across version groups of the game.
   */
  past_values: PastMoveStatValues[];
  /**
   * A list of stats this moves effects and how much it effects them.
   */
  stat_changes: MoveStatChange[];
  /**
   * The effect the move has when used in a super contest.
   */
  super_contest_effect: APIResource | null;
  /**
   * 	

The type of target that will receive the effects of the attack.
   */
  target: NamedAPIResource;
  /**
   * The elemental type of this move.
   */
  type: NamedAPIResource;
};

export type ContestComboSets = {
  /**
   * A detail of moves this move can be used before or after, granting additional appeal points in contests.
   */
  normal: ContestComboDetail;
  /**
   * 	A detail of moves this move can be used before or after, granting additional appeal points in super contests.
   */
  super: ContestComboDetail;
};

export type ContestComboDetail = {
  /**
   * 	A list of moves to use before this move.
   */
  use_before: NamedAPIResource[];
  /**
   * 	A list of moves to use after this move.
   */
  use_after: NamedAPIResource[];
};

export type MoveFlavorText = FlavorText;

export type MoveMetaData = {
  /**
   * The status ailment this move inflicts on its target.
   */
  ailment: NamedAPIResource;
  /**
   * The category of move this move falls under, e.g. damage or ailment.
   */
  category: NamedAPIResource;
  /**
   * The minimum number of times this move hits. Null if it always only hits once.
   */
  min_hits: number | null;
  /**
   * The maximum number of times this move hits. Null if it always only hits once.
   */
  max_hits: number | null;
  /**
   * The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
   */
  min_turns: number | null;
  /**
   * The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
   */
  max_turns: number | null;
  /**
   * HP drain (if positive) or Recoil damage (if negative), in percent of damage done.
   */
  drain: number;
  /**
   * The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.
   */
  healing: number;
  /**
   * Critical hit rate bonus.
   */
  crit_rate: number;
  /**
   * The likelihood this attack will cause an ailment.
   */
  ailment_chance: number;
  /**
   * The likelihood this attack will cause the target Pokémon to flinch.
   */
  flinch_chance: number;
  /**
   * The likelihood this attack will cause a stat change in the target Pokémon.
   */
  stat_chance: number;
};

export type MoveStatChange = {
  /**
   * The amount of change.
   */
  change: number;
  /**
   * The stat being affected.
   */
  stat: NamedAPIResource;
};

export type PastMoveStatValues = {
  /**
   * The percent value of how likely this move is to be successful.
   */
  accuracy: number;
  /**
   * The percent value of how likely it is this moves effect will take effect.
   */
  effect_chance: number;
  /**
   * The base power of this move with a value of 0 if it does not have a base power.
   */
  power: number;
  /**
   * Power points. The number of times this move can be used.
   */
  pp: number;
  /**
   * The effect of this move listed in different languages.
   */
  effect_entries: VerboseEffect[];
  /**
   * The elemental type of this move.
   */
  type: NamedAPIResource;
  /**
   * The version group in which these move stat values were in effect.
   */
  version_group: NamedAPIResource;
};
