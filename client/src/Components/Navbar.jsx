import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>TodoList</h1>
      <Link to='/Login'>
      <button className='Logout'>Logout</button>
      </Link>
    </div>
  )
}

export default Navbar