import { URLS } from '@/constants/Urls'
import React from 'react'
import { Link } from 'react-router-dom'

const ThankyouPage = () => {
  return (
    <div className='bg-white h-screen flex flex-col gap-4 justify-center items-center'>
        <p className='uppercase text-xl font-monument'>
            Thank You 
        </p>
        <p className='uppercase text-sm font-moderat-regular'>
           Your enquiry has been recived and we will'be in touch shortly.
        </p>
        <div className='mt-12 flex  gap-4'>
            <Link to={URLS.HOME} className='cursor-pointer'>
                <button className='mt-4 px-6 py-2 border-black border text-black font-semibold uppercase'>
                    Back to Home Page
                </button>
            </Link>
            <Link to={"#"} className='cursor-pointer'>
                <button className='mt-4 px-6 py-2 border-black border text-black font-semibold uppercase'>
                    Read Our Latest Article 
                </button>
            </Link>
        </div>
    </div>
  )
}

export default ThankyouPage