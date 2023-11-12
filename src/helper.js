import { callsDetailes } from './data'

export function handleFilters(filterCalls) {
    
  //  check if filterCalls object have any selected data to filter main call data state

  let filteredData = callsDetailes

  if (filterCalls.callFrom_to) {
    filteredData = filteredData.filter((row) =>
      row.to_from.includes(filterCalls.callFrom_to),
    )
  }

  if (filterCalls.by_teams && filterCalls.by_teams !== 'All') {
    filteredData = filteredData.filter(
      (row) => row.team === filterCalls.by_teams,
    )
  }

  if (filterCalls.by_agents && filterCalls.by_agents !== 'All') {
    filteredData = filteredData.filter(
      (row) => row.agent.toLowerCase() === filterCalls.by_agents,
    )
  }

  return filteredData
}
