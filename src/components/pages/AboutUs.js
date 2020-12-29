import React from 'react'
import Navbar from '../Navbar'
import './AboutUs.css'
import {FaLinkedin} from 'react-icons/fa'
import ReactRoundedImage from 'react-rounded-image'
import indirapasic from '../images/indirapasic.jpg'

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <div className='aboutus-container'>

        <div className='left-side'>
        <ReactRoundedImage 
        image={indirapasic}
        roundedColor='lightgrey'
        imageWidth='300'
        imageHeight='300'
        roundedSize='20'
        />

        <p className='name'>Indira Pasic</p>
        <a 
          href='https://www.linkedin.com/in/indira-pa%C5%A1i%C4%87-52b25a86/'
          className='media-icon'>
            <a className='linkedin'>Linkedin</a>
            <FaLinkedin/>    
        </a>
        </div>

        <div className='right-side'>
          <p>Prijasnja pozicija:</p>
          <p>U Zirat banci</p>
          <p>-20 godina radnog staza od kojih je 16 godian na CEO pozicij</p>
          <p>Sadašnja pozicija:</p>
          <p>Financijski savjetnik u</p>
          <p>- NEBI DOO</p>
          <p>- A2M </p>
          <p>U firmi A2M se nalazi i na pozicij direktora</p>
        </div>
        
      </div>
    </div>
  )
}

export default AboutUs

 