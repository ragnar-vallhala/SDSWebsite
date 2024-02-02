import React from 'react'
import { contact} from '../assets'
import ContactusButton from './contactusButton'
const Contact = () => {
  return (
    <div className='justify-center'>
      <p className='center-text'>Conatct Us</p>
      <div className='flex item-center p-8'>
        <div className='text-[18px] mx-8 mt-8'>Secure Dispatching Services LLC<br/>
        America’s Secure Truck Dispatching Services for Trucking Company Owners, Owner Operators, and Car Haulers! Dry Van, Reefer, Flatbeds, Auto Transport Dispatch. Contact Secure Dispatching Services Today!
        <br/><br/>
        24/7 Dispatch Support<br/>
        Call/Email<br/>
        Sales: <a href="tel:+1-716-454-0992" className='link-color'>+1-716-454-0992</a><br/>
        <a href="mailto:info@securedispatchingservices.com" className='link-color'>info@securedispatchingservices.com</a>
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
