import React from 'react'
import '../index.css'
import Button from './Button'

const Headers = ({ text }) => {
  return (
    <header className="header">
      <h1>{text}</h1>
      <Button color="green" text="Add" />
    </header>
  )
}

export default Headers
