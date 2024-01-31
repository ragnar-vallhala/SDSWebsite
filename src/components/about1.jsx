import React from 'react'
import styles from '../style'
import { supportWomen, standTruck, manTruck } from '../assets'

const About1 = () => {
  return (
    <div className={`justify-center bg-gray-100`}>
        <div>
            <p className="center-text">DEDICATED PROFESSIONAL TRUCK DISPATCH</p>
        </div>
    
    <div className="p-8 flex items-center">
      <img
        src={supportWomen}
        alt="Description"
        className="object-cover h-64 w-96"
      />
      <div className="ml-4">
        <h2 className="heading">Viable Communication</h2>
        <p className="text-gray-600">Viable Communication We are worried about how our correspondence would treat our clients, so we ensure in each regard to show quality correspondence for our buyers. Even as a top of the line intermodal freight service, our roots in trucking remain at the core of our business. Our experienced Truck Dispatcher are dedicated to transporting goods efficiently and safely. We train all of our employees to make sure that transfers are done seamlessly so that time is not lost in transition. In addition our dispatcher not only provides services daytime or evening time  even we provide third shift dispatch for our clients. Prior to permitting us to work with drivers, we cause our dispatcher to go through three-month preparing for their experience. </p>
      </div>
    </div>
    <div className="p-8 flex items-center">
      <div className="ml-4">
        <h2 className="heading">Secure Truck Dispatching Services For Owner Operators</h2>
        <p className="text-gray-600">Secure Dispatching Services is a truck dispatch organization that gives first rate dispatch administrations to independent proprietors and little shipping organizations. We assist with observing the best cargo load conceivable with the greatest costs and spotlight on keeping you stacked consistently. Our group of 20+ truck dispatchers have been in organizations for more than 6 years and know the streets in and out. We realize driving is difficult, that is the reason our truck dispatchers arrange the most elevated rates for your sake so you get the best possible deal for that multitude of miles. We handle all truck administrative work and manage dealers for your sake so you keep fixed on extending your business. We're not searching for transient clients, we are searching for long haul accomplices since we realize that your prosperity is our prosperity. Amplify your acquiring potential with our dispatch administrations. </p>
      </div>
      <img
        src={standTruck}
        alt="Description"
        className="object-cover h-64 w-96"
      />
    </div>

    <div className="p-8 flex items-center">
      <img
        src={manTruck}
        alt="Description"
        className="object-cover h-64 w-96"
      />
      <div className="ml-4">
        <h2 className="heading">Reliable Drivers</h2>
        <p className="text-gray-600">We value our representatives drivers who take time from their own life and work with us with privilege. What we pick is in front of what has proactively been taken, so drivers are our most extreme need. We make a point to remain close by our drivers and coordinate the ideal plan as indicated by their own life. They are very much like our family and we know how to help them. we can’t let them be alone in it. We have the most honest and reliable truck drivers and we owe them huge appreciation. </p>
      </div>
    </div>
    </div>
  )
}

export default About1
