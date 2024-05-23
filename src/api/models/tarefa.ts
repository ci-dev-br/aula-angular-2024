/* tslint:disable */
/* eslint-disable */
import { Cliente } from '../models/cliente';
export interface Tarefa {
  criadoPor?: Cliente | null;
  dataCriacao?: string | null;
  dataUltimaAlteracao?: string | null;
  deletado?: boolean | null;
  descricao?: string | null;
  detetadoEm?: string | null;
  detetadoPor?: Cliente | null;
  internalId?: string | null;
}
