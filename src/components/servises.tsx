import React from 'react'
import Image from 'next/image'

export const Servises = () => {
  return (
    <main>
      <h3 className='font-bold text-2xl flex justify-center pt-5'>How to use delivery  <span className='pl-2 text-orange-500 hover:text-orange-600'>services</span></h3>
        <div className='flex justify-evenly w-full h-[400px] pt-20'>
        <div className=' one-img'>
            <Image
            className=' h-[200px] w-[200px]'
            height={500}
            width={500}
            src="/umar.png"
            alt='logoImage'/>
            <h4 className='text-2xl font-bold'>Choose you coffee</h4>
            <p className='text-gray-500 font-semibold pt-3'>There are 20+ coffees for you</p>
            </div>
            <div> 
            <Image
            className=' h-[200px] w-[200px]'
            height={500}
            width={500}
            src="/Capture.png"
            alt='capture.png'/>
            <h4 className='text-2xl font-bold'>We delivery it to you</h4> 
            <p className='text-gray-500 font-semibold pt-3'>Choose delivery services </p>
        </div>
        <div> 
            <Image
            className=' h-[200px] w-[200px]'
            height={500}
            width={500}
            src="/Capture1.png"
            alt='capture.png'/>
            <h4 className='text-2xl font-bold '>Enjoy your coffee</h4>
            <p className='text-gray-500 font-semibold pt-3'>Choose delivery services</p>
        </div>
        </div>












        <div></div>
        <div></div>
    </main>
  )
}
