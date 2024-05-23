/* tslint:disable */
import { Cliente } from './cliente';
export interface Tarefa {
  criadoPor?: null | Cliente;
  dataCriacao?: null | string;
  dataUltimaAlteracao?: null | string;
  deletado?: null | boolean;
  descricao?: null | string;
  detetadoEm?: null | string;
  detetadoPor?: null | Cliente;
  internalId?: null | string;
}
