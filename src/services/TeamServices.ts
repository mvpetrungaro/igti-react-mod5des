import { Match } from "../models/Match";
import { TeamRecord } from "../models/TeamRecord";

export function getTeamsRecordsFromMatches(matches: Match[]): TeamRecord[] {
  return matches
    .map((m) => [
      { team: m.mandante, record: m.pontuacao_geral_mandante } as TeamRecord,
      { team: m.visitante, record: m.pontuacao_geral_visitante } as TeamRecord,
    ])
    .flat()
    .sort(sortTeamsRecords);
}

function sortTeamsRecords(a: TeamRecord, b: TeamRecord) {
  let sort = sortByPoints();

  if (!sort) {
    sort = sortByWins();
  }

  if (!sort) {
    sort = sortByScores();
  }

  return sort;

  function sortByPoints() {
    return b.record.total_pontos - a.record.total_pontos;
  }

  function sortByWins() {
    return b.record.total_vitorias - a.record.total_vitorias;
  }

  function sortByScores() {
    return b.record.total_gols_marcados - a.record.total_gols_marcados;
  }
}
