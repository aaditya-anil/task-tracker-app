import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return (
    <div className='Navbar'>
      <h1>TodoList</h1>
      <Link to='/Login'>
      <button className='Logout' onClick={handleLogout}>Logout</button>
      </Link>
    </div>
  )
}

export default Navbar