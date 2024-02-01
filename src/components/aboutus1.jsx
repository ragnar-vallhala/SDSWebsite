import React from 'react'
import { truck02 } from '../assets'
const Aboutus1 = () => {
  return (
    <div className={`p-8 justify-center bg-gray-100`}>
        <div className='flex'>
            <div>
            <p className="heading my-8 text-center">Join Our Family</p>
            <p className='text-14 my-8'>Truck Dispatch Services: Your Dedicated Truck Dispatcher Does All The Heavy Lifting So You Can Stay Focused On Driving</p>
            <p>SECURE DISPATCHING SERVICES is a "Full Service" truck dispatching company that handles all of the back-office work so you can compete with the large fleets. Typically, a large carrier would hire somebody to handle all of these tasks, but it is unaffordable for a small carrier, that’s where SECURE DISPATCHING SERVICES comes in to help! Our process is simple, your dedicated truck dispatcher will work with you by your rules. We develop the best lanes that suit your desired schedule, whether you want to be home every night, every other night, or once every 2 weeks, our freight dispatchers work with you to develop a lane that will achieve your target goals.</p>
            <ul className='list-disc mx-12 my-8'>
                <li>We Negotiate Hard For Best Paying Rates. </li>
                <li>We Talk To Brokers.</li>
                <li>We Handle All Your Broker Setup Packets.</li>
                <li>We Handle Lumper/Detention.</li>
                <li>Dedicated Dispatcher.</li>
                <li>You Pick The Areas You Want To Drive.</li>
                <li>Best Truck Dispatch Company On Your Side</li>
            </ul>
            
            
            </div>
            <img src={truck02} alt='truck02' className='h-[700px] pl-8'/>
        </div>
        
    </div>
  )
}

export default Aboutus1
