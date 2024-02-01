import React from 'react'
import {NightTime1,Navbar, ServicesButton, Copyright, Developer} from './'
import styles from '../style'

const NightTime = () => {
  return (
    <div>
      <div className="w-full bg-image-nighttime">
      <div className={`${styles.paddingX} ${styles.flexCenter} translucent-bg`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>
      
      <div className='flex justify-center  mt-16'>
        <p className={`center-text text-white`}>DAYTIME DISPATCH</p>
        <div className='ml-16'>
            <a href='/services'>
                <ServicesButton/>
            </a>
        </div>
      </div>
      </div>

      <NightTime1/>
      <Copyright/>
      <Developer/>
    </div>
  )
}

export default NightTime
