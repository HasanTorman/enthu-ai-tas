import React, { useState } from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { getAverageCallDuration } from '../helper'

export default function Charts() {
  const [avergeDuration, setAvergeDuration] = useState(getAverageCallDuration())
  const data = [
    {
      name: 'Week 1',
      uv: 2400,
      pv: avergeDuration[0].average,
      amt: 2400,
    },
    {
      name: 'Week 2',
      uv: 1390,
      pv: avergeDuration[1]?.average,
      amt: 2210,
    },
    {
      name: 'Week 3',
      uv: 9800,
      pv: avergeDuration[2]?.average,
      amt: 2290,
    },
    {
      name: 'Week 4',
      uv: 3900,
      pv: avergeDuration[3]?.average,
      amt: 2000,
    },
  ]

  return (
    <div className="mt-28">
      <ResponsiveContainer width="40%" height="30%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
