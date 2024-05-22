/* tslint:disable */
import { Conta } from './conta';
export interface Cliente {
  contas?: null | Array<Conta>;
  criadoPor?: null | Cliente;
  dataCriacao?: null | string;
  dataUltimaAlteracao?: null | string;
  email?: null | string;
  internalId?: null | string;
  senha?: null | string;
  username?: null | string;
}
