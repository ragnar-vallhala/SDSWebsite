import React from 'react'
import {globe} from '../assets'


function About2() {
  return (
    <div className={`justify-center`}>
      <div>
        <p className="center-text">INDUSTRY LEADING BROKERS</p>
      </div>
      <img
        src={globe}
        alt="Description"
        className="object-cover h-64 w-96 mx-auto"
      />
    </div>
  )
}

export default About2
