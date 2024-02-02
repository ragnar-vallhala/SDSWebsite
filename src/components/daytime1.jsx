import React from 'react'
import StartWorkButton from './startWorkButton'

const Daytime1 = () => {
  return (
    <div className='mt-8 m-16'>
      <div className='center-text'>
        <p>DAYTIME TRUCK DISPATCH</p>
      </div>

      <div className='flex text-center mt-8 mx-16 justify-center'>
        <div className='mx-8 w-[512px]'>
            <p>Paperwork Completion</p>
            <p>We complete all paperwork on your behalf. From New Carrier Packets to Rate Confirmations. </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>Booking Loads</p>
            <p>We negotiate and book top paying loads averaging over $2.80 per mile. We look for light loads with fast on and off times! </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>Phone/Email Updates</p>
            <p>Get on track because here we are setting the seal on the phone and email update and making sure that we are off the same mine before proceeding.  </p>
        </div>
      </div>

      <div className='flex text-center mt-8 mx-16 justify-center'>
        <div className='mx-8 w-[512px]'>
            <p>Lumper/Detention</p>
            <p>We are concerned about you and are here to ease your workload by helping out your drivers. Our management makes sure to get you the detention well-timed. </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>Factoring</p>
            <p>Cash flow is important. Let us handle your factoring needs to ensure that your operation keeps it’s wheels rolling. </p>
        </div>

        <div className='mx-8 w-[512px]'>
            <p>Credit Checks</p>
            <p>We run credit checks on all brokers we work with to ensure that you will be paid on time and in a timely manner. </p>
        </div>
      </div>

        <div className='flex justify-center mt-8'>
        <a href='/contact'><StartWorkButton/></a>
        </div>

    </div>
  )
}

export default Daytime1
