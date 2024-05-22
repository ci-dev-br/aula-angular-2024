
export interface IPokemon {
    name?: string;
    url?: string;
    front_default?: string;
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

    constructor(data: IPokemon) {
        Object.assign(this, data)
    }

    toJSON() {
        return {
            name: this.name,
            url: this.url,
            front_default: this.front_default,
        }
    }
}