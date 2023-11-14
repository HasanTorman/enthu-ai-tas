import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { callsDetailes } from '../data'
import { Link, useParams } from 'react-router-dom'
import phoneIcon from '../assets/images/phone_forwarded_FILL0_wght400_GRAD0_opsz24.png'
import calenderIcon from '../assets/images/calendar_today_FILL0_wght400_GRAD0_opsz24.png'
import timeIcon from '../assets/images/schedule_FILL0_wght400_GRAD0_opsz24.png'
import { getCallById } from '../helper'

export default function CallDetails() {
  const { id } = useParams()
  const [callDetails, setCallDetails] = useState(getCallById(id))
  const [date, time] = callsDetailes[0].callTime.split(',')

  return (
    <div>
      <div className="w-5">
        <Link to={`/call/${id}/statistics`}>
          <button className="p-2 bg-blue-600 flex items-center justify-center text-white rounded-lg font-medium text-sm">
            Charts
          </button>
        </Link>
      </div>

      <div className="mt-10 w-6/12 border-2 rounded-sm">
        <div className="flex p-3">
          <img className="mr-3" src={phoneIcon} alt="phoneIcon" />
          <h4 className="mr-3">{callDetails[0].agent}</h4>
          <img className="mr-3" src={calenderIcon} alt="calenderIcon" />
          <h4 className="mr-3">{date}</h4>{' '}
          <img className="mr-3" src={timeIcon} alt="timeIcon" />
          <h4>{time}</h4>
        </div>
        <div className="flex gap-28 px-3 mb-10 text-xs text-gray-400 ">
          <h5> From : {callDetails[0].from}</h5>
          <h5> To : {callDetails[0].to}</h5>
        </div>
        <ReactAudioPlayer
          src={callDetails[0].callTrack[`audio_${id}`]}
          controls
          className="w-full"
        />
      </div>
    </div>
  )
}
