import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../slices/loginSlice';
import logoImage from '../../assets/logo.png';

const Login = () => {
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(loginUser({ email, password }))
      .then((response) => {
        if (response.error) {
          console.error("Login failed:", response.payload.message);
        }
        else if (response.payload.token) {
          console.log("Login successful:", response.payload);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      })
  }

  if (loginState.token) {
    localStorage.setItem('token', loginState.token);
    localStorage.setItem('userId', loginState.userId);
    window.location.href = '/';

  }

  return (
    <div>
      <form className='login-form' autoComplete='off' onSubmit={handleLogin}>
        <img src={logoImage} height='32px' alt='login-icon' />
        <div className="form-container">
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Enter your email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' placeholder='Enter your password' required />
          </div>
          {loginState.error ? <p className='error'>{loginState.message}</p> : <p className='error'></p>}
          <button type='submit'>Login</button>
          <Link to='/Register'>
            <p className='register'>Not a user yet? Click to Register</p>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login