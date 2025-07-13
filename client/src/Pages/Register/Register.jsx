import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <form className='register-form' autoComplete='off'>
            <h2>Register</h2>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' required />
            </div>
            <div className='form-group'>
                <label htmlFor='confirm-password'>Confirm Password:</label>
                <input type='password' id='confirm-password' name='confirm-password' required />
            </div>
            <button type='submit'>Register</button>
            <Link to='/login'>
                <a>Already a user? Click here</a>
            </Link>
        </form>
    </div>
  )
}

export default Register