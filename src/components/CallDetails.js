import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { callsDetailes } from '../data'
import { useParams } from 'react-router-dom'
import phoneIcon from '../assets/images/phone_forwarded_FILL0_wght400_GRAD0_opsz24.png'
import calenderIcon from '../assets/images/calendar_today_FILL0_wght400_GRAD0_opsz24.png'
import timeIcon from '../assets/images/schedule_FILL0_wght400_GRAD0_opsz24.png'

export default function CallDetails() {
  const { id } = useParams()
  const [callDetails, setCallDetails] = useState(getCallById())
  const [date, time] = callsDetailes[0].callTime.split('-')

  function getCallById() {
    return callsDetailes.filter((call) => call.id === +id)
  }

  return (
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
        className='w-full'
      />
    </div>
  )
}
