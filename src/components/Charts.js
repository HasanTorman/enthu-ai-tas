import React, { useState } from 'react'
import {
  getAverageCallDuration,
  getCallById,
  getAverageEvaluation,
} from '../helper'
import { useParams } from 'react-router-dom'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  Rectangle,
} from 'recharts'
import moment from 'moment'

export default function Charts() {
  const [avergeDuration, setAvergeDuration] = useState(getAverageCallDuration())
  const [avergeEvaluation, setAvergeEvaluation] = useState(
    getAverageEvaluation(),
  )

  const { id } = useParams()
  const agentData = getCallById(id)

  const callByAgent =
    moment(agentData[0].callTime).month() === moment().month() ? agentData : ''

  const dataAgentEvaluation = avergeEvaluation.map((agent, index) => {
    return {
      name: `Wk.${index + 1}`,
      team_Evaluation: agent.average,
      agent_Evaluation: callByAgent[0]?.evaluation,
      amt: agent.average,
    }
  })

  const dataAgentDuration = avergeDuration.map((agent, index) => {
    return {
      name: `Wk.${index + 1}`,
      team_Duration: agent.average,
      agent_Duration: moment.duration(callByAgent[0]?.duration).asMinutes(),
      amt: agent.average,
    }
  })


  return (
    <div className="mt-28 p-16 flex justify-between">
      <div className='flex flex-col items-start bg-white '>
        <h4 className='py-4 px-16 text-sm font-bold'>Avarege Call Duration Agent Vs. Team</h4>
        <BarChart
          width={750}
          height={350}
          data={dataAgentDuration}
    
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="agent_Duration"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="team_Duration"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
      <div className='flex flex-col items-start bg-white '>
        <h4 className='py-4 px-16 text-sm font-bold'>Avarege Call Duration Agent Vs. Team</h4>

        <LineChart
          className="bg-white"
          width={750}
          height={350}
          data={dataAgentEvaluation}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="agent_Evaluation" stroke="#8884d8" />
          <Line type="monotone" dataKey="team_Evaluation" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  )
}
