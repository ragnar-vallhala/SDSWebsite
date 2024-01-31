import React from 'react'
import { label1,label2,label3 } from '../assets'

const Labels = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center mx-4">
        <img src={label1} alt="Image 1" className="w-50 h-50 object-cover rounded-full" />
      </div>

      <div className="text-center mx-4">
        <img src={label2} alt="Image 2" className="w-50 h-50 object-cover rounded-full" />
      </div>

      <div className="text-center mx-4">
        <img src={label3} alt="Image 3" className="w-50 h-50 object-cover rounded-full" />
      </div>
    </div>
  )
}

export default Labels
