import React from 'react'
import { pageNotFound } from '../assets'
const NotFound = () => {
  return (
    <div className='align-center w-full'>
        <div className='flex justify-center mt-24'>
            <img src={pageNotFound} alt="not found"/>
        </div>
        <a href='/'>
            <p  className='center-text mt-24 text-blue-400'>Return to Home</p>
        </a>
    </div>
  )
}

export default NotFound
