import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css' 

const Login = () => {
  return (
    <div>
        <form className='login-form' autoComplete='off'>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' required />
            </div>
            <br></br>
            <Link to='/'>
            <button type='submit'>Login</button>
            </Link>
            <Link to='/Register'>
            <button className='register'>Register</button>
            </Link>
        </form>
    </div>
  )
}

export default Login