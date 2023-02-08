import React from 'react'
import { Link } from 'react-router-dom';
import {MdError} from 'react-icons/md';

const ErrorHandler = () => {
  return (
   <section className="notFound">
    <main>
      <div>
        <MdError size={55}/>
        <h1>404</h1>
      </div>

      <p>Page Not Found</p>
      <p>Click Below to go to Home page</p>
      <Link to='/'>Go To Home</Link>
    </main>
   </section>
  )
}

export default ErrorHandler