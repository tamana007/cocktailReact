import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>oops!it's a dead end
      <h2>error page</h2>
   
        <Link className='btn btn-primary' to="/">Back to home page</Link>
       
      
      
      </div>
    </section>
  )
}

export default Error
