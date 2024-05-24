import { Inject, Pipe, PipeTransform } from "@angular/core";
import { TRADUCAO } from "./traducoes.token";
@Pipe({
    name: 't'
})
export class TraducaoPipe implements PipeTransform {
    constructor(
        @Inject(TRADUCAO)
        private readonly traducoes?: { [key: string]: string }) { }
    transform(value: any, ...args: any[]) {
        return this.traducoes[value] || value;
    }
}