import React from 'react'
import { contact} from '../assets'
import ContactusButton from './contactusButton'
const Contact = () => {
  return (
    <div className='justify-center'>
      <p className='center-text'>Conatct Us</p>
      <div className='flex item-center p-8'>
        <div className='text-[18px] mx-8 mt-8'>Frank Dispatching Services LLC<br/>
        America’s Secure Truck Dispatching Services for Trucking Company Owners, Owner Operators, and Car Haulers! Dry Van, Reefer, Flatbeds, Auto Transport Dispatch. Contact Secure Dispatching Services Today!
        <br/><br/>
        24/7 Dispatch Support<br/>
        Call/Email<br/>
        Sales: <a href="tel:(760)-284-8660" className='link-color'>(760)-284-8660</a><br/>
        <a href="mailto:hello@frankdispatchingservices.com" className='link-color'>hello@frankdispatchingservices.com</a>
          <div className='flex justify-center mt-8'>
            <a href='/contact'><ContactusButton/></a>
          </div>
        
        </div>
        <img
        src={contact}
        alt="Description"
        className="object-cover mx-16 h-[500px]"
        />
      </div>
    </div>
  )
}

export default Contact
