import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css' 
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { loginUser } from '../../slices/loginSlice';

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

  return (
    <div>
        <form className='login-form' autoComplete='off' onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' required />
            </div>
            {loginState.error && <p className='error-message'>{loginState.message}</p>}
            <br></br>
            <button type='submit'>Login</button>
            <Link to='/Register'>
            <button className='register'>Register</button>
            </Link>
        </form>
    </div>
  )
}

export default Login