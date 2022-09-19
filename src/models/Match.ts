import { Record } from "./Record";

export interface Match {
  mandante: string;
  visitante: string;
  pontuacao_geral_mandante: Record;
  pontuacao_geral_visitante: Record;
}
