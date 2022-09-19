import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { SequenceGenerator } from "../../utils/ArrayUtils";

type YearNavigationParam = {
  selectedYear: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (selectedYear: number) => void;
};

export default function YearNavigation({
  selectedYear,
  onPrevious,
  onNext,
  onSelect,
}: YearNavigationParam) {
  function handleYearChange(yearSelection: string) {
    if (!!onSelect) {
      onSelect(+yearSelection);
    }
  }

  return (
    <nav className="flex space-x-2">
      <button onClick={onPrevious}>
        <RiArrowLeftSFill style={{ fontSize: "1.8em", margin: "-5 0" }} />
      </button>
      <select
        className="border border-black px-2"
        value={selectedYear}
        onChange={(e) => handleYearChange(e.target.value)}
      >
        {[...SequenceGenerator(2003, 2015)].map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button onClick={onNext}>
        <RiArrowRightSFill style={{ fontSize: "1.8em", margin: "-5 0" }} />
      </button>
    </nav>
  );
}
