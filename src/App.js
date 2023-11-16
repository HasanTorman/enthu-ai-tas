import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { callsDetailes } from './data'
import { handleFilters } from './helper'
import Filter from './components/Filter'
import Main from './components/Main'
import CallDetails from './components/CallDetails'
import Charts from './components/Charts'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

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
    <div className="w-full  h-full relative ">
      <section className="w-full flex justify-center">
        <Sidebar />
        <Header />
      </section>

      <Routes>
        <Route
          path="/"
          element={
            <section className="flex w-full pl-16 ml-4">
              <Filter filterCalls={filterCalls} handleChange={handleChange} />
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
