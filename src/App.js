import { useEffect, useState } from 'react'
import { callsDetailes } from './data'
import { handleFilters } from './helper'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import CallDetails from './components/CallDetails'

function App() {
  const [callsData, setCallsData] = useState(callsDetailes)

  const [filterCalls, setFilterCalls] = useState({
    callFrom_to: '',
    by_teams: '',
    by_agents: '',
    by_groups: '',
    by_moments: '',
    by_callDurtion: '',
    by_action: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFilterCalls((prevFilterCalls) => {
      return {
        ...prevFilterCalls,
        [name]: value,
      }
    })
  }

  useEffect(() => {
    // Check if all filters get target by use helper function
    setCallsData(handleFilters(filterCalls))
  }, [filterCalls])

  return (
    <div className="py-20 px-12">
      <h1 className="mb-2 text-xl font-medium">enthu.ai</h1>

      <section className="flex">
        <Sidebar filterCalls={filterCalls} handleChange={handleChange} />

        <Main
          callsData={callsData}
          filterCalls={filterCalls}
          handleChange={handleChange}
        />
      </section>

      <CallDetails />
      
    </div>
  )
}

export default App
