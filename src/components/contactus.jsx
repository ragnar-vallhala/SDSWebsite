import React from 'react'
import styles from '../style'
import {ContactForm, Navbar, Copyright, Developer} from './'

const ContactUs = () => {
  const points=[
    'Signed Truck Dispatch Service Agreement',
    'Factoring Information(if any)',
    'General Power Of Attorney (allows us to contact brokers on your behalf)',
    'Copy Of Your MC Authority Letter',
    'Copy Of The Insurance Certificate',
    'Driver’s Contact Info',
    'Copy Of W-9 Form '
  ]



  return (
    <div>
      <div className="w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <hr/>
        </div>
      </div>
      <p className='center-text'>Getting Started With Secure Dispatching Services</p>
      </div>
      <div className='flex mt-8 ml-32'>
        <div>
        <ContactForm/>    
        </div>
        <div>
          <p><b>Our Truck Dispatch Services</b> setup packet is simple. Once you’re ready to start working with us, we will forward you a link to a carrier application to get started. Once we have all the paperwork, you’ll be introduced to your personal dispatcher and start work immediately. We are an experienced and reliable dispatch company who have great relationships with the carriers we work with. That’s why our onboarding is smooth and streamlined. Here is what you need to sign up:</p>
          <p>Secure Dispatching Services LLC</p>
          <p>
              Call/Email<br/>
              Sales: <a href="tel:+1-716-454-0992" className='link-color'>+1-716-454-0992</a><br/>
              <a href="mailto:info@securedispatchingservices.com" className='link-color'>info@securedispatchingservices.com</a>
          </p>
          <p>Signed Truck Dispatch Service Agreement Factoring</p>

          {points.map((point,index)=>(
            <li key={index}>{point}</li>
          ))}
        
        </div>
      </div>
      <div className='mt-8'>
        <Copyright/>
        <Developer/>
      </div>
            
    </div>
  )
}

export default ContactUs
