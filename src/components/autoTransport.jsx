import React from 'react'
import styles from '../style'
import {Navbar, ServicesButton, AutoTransport1, Copyright, Developer} from './'

const AutoTransport = () => {
  return (
    <div>
      <div className="w-full bg-image-autotransport">
      <div className={`${styles.paddingX} ${styles.flexCenter} translucent-bg`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>
      
      <div className='flex justify-center  mt-16'>
        <p className={`center-text text-white`}>AUTO TRANSPORT</p>
        <div className='ml-16'>
            <a href='/services'>
                <ServicesButton/>
            </a>
        </div>
      </div>
      
      </div>

      <AutoTransport1/>
      <Copyright/>
      <Developer/>
    </div>
  )
}

export default AutoTransport
