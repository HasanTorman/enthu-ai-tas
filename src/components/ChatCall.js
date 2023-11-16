import React, { useState } from 'react'
import expandedIcon from '../assets/images/expand_more_FILL0_wght400_GRAD0_opsz24.png'
import { agentChat } from '../data'

export default function ChatCall() {
  const [isShow, setIsShow] = useState(true)

  function handleExpandedClick() {
    !isShow && setIsShow((prevState) => !prevState)
  }

  function handleExpandedLessClick() {
    isShow && setIsShow((prevState) => !prevState)
  }

  const chatSection = agentChat.map((chat) => {
    return (
      <div
        key={chat.id}
        className={`${isShow ? 'w-full px-6 py-6 grid grid-cols-2 grid-rows-2 text-sm' : 'hidden'} `}
      >
        <div className=" w-full col-start-2 col-end-2 flex flex-col items-end justify-center bg-gray-300 h-16 rounded-br-xl px-2">
          <p className="font-semibold">client</p>
          <p> {chat.client}</p>
        </div>
        <div className="flex flex-col items-start justify-center h-16  rounded-br-xl px-2">
          <p className="font-semibold text-blue-700">Agent</p>
          <p className="text-blue-700">{chat.agent}</p>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="flex w-full justify-end items-center py-5 px-1 border-2 bg-white">
        <svg
          onClick={handleExpandedLessClick}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
        </svg>
        <img
          className="cursor-pointer"
          onClick={handleExpandedClick}
          src={expandedIcon}
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          viewBox="0 -960 960 960"
          width="22"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>{' '}
      </div>
      {chatSection}
    </div>
  )
}
