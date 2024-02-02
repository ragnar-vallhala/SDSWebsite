import React from 'react'
import styles from '../style'
import {Navbar,Contact, Copyright, Developer} from './'
import { cheque } from '../assets'

const Pricing = () => {

    const points=[
        'Setup Paperwork',
        '24/7 Dispatch Support',
        'Fax/Email Documents',
        'Credit Checks',
        'Personal Dispatcher',
        'Request Quick Pay',
        'No Forced Dispatch',
        'Payload & FSC = 100% Yours',
        'Request Fuel Advances',
        'We Negotiate Top Paying Rates',
        'Request Insurance Certificates',
        'Driver Directions Assistance',
        'Factor Setup Assistance',
        'Collection Assistance',
        'Unused Truck Order Assistance',
        'Detention Charges Assistance',
    ]
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>
        <div className='flex p-8 mx-32 w-full'>
            <div>
                <img src={cheque} className='h-[600px]'/>
            </div>
            <div className='flex-[50%] justify-center ml-16'>
                <p className='center-text'>Pricing & Packages</p>
                <p className='heading2 font-bold'> US$250.00 <br/>
                    Professional Plan<br/>
                    $250 Per <br/>
                    Week / Per Truck<br/>
                </p>
                <ul className='list-disc ml-16 mt-8'>
                    {points.map((point,index)=>(
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className='bg-gray-100'>
            <Contact/>
        </div>
      
      <Copyright/>
      <Developer/>
    </div>
  )
}

export default Pricing
