import React, { useState } from 'react'
import { callsDetailes } from '../data'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts'

import { getAverageCallDuration, getCallById } from '../helper'
import { useParams } from 'react-router-dom'

export default function Charts() {
  const [avergeDuration, setAvergeDuration] = useState(getAverageCallDuration())
  const { id } = useParams()

  const callByAgent = getCallById(id)
  const teamEvaluation = callsDetailes.map((call) => {
    return {
      evaluation: call.evaluation,
    }
  })

  const dataAgentEvaluation = teamEvaluation.map((agent, index) => {
    return {
      name: `Wk.${index + 1}`,
      uv: agent.evaluation,
      pv: callByAgent[0].evaluation,
    }
  })

  const data = [
    {
      name: 'Week 1',
      pv: avergeDuration[0].average,
      uv: callByAgent[0].evaluation,

      amt: 2400,
    },
    {
      name: 'Week 2',
      pv: avergeDuration[1]?.average,
      uv: callByAgent[0].evaluation,

      amt: 2210,
    },
    {
      name: 'Week 3',
      pv: avergeDuration[2]?.average,
      uv: callByAgent[0].evaluation,

      amt: 2290,
    },
    {
      name: 'Week 4',
      pv: avergeDuration[3]?.average,
      uv: callByAgent[0].evaluation,
      amt: 2000,
    },
  ]

  return (
    <div className="mt-28 flex justify-between">
      <BarChart width={600} height={450} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey={`Agerage Call duration : ${callByAgent[0].agent}`}
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
          dataKey={`QA score of ${callByAgent[0].agent}`}
          stroke="#8884d8"
        />
        <Line type="monotone" dataKey="QA score of Team" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
