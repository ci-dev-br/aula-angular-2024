/* tslint:disable */
import { Cliente } from './cliente';
import { Conta } from './conta';
export interface Agencia {
  codigo?: null | string;
  contas?: null | Array<Conta>;
  criadoPor?: null | Cliente;
  dataCriacao?: null | string;
  dataUltimaAlteracao?: null | string;
  deletado?: null | boolean;
  detetadoEm?: null | string;
  detetadoPor?: null | Cliente;
  internalId?: null | string;
  nome?: null | string;
}
