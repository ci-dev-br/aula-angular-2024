/* tslint:disable */
import { Cliente } from './cliente';
import { Conta } from './conta';
export interface Agencia {
  codigo?: null | string;
  contas?: null | Array<Conta>;
  criadoPor?: null | Cliente;
  dataCriacao?: null | string;
  dataUltimaAlteracao?: null | string;
  internalId?: null | string;
  nome?: null | string;
}
