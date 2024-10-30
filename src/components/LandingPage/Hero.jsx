// import React from 'react'

export default function Hero() {
  return (
    <div className='relative bg-gray-50 pt-24 '>
  <div className="mx-auto max-w-screen-xl px-4 pb-16 md:pb-32 pt-8 md:pt-16 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto md:w-4/5 text-center">
    
      <h1  className="text-3xl font-extrabold sm:text-5xl">
      Access the full power of DeFi.
        <strong className="font-extrabold text-purple-600 pt-4 sm:block"> Your home for
        changing the world </strong>
      </h1>
<div className='flex  justify-center md:flex-row flex-col gap-2 md:gap-4'>
  <img src="/aave.png" alt="" className='md:pt-28 md:h-80 h-68 w-44' />
   <div>   
      <p className="mt-4 sm:text-xl/relaxed">
      Streamline fundraising, marketing, and donor management in one powerful platform—rated   for ease of use time and time again.
Sign up for free
      </p>

      <div className="mt-8 flex  justify-center flex-col md:flex-row gap-6 items-center md:gap-4">
        <a
          className="block  w-4/5 md:w-2/5 rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        </div>
        
        </div>
        <img src="/aave3.png" alt="" className='md:h-52 hidden md:block' />
      </div>
    </div>
    
  </div>
    </div>
  )
}
