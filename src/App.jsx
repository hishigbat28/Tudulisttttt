import React from 'react'
import './index.css'
import Headers from './components/Headers'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="container">
      <Headers text="Todo" />
      <Tasks />
    </div>
  )
}

export default App
