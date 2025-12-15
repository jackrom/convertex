// src/types/txtReport.ts

export type TxtModule = 'ESF' | 'ERI' | 'ECP' | 'EFE';

export interface TxtReportValue {
  /** Ej: 'esf_301_actual', 'eri_4001', 'ecp_990101_301', 'efe_9505' */
  id: string;
  module: TxtModule;
  reportId: string;        // id interno del reporte
  value: number;
  /** marca para saber si hay que sincronizar con backend */
  dirty: boolean;
  /** timestamp ms de última actualización local */
  updatedAt: number;
}

/** Estructura que usarán las secciones del viewer */
export type TxtSectionValues = Record<string, TxtReportValue>;
