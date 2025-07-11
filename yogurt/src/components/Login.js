import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './Login.css';

function Login() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmission = (e) => {
        e.preventDefault();
        console.log('Typed password:', password);
        if(password === 'mangomango') {
            navigate('/album');
        } else {
            setError('Incorrect password... Try again!');
            setPassword('');
        }
    };
  return (
    <div className='login-container'>
      <div className='login-card'>
        <h1 className='login-card-title'>🔒 JessieOnly</h1>
        <form className='login-form' onSubmit={handleSubmission}>
          <div className='login-form-field'>
            <input 
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="What's the password?"
             autoFocus
             required/>
          </div>
             <Button 
              type="submit" 
              className='login-form-submit'
              buttonStyle="btn--primary"
              buttonSize="btn--large">
                Unlock
              </Button>
              {error && <p className='login-form-error'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
