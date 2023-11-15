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
      uv: agent.average,
      pv: callByAgent[0]?.evaluation,
    }
  })

  const dataAgentDuration = avergeDuration.map((agent, index) => {
    return {
      name: `Wk.${index + 1}`,
      uv: agent.average,
      pv: callByAgent[0]?.duration,
    }
  })

  
  return (
    <div className="mt-28 p-16 flex justify-between">
      <BarChart width={600} height={450} data={dataAgentDuration}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey={`Agerage Call duration : ${agentData[0].agent}`}
          fill="#8884d8"
        />
        <Bar dataKey="Agerage Call duration Team " fill="#82ca9d" />
      </BarChart>

      <LineChart
        width={600}
        height={450}
        data={dataAgentEvaluation}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={`QA score of ${agentData[0].agent}`}
          stroke="#8884d8"
        />
        <Line type="monotone" dataKey="QA score of Team" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
