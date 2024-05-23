/* tslint:disable */
import { Conta } from './conta';
export interface Cliente {
  contas?: null | Array<Conta>;
  criadoPor?: null | Cliente;
  dataCriacao?: null | string;
  dataUltimaAlteracao?: null | string;
  deletado?: null | boolean;
  detetadoEm?: null | string;
  detetadoPor?: null | Cliente;
  email?: null | string;
  internalId?: null | string;
  senha?: null | string;
  username?: null | string;
}
