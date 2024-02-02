import React from 'react'
import StartWorkButton from './startWorkButton'
const AutoTransport1 = () => {
  return (
    <div className='mt-8 m-16 pr-16'>
      <div className='center-text'>
        <p>AUTO TRANSPORT DISPATCH</p>
      </div>
      <div className='flex w-full mx-16'>
        <div className='w-[75%] m-8'>
            <p className='mt-8'>Secure Car Hauler Dispatcher</p>
            <p  className='mt-8'>This is a long form text area designed for your content that you can fill up with as many words as your heart desires. You can write articles, long mission statements, company policies, executive profiles, company awards/distinctions, office locations, shareholder reports, whitepapers, media mentions and other pieces of content that don’t fit into a shorter, more succinct space.</p>
            <p  className='mt-8'>Articles – Good topics for articles include anything related to your company – recent changes to operations, the latest company softball game – or the industry you’re in. General business trends (think national and even international) are great article fodder, too.</p>
            <p  className='mt-8'>Mission statements – You can tell a lot about a company by its mission statement. Don’t have one? Now might be a good time to create one and post it here. A good mission statement tells you what drives a company to do what it does.</p>
            <p  className='mt-8'>Company policies – Are there company policies that are particularly important to your business? Perhaps your unlimited paternity/maternity leave policy has endeared you to employees across the company. This is a good place to talk about that.</p>
            <p  className='mt-8'>Executive profiles – A company is only as strong as its executive leadership. This is a good place to show off who’s occupying the corner offices. Write a nice bio about each executive that includes what they do, how long they’ve been at it, and what got them to where they are.</p>

        </div>

        <div className='w-[25%] m-8'>
            <p>Car Hauler Dispatch Service</p>
            <p className='mt-16'>10% DISPATCH FEE<br/>
                ***CDL OTR Drivers Only***   </p>
            <div  className='mt-16'>
                FULL SERVICE PACKAGE   
                <ul className='list-disc ml-16'>    
                    <li>DEDICATED DISPATCHER</li>
                    <li>OPTIMIZED ROUTES AND LANES </li>
                    <li>BROKER AND DEALERSHIP SETUP</li>
                    <li>INVOICING</li>
                    <li>MAJORITY COD LOADS</li>
                    <li>GET PAID FAST</li>
                </ul>
            </div>
            <div className='mt-8'>
            <a href='/contact'><StartWorkButton/></a>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default AutoTransport1
