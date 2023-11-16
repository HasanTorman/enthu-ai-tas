import React from 'react'
import { tableHead } from '../data'
import { Link } from 'react-router-dom'
import phoneIcon from '../assets/images/phone_forwarded_FILL0_wght400_GRAD0_opsz24.png'
import phoneOutbound from '../assets/images/phone_callback_FILL0_wght400_GRAD0_opsz24.png'

export default function Main(props) {
  const tableHeader = tableHead.map((item, index) => {
    return (
      <th className=" w-20 py-3 font-semiboldd text-blue-700 " key={index}>
        {item}
      </th>
    )
  })

  const tableRows = props.callsData.map((row, rowIndex) => (
    <Link to={`/call/${row.id}`}>
      <tr
        key={row.id}
        className={`py-2 px-1 flex justify-between items-center text-center text-sm font-semibold text-gray-400  ${
          rowIndex % 2 === 0 ? 'bg-gray-100' : ''
        } `}
      >
        <td>{row.callTime}</td>
        <td>{row.duration}</td>
        <td>
          <span className="bg-blue-200 p-1">{row.callerType}</span>
        </td>
        <td>{row.agent}</td>
        <td>{row.team}</td>
        <td>
          {row.from} _ {row.to}
        </td>
        <td className='flex justify-center '>
          <img
            className="opacity-50"
            src={row.type === 'Inbound' ? phoneIcon : phoneOutbound}
            alt="phoneIcon"
          />
        </td>
        <td>{row.moments}</td>
        <td>{row.scriptComp}</td>
        <td>
          <span
            className={`${
              row.evaluation ? 'bg-[#47D0A0]  ' : 'bg-[#546AF6]'
            } text-white flex items-center justify-center px-4 p-1 rounded-sm`}
          >
            {row.evaluation ? row.action : 'Review'}
          </span>
        </td>
      </tr>
    </Link>
  ))

  return (
    <div className="py-20 px-16 w-10/12 bg-white">
      <input
        type="text"
        placeholder="Search by Number (To / From)"
        onChange={props.handleChange}
        name="callFrom_to"
        value={props.filterCalls.callFrom_to}
        className="w-2/12 mb-8"
      />
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className=" text-base flex justify-between">{tableHeader}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  )
}
