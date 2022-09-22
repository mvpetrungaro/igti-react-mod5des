import { TeamRecord } from "../../models/TeamRecord";
import styles from "./Standings.module.css";

type StandingsParams = { teamsRecords: TeamRecord[] };

function getImgSrcFromTeam(team: string): string {
  return `/img/${team
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_")}.png`;
}

export default function Standings({ teamsRecords }: StandingsParams) {
  return (
    <div>
      <table className="standings-table border">
        <thead>
          <tr className={`border ${styles["space-between-cells"]}`}>
            <th colSpan={3}>CLASSIFICAÇÃO</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
          </tr>
        </thead>
        <tbody>
          {teamsRecords.map((teamRecord, i) => (
            <tr key={i} className={`border ${styles["space-between-cells"]}`}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={getImgSrcFromTeam(teamRecord.team)}
                  alt={teamRecord.team}
                  style={{ width: "1.5em" }}
                />
              </td>
              <td>{teamRecord.team}</td>
              <td>{teamRecord.record.total_pontos}</td>
              <td>{teamRecord.record.total_jogos}</td>
              <td>{teamRecord.record.total_vitorias}</td>
              <td>{teamRecord.record.total_empates}</td>
              <td>{teamRecord.record.total_derrotas}</td>
              <td>{teamRecord.record.total_gols_marcados}</td>
              <td>{teamRecord.record.total_gols_sofridos}</td>
              <td>
                {teamRecord.record.total_gols_marcados -
                  teamRecord.record.total_gols_sofridos}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
