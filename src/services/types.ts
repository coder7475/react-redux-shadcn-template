export interface PokemonListResponse {
    results: Pokemon[];
    count: number;
    next: string | null;
    previous: string | null;
}

export interface Pokemon {
    abilities: Ability[]
    base_experience: number
    cries: Cries
    forms: Form[]
    game_indices: Index[]
    height: number
    held_items: string[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[]
    name: string
    order: number
    past_abilities: PastAbility[]
    past_types: string[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
  }
  
  export interface Ability {
    ability: Ability2
    is_hidden: boolean
    slot: number
  }
  
  export interface Ability2 {
    name: string
    url: string
  }
  
  export interface Cries {
    latest: string
    legacy: string
  }
  
  export interface Form {
    name: string
    url: string
  }
  
  export interface Index {
    game_index: number
    version: Version
  }
  
  export interface Version {
    name: string
    url: string
  }
  
  export interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
  }
  
  export interface Move {
    name: string
    url: string
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    order?: number
    version_group: VersionGroup
  }
  
  export interface MoveLearnMethod {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface PastAbility {
    abilities: Ability3[]
    generation: Generation
  }
  
  export interface Ability3 {
    ability: string | null
    is_hidden: boolean
    slot: number
  }
  
  export interface Generation {
    name: string
    url: string
  }
  
  export interface Species {
    name: string
    url: string
  }
  
  export interface Sprites {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
    other: Other
    versions: Versions
  }
  
  export interface Other {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
    showdown: Showdown
  }
  
  export interface DreamWorld {
    front_default: string
    front_female: string | null
  }
  
  export interface Home {
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface OfficialArtwork {
    front_default: string
    front_shiny: string
  }
  
  export interface Showdown {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface Versions {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
  }
  
  export interface GenerationI {
    "red-blue": RedBlue
    yellow: Yellow
  }
  
  export interface RedBlue {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
  }
  
  export interface Yellow {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
  }
  
  export interface GenerationIi {
    crystal: Crystal
    gold: Gold
    silver: Silver
  }
  
  export interface Crystal {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
  }
  
  export interface Gold {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
  }
  
  export interface Silver {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
  }
  
  export interface GenerationIii {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
  }
  
  export interface Emerald {
    front_default: string
    front_shiny: string
  }
  
  export interface FireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  export interface RubySapphire {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  export interface GenerationIv {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
  }
  
  export interface DiamondPearl {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface HeartgoldSoulsilver {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface Platinum {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface GenerationV {
    "black-white": BlackWhite
  }
  
  export interface BlackWhite {
    animated: Animated
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface Animated {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
  }
  
  export interface OmegarubyAlphasapphire {
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface XY {
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface GenerationVii {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
  }
  
  export interface Icons {
    front_default: string
    front_female: string | null
  }
  
  export interface UltraSunUltraMoon {
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
  }
  
  export interface GenerationViii {
    icons: Icons2
  }
  
  export interface Icons2 {
    front_default: string
    front_female: string | null
  }
  
  export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  export interface Stat2 {
    name: string
    url: string
  }
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }
  