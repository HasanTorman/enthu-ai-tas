import React, { useState } from 'react'

export default function CallMoment({ callDetails }) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick(text) {
    if (text === 'Moments') {
      setIsClicked(false)
    } else {
      setIsClicked(true)
    }
  }

  const momentDetails = callDetails.map((call) => {
    return (
      <div
        key={call.id}
        className="flex justify-between 	
      text-gray-400 text-sm pt-5 font-semibold border-b-2 border-t-2 pb-12 "
      >
        <h5>{call.moments.split(' ')[0]}</h5>
        <h5>Features</h5>
        <h5>Achieved</h5>
        <h5></h5>
      </div>
    )
  })

  return (
    <div className="p-6 w-full border-2 rounded-sm shadow-xl mt-2">
      <div className="flex text-center text-sm py-2">
        <div className="flex flex-auto gap-x-10 font-semibold">
          <h4
            onClick={() => handleClick('Moments')}
            className={`${
              !isClicked ? 'border-b-2 border-blue-600' : ''
            } w-1/5 pb-1 cursor-pointer `}
          >
            Moments
          </h4>
          <h4
            onClick={() => handleClick('Analysis')}
            className={`${
              isClicked ? 'border-b-2 border-blue-600 ' : ''
            } w-1/5 pb-1 cursor-pointer `}
          >
            Analysis
          </h4>
        </div>
        <div className="flex gap-x-3">
          <button
            className="bg-blue-700 items-center flex text-white rounded px-2 py-1 "
            type=""
          >
            Add to Playlist
          </button>
          <button
            className="bg-blue-700  items-center  flex text-white rounded px-2 py-1 "
            type=""
          >
            Transcript
          </button>
        </div>
      </div>

      {momentDetails}
      {!isClicked && (
        <div className="py-12 px-8">
          <h2 className="text-base font-semibold text-gray-500 tracking-tighter">
            Commercials
          </h2>
          <table className="w-full flex flex-col w-5/6">
            <thead className="text-left text-sm text-blue-700 flex justify-between items-center py-1">
              <th>#</th>
              <th>Moment Name</th>
              <th>Status</th>
              <th>Keywords spoken</th>
            </thead>
            <tbody className="text-left text-xs flex flex-col gap-y-10 ">
              <tr className="flex justify-between pr-8 ">
                <td>1</td>
                <td>Pricing</td>
                <td>Achieved</td>
                <td></td>
              </tr>
              <tr className="flex justify-between pr-8">
                <td>2</td>
                <td>Payment method</td>
                <td>Achieved</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
