import React from 'react'
import { Link } from 'react-router-dom'

const ErrorHandler = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'60vh'}}>
      <h1>OOPss No such page exist !!!!</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default ErrorHandler