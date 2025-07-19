import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../slices/registerSlice';

const Register = () => {
    const registerState = useSelector((state) => state.register);
    const dispatch = useDispatch();

    function handleRegister(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target['confirm-password'].value;

    
        if (password === confirmPassword) {
          dispatch(registerUser({ name, email, password }));
            if (registerState.token) {
                console.log("Registration successful:", registerState.message);
                alert(registerState.message);
                window.location.href = '/login'; 
            } else {
                console.error("Registration failed:", registerState.error);
                alert(registerState.message || "Registration failed");
            }
        } else {
          console.error("Passwords do not match");
            alert("Passwords do not match");
        }
    }

  return (
    <div>
        <form className='register-form' autoComplete='off' onSubmit={handleRegister}>
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
                <p>Already a user? Click here</p>
            </Link>
        </form>
    </div>
  )
}

export default Register