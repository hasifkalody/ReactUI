import React from 'react'
import './Card1.css'

function Card1() {
    return (
        <div className='card-main'>
            <span className='card-head'>General Information</span>
            <div className='card-cntnts'>
                <div className='card-cntnts1'><span>Projects</span></div>
                <div className='progress-container'>
                    <div className='progress' style={{width:'20%'}}></div>
                </div>
                <div className='card-fraction'><span>02/10</span></div>
            </div>
            <div className='card-cntnts'>
                <div className='card-cntnts1'><span>Users</span></div>
                <div className='progress-container'>
                    <div className='progress'></div>
                </div>
                <div  className='card-fraction'><span>03/03</span></div>
            </div>
            <div className='card-cntnts'>
                <div className='card-cntnts1'><span>Channels</span></div>
                <div className='progress-container'>
                    <div className='progress'></div>
                </div>
                <div className='card-fraction'><span>10/10</span></div>
            </div>
            <div className='card-cntnts'>
                <div className='card-cntnts1'><span>Devices</span></div>
                <div className='progress-container'>
                    <div className='progress' style={{width:'50%'}} ></div>
                </div>
                <div className='card-fraction'><span>05/10</span></div>
            </div>
        </div>

    )
}

export default Card1
