import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function NewPassword() {
    
    const [password, setPassword] = useState('');
    const [errorMessage, seterrorMessage] = useState('');
    const navTo=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!password) {
            seterrorMessage('please provide a password');
            return;
        }
        const userDetails = JSON.parse(localStorage.getItem('userDetails'))
        console.log(userDetails)
        userDetails.password=password
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        const userDetails2 = JSON.parse(localStorage.getItem('userDetails'))
        console.log(userDetails2)
        navTo('/LoginPage')
    }

    return (
        <div className="forgot-password-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Reset Password</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default NewPassword
