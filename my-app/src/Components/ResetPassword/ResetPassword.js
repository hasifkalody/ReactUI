import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './ResetPassword.css'

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navTo=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setErrorMessage('please input email correctly');
            return;
        }
        const userDetails = JSON.parse(localStorage.getItem('userDetails'))
        const matchedemail = userDetails.username == email
        if (matchedemail) {
            navTo('/NewPassword')
        } else {
            navTo('/LoginPage')
        }
    
    }


    return (
        <div className="forgot-password-container">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Reset Password</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default ResetPassword
