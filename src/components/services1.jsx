import React from 'react'
import { truck02, speed, car} from '../assets'
import LearnMoreButton from './learnMoreButton'
const Services1 = () => {
  return (
    <div className={`justify-center bg-gray-100`}>
        <div className='flex ml-48 mr-48 pt-8'>
            <div>
                <img src={truck02}  alt='truck02' className='w-full pl-8' />
            </div>
            <div className='ml-8'>
                <p>DAYTIME DISPATCH</p>
                <p className='mt-8 mr-8'>Decline your functional expenses and increment efficiency and benefit. Secure  Dispatcher offers proficient truck dispatching Services administrations offers Professional including booking loads, contract finishing, email/telephone dispatch and updates. Click below to learn more the way that you can externalize these assignments to a Secure Dispatching Services. </p>
                <div className='mt-16'>
                    <a href='/day-time'>
                        <LearnMoreButton/>
                    </a>
                </div>
            </div>
        </div>

        <div className='flex ml-48 mr-48 pt-8'>
            <div className='ml-8'>
                <p>NIGHT TIME DISPATCH</p>
                <p className='mt-8 mr-8'>Night-time dispatch administrations don't need to be a migraine. Secure Dispatching Services offers industry driving night-time dispatch administrations for any organization size. Whenever our group of Secure Dispatching Services assume control over the telephones and messages you can have confidence that your clients, clients and drivers will be fulfilled.</p>
                <div className='mt-16'>
                    <a href='/night-time'>
                        <LearnMoreButton/>
                    </a>
                </div>
            </div>
            <div>
                <img src={speed}  alt='truck02' className='h-[278px] w-[1024px] pl-8' />
            </div>
        </div>

        <div className='flex ml-48 mr-48 pt-8'>
            <div>
                <img src={car}  alt='truck02' className='h-[295px] w-[1500px] pl-8' />
            </div>
            <div className='ml-8 mb-8'>
                <p>AUTO TRANSPORT DISPATCH</p>
                <p className='mt-8 mr-8'>Could it be said that you are a vehicle hauler needing a dispatch administration to assist with keeping your trucks stacked? SECURE  Dispatching Services offers a total dispatch bundle for vehicle haulers in the auto transport industry. Our vehicle hauler dispatch administration helps your productivity and recoveries you time!Our car hauler dispatch service boosts your profitability and saves you time!</p>
                <div className='mt-16'>
                    <a href='/auto-transport'>
                        <LearnMoreButton/>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services1
