/* tslint:disable */
/* eslint-disable */
import { Cliente } from '../models/cliente';
import { Conta } from '../models/conta';
export interface Agencia {
  codigo?: string | null;
  contas?: Array<Conta> | null;
  criadoPor?: Cliente | null;
  dataCriacao?: string | null;
  dataUltimaAlteracao?: string | null;
  deletado?: boolean | null;
  detetadoEm?: string | null;
  detetadoPor?: Cliente | null;
  internalId?: string | null;
  nome?: string | null;
}
