import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.png'

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href = '/login';
  }

  return (
    <div className='Navbar'>
      <img src={logoImage} height='32px' alt='logo' />
      <div className="logout-container">
        <Link to='/Login'>
          <button className='Logout' onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar