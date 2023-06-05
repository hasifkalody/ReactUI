import React from 'react'
// images
import im1 from '../../Assets/dashboard2.png'
import im2 from '../../Assets/campaign 1.png'
import im3 from '../../Assets/command 1.png'
import im5 from '../../Assets/devices1 1.png'
import im6 from '../../Assets/history 5.png'
import im7 from '../../Assets/media library 1.png'
import im8 from '../../Assets/zone 2.png'
import im9 from '../../Assets/channels1 1.png'
import log from '../../Assets/logo-14 new 1.png'
import './NavBar.css'

function NavBar() {
    return (
        <div className='nav-container'>
            <img className='nav-logo' src={log} alt="image" />
            <nav>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im1} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> Dashboard</span>
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im2} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> Compaigns</span>
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im3} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> Commands</span>
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im8} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> Zones</span>
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im9} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> Channels</span>
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im5} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> Devices</span>
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im7} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> Media Library</span>
                    </div>
                </div>
                <div className='nav-items'>
                    <div className='items-left'>
                        <img src={im6} alt="image" />
                    </div>
                    <div className='items-righ'>
                        <span> History</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
