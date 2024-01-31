import React from 'react'
import {connect} from '../assets'


function About3() {
  return (
    <div className={`bg-gray-100`}>
      <div className="p-8 flex justify-center">
      <div className="ml-4">
        <p className="heading align-left">INNOVATION AND ENTREPRENEURSHIP</p>
        <div className='mt-8'>
            <p className='sub-heading'>TMS SOFTWARE</p>
            <p className="text-gray-600 mr-28">All of our dispatchers are trained in using industry leading TMS Software. Working with a new company is always a smooth transition as we learn the ins and outs of each and every business and tailor a custom dispatch solution.</p>
        </div>

        <div className='mt-8'>
            <p className='sub-heading'>ELD SOFTWARE</p>
            <p className="text-gray-600 mr-28">We keep track of all our drivers using industry leading ELD Software. Doing this enables us to properly track drivers and helps us when finding loads. We are 100% DAT compliant in the loads we find.</p>
        </div>

        <div className='mt-8'>
            <p className='sub-heading'>LOAD BOARDS</p>
            <p className="text-gray-600 mr-28">ELS Software Stay informed about the drivers and the loads they are taking by using ELD software. We can make contact with our drivers and loads as well. 100% DAT compliant! TMS software. Our well-Groomed Dispatchers know the dos and don'ts of everything and they are well aware of using TMS Software.</p>
        </div>

      </div>

      <img
        src={connect}
        alt="Description"
        className={`object-cover side-image`}
      />
    </div>
    
    </div>
  )
}

export default About3
