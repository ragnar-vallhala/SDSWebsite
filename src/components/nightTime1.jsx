import React from 'react'
import StartWorkButton from './startWorkButton'

const NightTime1 = () => {
  return (
    <div className='mt-8 m-16'>
      <div className='center-text'>
        <p>NIGHT TIME DISPATCH</p>
      </div>

      <div className='flex text-center mt-8 mx-16 justify-center'>
        <div className='mx-8 w-[512px]'>
            <p>Third Shift Dispatcher</p>
            <p>Clients, customers and brokers require round the clock updates. We have your back. Let us be your 3rd Shift Dispatch Solution! </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>GPS Tracking</p>
            <p>We live in this world where technology has taken away all our worries and gives us a chance to spark.We track your fleet to make sure that they are where they need to be, when they need to be there! </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>Issuing EFS</p>
            <p>Whether your drivers needs a late night Com Check, Service Fuel, Lumper Charge, our dispatch agents are here to keep them moving.</p>
        </div>
      </div>

      <div className='flex text-center mt-8 mx-16 justify-center'>
        <div className='mx-8 w-[512px]'>
            <p>ELD Records</p>
            <p>Making sure that your drivers are compliant to the latest laws and regulations are a must. Our dispatchers are all trained to keep you legal!  </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>System Updates</p>
            <p>We update your TMS System so that your rate con reflects any changes to your load or contract. </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>Phone/Email Updates</p>
            <p>Important clients, customers and brokers require round the clock updates. We have your back. Let us communicate for you! </p>
        </div>
      </div>

        <div className='flex justify-center mt-8'>
          <a href='/contact'><StartWorkButton/></a>
        </div>

    </div>
  )
}

export default NightTime1
