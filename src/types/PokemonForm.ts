import type { Name, NamedAPIResource } from "./Common";

export type PokemonForm = {
  /**
   * The identifier for this resource.
   */
  id: number;
  /**
   * The name for this resource.
   */
  name: string;
  /**
   * The order in which forms should be sorted within all forms.
   * Multiple forms may have equal order, in which case they should fall back on sorting by name.
   */
  order: number;
  /**
   * The order in which forms should be sorted within a species' forms.
   */
  form_order: number;
  /**
   * True for exactly one form used as the default for each Pokémon.
   */
  is_default: boolean;
  /**
   * Whether or not this form can only happen during battle.
   */
  is_battle_only: boolean;
  /**
   * Whether or not this form requires mega evolution.
   */
  is_mega: boolean;
  /**
   * The name of this form.
   */
  form_name: string;
  /**
   * The Pokémon that can take on this form.
   */
  pokemon: NamedAPIResource;
  /**
   * A list of details showing types this Pokémon form has.
   */
  types: PokemonFormType[];
  /**
   * A set of sprites used to depict this Pokémon form in the game.
   */
  sprites: PokemonFormSprites;
  /**
   * The version group this Pokémon form was introduced in.
   */
  version_group: NamedAPIResource;
  /**
   * The form specific full name of this Pokémon form, or empty if the form does not have a specific name.
   */
  names: Name[];
  /**
   * The form specific form name of this Pokémon form, or empty if the form does not have a specific name.
   */
  form_names: Name[];
};

type PokemonFormType = {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;
  /**
   * The type the referenced Form has.
   */
  type: NamedAPIResource;
}

type PokemonFormSprites = {
  /**
   * The default depiction of this Pokémon form from the front in battle.
   */
  front_default: string | null;
  /**
   * The shiny depiction of this Pokémon form from the front in battle.
   */
  front_shiny: string | null;
  /**
   * The default depiction of this Pokémon form from the back in battle.
   */
  back_default: string | null;
  /**
   * The shiny depiction of this Pokémon form from the back in battle.
   */
  back_shiny: string | null;
};
