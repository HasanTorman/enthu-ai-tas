import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { callsDetailes } from './data'
import { handleFilters } from './helper'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import CallDetails from './components/CallDetails'
import Charts from './components/Charts'
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
    by_date: '',
    by_type: '',
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
    <div className="py-20 px-12 w-full h-full">
      <section className="flex">
        <h1 className="mb-2 text-xl font-medium flex-auto">enthu.ai</h1>


      </section>

      <Routes>
        <Route
          path="/"
          element={
            <section className="flex">
              <Sidebar filterCalls={filterCalls} handleChange={handleChange} />
              <Main
                callsData={callsData}
                filterCalls={filterCalls}
                handleChange={handleChange}
              />
            </section>
          }
        />

        <Route path="/call/:id" element={<CallDetails />} />
        <Route path="/call/:id/statistics" element={<Charts />} />
      </Routes>
    </div>
  )
}

export default App
