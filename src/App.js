import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from "./components/Main"
import { sidebarData } from './data'

function App() {
  const [filterCalls, setFilterCalls] = useState(sidebarData)

  const sidebarConfig = filterCalls.map((item) => {
    return <Sidebar key={item.id} {...item} />
  })

  return (
    <div className="py-20 px-12">
      <h1 className="mb-2 text-xl font-medium">enthu.ai</h1>
      <section className="flex">  
        <Sidebar  {...filterCalls} />
        <Main/>
      </section>
    </div>
  )
}

export default App
