import moment from 'moment'
import { callsDetailes } from './data'

//  check if filterCalls object have any selected data to filter main call data state
export function handleFilters(filterCalls) {
  let filteredData = callsDetailes

  if (filterCalls.callFrom_to) {
    filteredData = filteredData.filter((row) =>
      row.from.includes(filterCalls.callFrom_to),
    )
  }

  if (filterCalls.by_teams && filterCalls.by_teams !== 'All') {
    filteredData = filteredData.filter(
      (row) => row.team === filterCalls.by_teams,
    )
  }

  if (filterCalls.by_agents && filterCalls.by_agents !== 'All') {
    filteredData = filteredData.filter(
      (row) => row.agent.toLowerCase() === filterCalls.by_agents.toLowerCase(),
    )
  }

  if (filterCalls.by_type && filterCalls.by_type !== 'All') {
    filteredData = filteredData.filter(
      (row) => row.type === filterCalls.by_type,
    )
  }

  if (filterCalls.by_callDurtion) {
    filteredData = filteredData.filter((row) => {
      const filterDuration = moment.duration(filterCalls.by_callDurtion)

      return (
        moment.duration(row.duration).milliseconds() ===
        filterDuration.milliseconds()
      )
    })
  }

  return filteredData
}

// this function to categorize calls by week
export function categorizeDataByWeek() {
  let weekCategorize = {}
  const currentMonth = moment().month()
  const currentWeek = moment().isoWeek()
  callsDetailes.forEach((call) => {
    const callWeek = moment(call.callTime).isoWeek()

    if (currentMonth === moment(call.callTime).month()) {
      if (currentWeek === callWeek) {
        if (!weekCategorize[callWeek]) {
          weekCategorize[callWeek] = []
        }
        weekCategorize[callWeek].push(call)
      }
    }
  })

  if (Object.keys(weekCategorize).length > 4) {
    weekCategorize = {}
  }

  return weekCategorize
}

// this function to get average duration for each week
export function getAverageCallDuration() {
  const weeksCallsData = categorizeDataByWeek()
  const averageDurations = []

  for (const key in weeksCallsData) {
    const callsPerWeek = weeksCallsData[key]

    const totalDuration = callsPerWeek.reduce((acc, call) => {
      return acc.add(moment.duration(call.duration))
    }, moment.duration(0))

    const averageDuration = moment(totalDuration / callsPerWeek.length)

    averageDurations.push({
      week: key,
      average: averageDuration.format('mm:ss'),
    })
  }

  return averageDurations
}

export function getAverageEvaluation() {
  const weeksCallsData = categorizeDataByWeek()
  const averageEvaluation = []

  for (const key in weeksCallsData) {
    const callsPerWeek = weeksCallsData[key]

    const totalEvaluuation = callsPerWeek.reduce((acc, call) => {
      return acc + call.evaluation
    }, 0)

    const average = totalEvaluuation / callsPerWeek.length

    averageEvaluation.push({
      week: key,
      average: average,
    })
  }

  return averageEvaluation
}

console.log(getAverageEvaluation());
export function getCallById(id) {
  return callsDetailes.filter((call) => call.id === +id)
}
