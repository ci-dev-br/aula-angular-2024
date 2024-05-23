/* tslint:disable */
/* eslint-disable */
import { Conta } from '../models/conta';
export interface Cliente {
  contas?: Array<Conta> | null;
  criadoPor?: Cliente | null;
  dataCriacao?: string | null;
  dataUltimaAlteracao?: string | null;
  deletado?: boolean | null;
  detetadoEm?: string | null;
  detetadoPor?: Cliente | null;
  email?: string | null;
  internalId?: string | null;
  senha?: string | null;
  username?: string | null;
}
