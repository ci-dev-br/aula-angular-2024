import { Ability, Cries, Form, IPokemonModel, Mfe, Species, Sprites, Stat, Type } from "./i-pokemon";
export interface IPokemon extends IPokemonModel {
    name?: string;
    url?: string;
    front_default?: string;
    abilities?: Ability[];
    base_experience?: any;
    cries?: Cries;
    forms?: Form[];
    game_indices?: any[];
    height?: number;
    held_items?: any[];
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: Mfe[];
    // name?: string
    order?: number;
    past_abilities?: any[];
    past_types?: any[];
    species?: Species;
    sprites?: Sprites;
    stats?: Stat[];
    types?: Type[];
    weight?: number;
}
export class Pokemon implements IPokemon {
    private _name?: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _url?: string;
    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    private _front_default?: string;
    public get front_default(): string {
        return this._front_default;
    }
    public set front_default(value: string) {
        this._front_default = value;
    }
    private _abilities?: Ability[];
    public get abilities() {
        return this._abilities;
    }
    public set abilities(v) {
        if (this._abilities === v) return;
        this._abilities = v;
    }
    private _base_experience?: any;
    public get base_experience() {
        return this._base_experience;
    }
    public set base_experience(v) {
        if (this._base_experience === v) return;
        this._base_experience = v;
    }
    private _cries?: Cries;
    public get cries() {
        return this._cries;
    }
    public set cries(v) {
        if (this._cries === v) return;
        this._cries = v;
    }
    private _forms?: Form[];
    public get forms() {
        return this._forms;
    }
    public set forms(v) {
        if (this._forms === v) return;
        this._forms = v;
    }
    private _game_indices?: any[];
    public get game_indices() {
        return this._game_indices;
    }
    public set game_indices(v) {
        if (this._game_indices === v) return;
        this._game_indices = v;
    }
    private _height?: number;
    public get height() {
        return this._height;
    }
    public set height(v) {
        if (this._height === v) return;
        this._height = v;
    }
    private _held_items?: any[];
    public get held_items() {
        return this._held_items;
    }
    public set held_items(v) {
        if (this._held_items === v) return;
        this._held_items = v;
    }
    private _id?: number;
    public get id() {
        return this._id;
    }
    public set id(v) {
        if (this._id === v) return;
        this._id = v;
    }
    private _is_default?: boolean;
    public get is_default() {
        return this._is_default;
    }
    public set is_default(v) {
        if (this._is_default === v) return;
        this._is_default = v;
    }
    private _location_area_encounters?: string;
    public get location_area_encounters() {
        return this._location_area_encounters;
    }
    public set location_area_encounters(v) {
        if (this._location_area_encounters === v) return;
        this._location_area_encounters = v;
    }
    private _moves?: Mfe[];
    public get moves() {
        return this._moves;
    }
    public set moves(v) {
        if (this._moves === v) return;
        this._moves = v;
    }
    private _order?: number;
    public get order() {
        return this._order;
    }
    public set order(v) {
        if (this._order === v) return;
        this._order = v;
    }
    private _past_abilities?: any[];
    public get past_abilities() {
        return this._past_abilities;
    }
    public set past_abilities(v) {
        if (this._past_abilities === v) return;
        this._past_abilities = v;
    }
    private _past_types?: any[];
    public get past_types() {
        return this._past_types;
    }
    public set past_types(v) {
        if (this._past_types === v) return;
        this._past_types = v;
    }
    private _species?: Species;
    public get species() {
        return this._species;
    }
    public set species(v) {
        if (this._species === v) return;
        this._species = v;
    }
    private _sprites?: Sprites;
    public get sprites() {
        return this._sprites;
    }
    public set sprites(v) {
        if (this._sprites === v) return;
        this._sprites = v;
    }
    private _stats?: Stat[];
    public get stats() {
        return this._stats;
    }
    public set stats(v) {
        if (this._stats === v) return;
        this._stats = v;
    }
    private _types?: Type[];
    public get types() {
        return this._types;
    }
    public set types(v) {
        if (this._types === v) return;
        this._types = v;
    }
    private _weight?: number;
    public get weight() {
        return this._weight;
    }
    public set weight(v) {
        if (this._weight === v) return;
        this._weight = v;
    }
    constructor(data: IPokemon) {
        Object.assign(this, data)
    }
    toJSON() {
        return {
            name: this.name,
            url: this.url,
            front_default: this.front_default,
            abilities: this.abilities,
            base_experience: this.base_experience,
            cries: this.cries,
            forms: this.forms,
            game_indices: this.game_indices,
            height: this.height,
            held_items: this.held_items,
            id: this.id,
            is_default: this.is_default,
            location_area_encounters: this.location_area_encounters,
            moves: this.moves,
            order: this.order,
            past_abilities: this.past_abilities,
            past_types: this.past_types,
            species: this.species,
            sprites: this.sprites,
            stats: this.stats,
            types: this.types,
            weight: this.weight,
        }
    }
}