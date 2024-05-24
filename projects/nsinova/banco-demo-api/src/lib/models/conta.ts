/* tslint:disable */
/* eslint-disable */
import { Agencia } from '../models/agencia';
import { Cliente } from '../models/cliente';
export interface Conta {
  agencia?: Agencia | null;
  cliente?: Cliente | null;
  criadoPor?: Cliente | null;
  dataCriacao?: string | null;
  dataUltimaAlteracao?: string | null;
  deletado?: boolean | null;
  detetadoEm?: string | null;
  detetadoPor?: Cliente | null;
  envio?: Array<string> | null;
  internalId?: string | null;
  numero?: string | null;
  reepao?: Array<string> | null;
  saldoCorrente?: number | null;
}
