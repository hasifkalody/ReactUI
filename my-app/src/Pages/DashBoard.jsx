import React from 'react'
import Navbar from '../Components/NavBar/NavBar'
import Header from '../Components/Header/Header'
import Section1 from '../Components/Section1/Section1'
import Card1 from '../Components/Card1/Card1'
// images
import im1 from '../Assets/Map/Rectangle 182 (1).png'
import './Dashboard.css'

function DashBoard() {
  return (
    <div className='dash-board'>
      <Navbar />
      <div className='dash-right'>
        <Header />
        <div className='dash-right1'>
          <span className='dash-righ-Heading'>Project</span>
          <Section1 />
          <div className='dash-right2'>
            <div className='dash-right2-left'>
              <div className='dash-right21'>
                <Card1 />
                <Card1 />
              </div>
              <div className='dash-right22'>
                <Card1 />
                <Card1 />
              </div>

            </div>
            <div className='dash-right2-right'>
              <div className='dash-right211'>
                <span className='dash-rt-1'>Location-Devices</span>
                <img className='dash-map' src={im1} alt="image" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DashBoard
