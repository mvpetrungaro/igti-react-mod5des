import { useState } from "react";
import { useAPI } from "../hooks/ApiHook";
import { getTeamsRecordsFromMatches } from "../services/TeamServices";
import Standings from "./components/Standings";
import YearNavigation from "./components/YearNavigation";

export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState(2003);
  const { matches, error } = useAPI(selectedYear);

  if (error) {
    return <div>{error}</div>;
  }

  function onPrevious() {
    if (selectedYear > 2003) {
      setSelectedYear(selectedYear - 1);
    }
  }

  function onNext() {
    if (selectedYear < 2015) {
      setSelectedYear(selectedYear + 1);
    }
  }

  function onSelect(yearSelection: number) {
    setSelectedYear(yearSelection);
  }

  return (
    <div className="flex flex-col items-center mt-10 space-y-10">
      <YearNavigation
        selectedYear={selectedYear}
        onPrevious={onPrevious}
        onNext={onNext}
        onSelect={onSelect}
      />

      {!matches ? (
        <div>Loading...</div>
      ) : (
        <Standings teamsRecords={getTeamsRecordsFromMatches(matches)} />
      )}
    </div>
  );
}
