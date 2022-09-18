import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center mt-10 space-y-10">
      <div className="flex space-x-2">
        <button>
          <RiArrowLeftSFill style={{ fontSize: '1.8em', margin: '-5 0' }} />
        </button>
        <select className="border border-black px-2">
          <option value={2003}>2003</option>
          <option value={2004}>2004</option>
          <option value={2005}>2005</option>
          <option value={2006}>2006</option>
          <option value={2007}>2007</option>
          <option value={2008}>2008</option>
          <option value={2009}>2009</option>
          <option value={2010}>2010</option>
          <option value={2011}>2011</option>
          <option value={2012}>2012</option>
          <option value={2013}>2013</option>
          <option value={2014}>2014</option>
          <option value={2015}>2015</option>
        </select>
        <button>
          <RiArrowRightSFill style={{ fontSize: '1.8em', margin: '-5 0' }} />
        </button>
      </div>
      <div>
        <table className="border">
          <thead>
            <tr className="border">
              <th colSpan={2}>CLASSIFICAÇÃO</th>
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
            <tr className="border">
              <td>1</td>
              <td>Fluminense</td>
              <td>45</td>
              <td>32</td>
              <td>32</td>
              <td>0</td>
              <td>0</td>
              <td>100</td>
              <td>-1</td>
              <td>101</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
