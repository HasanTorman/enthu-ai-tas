import React from 'react'
import { sidebarData } from '../data'

export default function Sidebar(props) {
  const sidebarConfig = sidebarData.map((item) => {
    return (
      <>
        <label className="text-xs text-gray-500 mt-11" htmlFor={item.filterBy}>
          by {item.filterBy}
        </label>

        {item.filterBy !== 'Call Duraion' && (
          <select
            className="border rounded-md mt-2"
            id={item.filterBy}
            name={item.name}
            value={props.filterCalls[item.name]}
            onChange={props.handleChange}
          >
            {item.filterOptions.map((row, index) => {
              return (
                <option key={index} className="text-xs" value={row}>
                  {row}
                </option>
              )
            })}
          </select>
        )}

        {item.filterBy === 'Call Duraion' && (
          <div>
            <input
              className="mt-2 w-full"
              type="range"
              name={item.name}
              min="0"
              max="60"
              value={props.filterCalls[item.name]}
              onChange={props.handleChange}
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>60</span>
            </div>
          </div>
        )}
      </>
    )
  })

  return (
    <aside className="px-9 py-1 mt-4 flex flex-col bg-white w-2/12 min-w-fit">
      <h3 className="text-sm font-semibold">Group: All</h3>
      {sidebarConfig}
    </aside>
  )
}
