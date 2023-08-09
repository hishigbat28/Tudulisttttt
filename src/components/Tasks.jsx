import React from 'react'
import '../index.css'
import Task from './Task'

const Tasks = () => {
  const tasks = [
    { id: 1, text: 'Read a book' },
    { id: 2, text: 'Go to Shopping' },
    { id: 3, text: 'Meet Friends' },
  ]

  return (
    <>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </>
  )
}

export default Tasks


