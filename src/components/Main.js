import React from 'react'
import { tableHead } from '../data'
import { Link } from 'react-router-dom'

export default function Main(props) {
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

  const tableRows = props.callsData.map((row, rowIndex) => (
    <Link to={`/call/${row.id}`}>
      <tr
        key={row.id}
        className={`m-4 flex justify-between ${
          rowIndex % 2 === 0 ? 'bg-gray-200' : ''
        }`}
      >
        <td>{row.callTime}</td>
        <td>{row.duration}</td>
        <td>{row.callerType}</td>
        <td>{row.agent}</td>
        <td>{row.team}</td>
        <td>
          {row.from} / {row.to}
        </td>
        <td>{row.type}</td>
        <td>{row.moments}</td>
        <td>{row.scriptComp}</td>
        <td>{row.action}</td>
      </tr>
    </Link>
  ))

  return (
    <div className="mx-9 py-24 w-11/12">
      <input
        type="text"
        placeholder="Search by Number (To / From)"
        onChange={props.handleChange}
        name="callFrom_to"
        value={props.filterCalls.callFrom_to}
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="m-4 flex justify-between">{tableHeader}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  )
}
