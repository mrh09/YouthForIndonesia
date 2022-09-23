import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroComp.css'
import backgroundyfi from '../../img/backgroundyfi.png'

function HeroComp() {

  let navigate = useNavigate();
  const changePage = () => {
    navigate('/about')
  }

  return (
    <>
      <div className='hero'>
        <div className="hero-container container">
          <div className="row hero-row">
            {/* <img className='hero-background' src={background} /> */}
            <div className="hero-col">
              <h2>WE CAN <br /> WE DO</h2>
              <p>Youth volunteers programme contributes to education, <br />
                health and development through volunteerism in underdeveloped area</p>
              <button className='hero-button' onClick={changePage} >About Us</button>
            </div>
            <div className="hero-col">
              <img className='hero-background' src={backgroundyfi} />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default HeroComp;