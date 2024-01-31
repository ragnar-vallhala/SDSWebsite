import React from 'react'
import { contact} from '../assets'
const Contact = () => {
  return (
    <div className='justify-center'>
      <p className='center-text'>Conatct Us</p>
      <div className='flex item-center p-8'>
        <p className='text-[18px]'>Secure Dispatching Services LLC<br/>
        America’s Secure Truck Dispatching Services for Trucking Company Owners, Owner Operators, and Car Haulers! Dry Van, Reefer, Flatbeds, Auto Transport Dispatch. Contact Secure Dispatching Services Today!
        <br/><br/>
        24/7 Dispatch Support<br/>
        Call/Email<br/>
        Sales: <a href="tel:+1-716-454-0992" className='link-color'>+1-716-454-0992</a><br/>
        <a href="mailto:info@securedispatchingservices.com" className='link-color'>info@securedispatchingservices.com</a></p>
        <img
        src={contact}
        alt="Description"
        className="object-cover h-64 w-96"
        />
      </div>
    </div>
  )
}

export default Contact
