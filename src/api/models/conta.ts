/* tslint:disable */
import { Agencia } from './agencia';
import { Cliente } from './cliente';
export interface Conta {
  agencia?: null | Agencia;
  cliente?: null | Cliente;
  criadoPor?: null | Cliente;
  dataCriacao?: null | string;
  dataUltimaAlteracao?: null | string;
  envio?: null | Array<string>;
  internalId?: null | string;
  numero?: null | string;
  reepao?: null | Array<string>;
  saldoCorrente?: null | number;
}
