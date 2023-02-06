import React from 'react'
import { Link } from 'react-router-dom'

const ErrorHandler = () => {
  return (
    <div>
      <h1>OOPss No such page exist !!!!</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default ErrorHandler