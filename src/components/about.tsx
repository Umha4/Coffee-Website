import React from 'react'
import Image from 'next/image'

export const About = () => {
  return (
    <main className='mt-16'>
            <div className=' bg-orange-100 w-full h-[550px] flex px-32'>
            <div className='pt-12 flex-1'><Image
            className='rounded-xl  bg-cover flex justify-center items-center h-[450px]'
            height={500}
            width={500}
            src="/image4.png"
            alt='logoImage'/>
            </div>
            <div className='text-center  flex-1 '>
             <h2 className='flex justify-center font-bold text-2xl pt-32'>About <span className='pl-2 font-bold text-2xl text-orange-500'> Us</span></h2>
             <p className='font-bold text-2xl mt-7'>We Provide quality coffe <br /> and ready to deliver.</p>
             <p className='text-gray-500 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Hic maxime corporis eveniet nobis quia consequuntur labore iure,<br /> rerum dolorem recusandae nihil tempore magni a itaque illo,<br /> consectetur ab sit ad.</p>
             <button className='mt-10 border-2 border-red-950 text-white bg-red-950 rounded-full hover:text-orange-500 px-4 py-1 '>Get Your Coffee</button>
            </div>
            </div>
    </main>
  )
}
