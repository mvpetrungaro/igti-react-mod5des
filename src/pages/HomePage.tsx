import { useState } from 'react'
import { useAPI } from '../hooks/ApiHook'
import { getTeamsRecordsFromMatches } from '../services/TeamServices'
import Standings from './components/Standings'
import YearNavigation from './components/YearNavigation'

export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState(2003)
  const { matches, error } = useAPI(selectedYear)

  const ErrorMessage = <div>Error loading matches</div>
  const LoadingMessage = <div>Loading...</div>

  let Message = LoadingMessage

  function onPrevious() {
    if (selectedYear > 2003) {
      setSelectedYear(selectedYear - 1)
    }
  }

  function onNext() {
    if (selectedYear < 2015) {
      setSelectedYear(selectedYear + 1)
    }
  }

  function onSelect(yearSelection: number) {
    setSelectedYear(yearSelection)
  }

  if (error) {
    console.log(error)

    Message = ErrorMessage
  }

  return (
    <div className="flex flex-col items-center my-10 space-y-10">
      <YearNavigation
        selectedYear={selectedYear}
        onPrevious={onPrevious}
        onNext={onNext}
        onSelect={onSelect}
      />

      {!matches ? (
        Message
      ) : (
        <Standings teamsRecords={getTeamsRecordsFromMatches(matches)} />
      )}
    </div>
  )
}
