import React from 'react'
import styles from '../style'
import {Navbar, ServicesButton, Daytime1, Copyright, Developer} from './'
const DayTime = () => {
  return (
    <div>
      <div className="w-full bg-image-daytime">
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

      <Daytime1/>
      <Copyright/>
      <Developer/>
    </div>
  )
}

export default DayTime
