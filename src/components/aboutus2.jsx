import React from 'react'
import { van, crane, container } from '../assets'
const Aboutus2 = () => {
  return (
    <div>
        <p className="heading my-8 text-center">Our Truck Dispatchers Specialize</p>
        <div className='flex p-8'>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <img src={van} className='rounded-full w-72'/>
                </div>
                <p className='font-bold text-center'>DRY VAN</p>
                <p className='text-center'>If you are looking for a truck dispatcher to manage your dry van freight, you’ve found the right truck dispatching company that can help you achieve a peace of mind through professional truck dispatching services. Reach out today.  </p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <img src={crane} className='rounded-full w-72'/>
                </div>
                <p className='font-bold text-center'>FLATBED/STEP DECK</p>
                <p className='text-center'>If you are looking for a flatbed truck dispatcher to manage your flatbed or conestoga freight, Truck Dispatch 360 has you covered. We offer professional truck dispatch services for serious truckers. Reach out to our freight dispatchers.</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <img src={container} className='rounded-full w-72'/>
                </div>
                <p className='font-bold text-center'>REEFER</p>
                <p className='text-center'>If you are looking for a reefer truck dispatcher to manage your reefer freight, our truck dispatchers at Truck Dispatch 360 can help you achieve your goals. Reach out today to speak to one of our expert truck dispatchers.  </p>
            </div>
        </div>
    </div>
  )
}

export default Aboutus2
