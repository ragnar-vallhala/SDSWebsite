import React from 'react'
import styles from "../style";
import {Navbar, Aboutus1, Aboutus2, Copyright, Developer} from "./";
const Aboutus = () => {
  return (
    <div>
      <div className="w-full bg-image-about">
      <div className={`${styles.paddingX} ${styles.flexCenter} translucent-bg`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>
      <p className={`flex heading text-white justify-center mt-16`}>WHY SECURE DISPATCHING SERVICES?</p>
      </div>
        <Aboutus1/>
        <Aboutus2/>
        <Copyright/>
        <Developer/>
    </div>
  )
}

export default Aboutus
