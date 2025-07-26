import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../slices/registerSlice';
import { set } from 'mongoose';

const Register = () => {
    const registerState = useSelector((state) => state.register);
    const dispatch = useDispatch();
    const [passwordMatch, setPasswordMatch] = useState(true);

    function handleRegister(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target['confirm-password'].value;


        if (password === confirmPassword) {
            setPasswordMatch(true);
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
            setPasswordMatch(false);
        }
    }

    return (
        <div>
            <form className='register-form' autoComplete='off' onSubmit={handleRegister}>
                <div className="form-container">
                    <h2>Create a new account</h2>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' placeholder='Enter your name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='Enter your email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' placeholder='Enter your password' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input type='password' id='confirm-password' name='confirm-password' placeholder='Enter your password again' required />
                    </div>
                    {!passwordMatch ? <p className='error'>Passwords do not match</p> : <p className='error'></p>}
                    <button type='submit'>Register</button>
                    <Link to='/login'>
                        <p className='register'>Already a user? Click here</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register