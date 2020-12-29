import React from 'react'
import Navbar from '../Navbar'
import './ContacLocation.css'
import ContactForm from '../ContactForm'

import {GoLocation} from 'react-icons/go'

function ContactLocation() {
  return (
    <div>
      <Navbar/>
      <div className='contactlocation-container'>
        <div className='contactlocation-header'>
          Kontakt i lokacija
        </div>
        <div className='contact-phone'>
          <a>Nas kontakt telefon: </a>
          <a>061 229 124</a>
        </div>
        <div className='contact-mail'>
          <a>Javite nam se na mail:</a>
          <ContactForm/>
        </div>
        <div className='adres'>
          <p>Naša adresa</p>
          <a>Zmaja od bosne,          </a>
          <a>Robot Socijalno,          </a>
          <a>71000 Sarajevo          </a>
          <p
            href='https://www.google.com/maps/place/Robot+Socijalno/@43.8524889,18.3844704,17.95z/data=!4m5!3m4!1s0x0:0xb65d0f1ebe8af2f8!8m2!3d43.8520708!4d18.3843434'
            className='location-icon'>
              <GoLocation/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactLocation

 