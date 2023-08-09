import React from 'react'
import '../index.css'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3 key={task.id}>
        {task.text} <FaTimes style={{ color: 'red' }} />
      </h3>
    </div>
  )
}

export default Task
