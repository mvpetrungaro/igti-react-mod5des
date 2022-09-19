import useSWR from "swr";
import { Match } from "../models/Match";
import { SequenceGenerator } from "../utils/ArrayUtils";

const api = "http://localhost:3001";
const queriesByYear = generateQueries();

function generateQueries() {
  const queries: any = {
    2003: "numero=46",
    2004: "numero=46",
    2005: "numero=42",
  };

  for (let year of [...SequenceGenerator(2006, 2015)]) {
    queries[year] = "number=38";
  }

  return queries;
}

type ApiMatches = {
  partidas: Match[];
};

export function useAPI(year: number) {
  const { data, error } = useSWR<ApiMatches[]>(
    `${api}/${year}?${queriesByYear[year]}`,
    async (url: string) => {
      const res = await fetch(url);
      return await res.json();
    }
  );

  const matches = data?.[0].partidas;

  return { matches, error };
}
