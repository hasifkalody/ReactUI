import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Register.css'


function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navTo=useNavigate()

  const handleRegistration = () => {
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    // Simulating saving registration details to local storage
    const userDetails = {
      username,
      password,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Clearing input fields after successful registration
    setUsername('');
    setPassword('');
    setErrorMessage('');

    // navigate to Login page
    navTo('/LoginPage')
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleRegistration} className="register-button">
        Register
      </button>
      <button onClick={()=>{navTo('/LoginPage')}} className="register-button">
        Login
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Register
