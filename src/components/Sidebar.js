import React from 'react'
import { sidebarData } from '../data'

export default function Sidebar() {
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
            name={item.filterBy}
          >
            <option className="text-xs" value="all">
              all
            </option>
            <option className="text-xs" value="op 1">
              op 1
            </option>
            <option className="text-xs" value="op 2">
              op 2
            </option>
          </select>
        )}

        {item.filterBy === 'Call Duraion' && (
          <input className="mt-2" type="range" min="0" max="60" />
        )}
      </>
    )
  })

  return (
    <aside className="px-9 py-1 mt-4 flex flex-col bg-white w-1/12 min-w-fit">
      <h3 className="text-sm font-semibold">Group: All</h3>
      {sidebarConfig}
    </aside>
  )
}
