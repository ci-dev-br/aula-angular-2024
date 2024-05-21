import { EventEmitter } from "@angular/core";


export class Tarefa {
    change = new EventEmitter<Tarefa>();
    private _numero?: string;
    public get numero(): string {
        return this._numero;
    }
    public set numero(value: string) {
        this._numero = value;
    }
    private _descricao?: string;
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }

    constructor(
        data: any
    ) {
        Object.assign(this, data);
    }

    // toString() {
    //     return `${this.numero} - ${this.descricao}`
    // }
}