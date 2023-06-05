import React from 'react'
import im1 from '../../Assets/Header/account 1.png'
import im2 from '../../Assets/Header/headset (1) 1.png'
import im3 from '../../Assets/Header/notification (2) 1.png'
import './Header.css'

function Header() {
    return (
        <div className='header-main'>
            <div className='header-inner'>
                <img className='nav-logo' src={im1} alt="image" />
                <img className='nav-logo' src={im2} alt="image" />
                <img className='nav-logo' src={im3} alt="image" />
            </div>
        </div>
    )
}

export default Header
