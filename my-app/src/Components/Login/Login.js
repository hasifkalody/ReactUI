import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navTo=useNavigate()

    const handleLogin = () => {

        if (!username || !password) {
            setErrorMessage('credentials mismatch');
            return;
        }
        const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    
        const matchedUser= userDetails.username==username && userDetails.password==password;
        
        if (matchedUser) {
            navTo('/DashBoard')
        } else {
            navTo('/LoginPage')
        }
    };

    const handlePassword=()=>{
        navTo('/handlePasswordPage')
    }

    useEffect(() => {
        return () => {
            setErrorMessage('');
        };
    }, []);

    return (
        <div className="login-container">
            <h1>Login</h1>
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
            <button onClick={handleLogin} className="login-button">
                Login
            </button>
            <button onClick={handlePassword} className="login-button">
                Forgot Password
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default Login
