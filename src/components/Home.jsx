import styles from "../style";
import React from 'react'
import {Navbar, Labels, About1, About2, About3, Contact, Copyright, Developer} from "./";
const Home = () => {
  return (
    <div>
      <div className="bg-primary w-full bg-image">
      <div className={`${styles.paddingX} ${styles.flexCenter} translucent-bg`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>

      <div className={styles.mainText}>
        <div className="flex justify-center items-center pt-24">
        Pack It, Secure It, Ship It
        </div>
      </div>
      <div className={`${styles.flexCenter} text-white text-[24px]`}>
      Be Part of the Best. Join our team!
      </div>
    </div>

    <Labels />
    <About1 />
    <About2 />
    <About3 />
    <Contact/>
    <Copyright/>
    <Developer/>
    </div>
  )
}

export default Home
