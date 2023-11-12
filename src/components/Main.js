import React, { useState } from 'react'
import { tableHead, callsDetailes } from '../data'

export default function Main() {

  const [callsData, setCallsData] = useState(callsDetailes)

  const [filterCalls, setFilterCalls] = useState({
    callFrom_to: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFilterCalls((prevFilterCalls) => {
      return {
        ...prevFilterCalls,
        [name]: value,
      }
    })
  }

  const tableHeader = tableHead.map((item, index) => {
    return (
      <th
        className="py-2 px-4 text-left text-blue-600 opacity-60 max-w-sm break-words"
        key={index}
      >
        {item}
      </th>
    )
  })

  const tableRows = callsData.map((row, rowIndex) => (
    <tr
      key={row.id}
      className={`m-4 flex justify-between ${
        rowIndex % 2 === 0 ? 'bg-gray-200' : ''
      }`}
    >
      <td>{row.callTiem}</td>
      <td>{row.duration}</td>
      <td>{row.callerType}</td>
      <td>{row.agent}</td>
      <td>{row.team}</td>
      <td>{row.to_from}</td>
      <td>{row.type}</td>
      <td>{row.moments}</td>
      <td>{row.scriptComp}</td>
      <td>{row.action}</td>
    </tr>
  ))

  return (
    <div className="mx-9 py-24 w-11/12">
      <input
        type="text"
        placeholder="Search by Number (To / From)"
        onChange={handleChange}
        name="callFrom_to"
        value={filterCalls.callFrom_to}
      />
      <table className="w-full  border-collapse">
        <thead>
          <tr className="m-4 flex justify-between">{tableHeader}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  )
}
