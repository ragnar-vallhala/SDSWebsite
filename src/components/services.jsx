import React from 'react'
import styles from '../style'
import {Navbar, Services1, Copyright, Developer} from './'

const Services = () => {
  return (
    <div>
      <div className="w-full bg-image-services">
      <div className={`${styles.paddingX} ${styles.flexCenter} translucent-bg`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>
      <p className={`flex center-text text-white justify-center mt-16`}>SERVICES</p>
      </div>
      <Services1/>
      <Copyright/>
      <Developer/>
    </div>
  )
}

export default Services
