/* tslint:disable */
import { Cliente } from './cliente';
export interface Tarefa {
  criadoPor?: null | Cliente;
  dataCriacao?: null | string;
  dataUltimaAlteracao?: null | string;
  descricao?: null | string;
  internalId?: null | string;
}
