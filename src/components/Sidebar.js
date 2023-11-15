import React, { useState } from 'react'
import { iconArray } from '../data'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false)

  function handleDropdownClick() {
    setIsClicked((prevState) => !prevState)
  }

  const sidebarItems = iconArray.map((icon) => {
    return (
      <Link to="/">
        <img
          key={icon.id}
          className={`sidebar--icon`}
          src={icon.icon}
          alt="icon"
        />
      </Link>
    )
  })

  return (
    <div
      className="h-full w-12 mr-4 py-1.5 flex flex-col items-center
    justify-center bg-white"
    >
      <button
        type=""
        className={`${isClicked ? 'opacity-50' : ''} `}
        onClick={handleDropdownClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -960 960 960"
          width="20"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      <div
        className={`${isClicked ? 'py-7 flex flex-col gap-y-7 ' : 'hidden'}`}
      >
        {sidebarItems}
      </div>
    </div>
  )
}
