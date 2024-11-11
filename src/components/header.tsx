import React from 'react'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <main className='flex items-center bg-orange-100 h-[100px] justify-around'>
        {/* header */}
        <div className="logo text-black font-bold flex items-center text-2xl gap-2 font-sans ">
            <Image
            className='h-12 w-14'
            height={500}
            width={500}
            src="/logo1.png"
            alt='logoImage'/>
            <span className='font-bold text-orange-500 font-sans'>Caffee</span>
            street
        </div>
        {/* main compo div */}
        <div className='flex items-center gap-5'>
        <div className="about hover:text-orange-500 text-gray-900 font-bold cursor-pointer">
           About us
        </div>
        <div className="product  hover:text-orange-500 text-gray-900 font-bold cursor-pointer">
           Our Product
        </div>
        <div className="delivery  hover:text-orange-500 text-gray-900 font-bold cursor-pointer">
            Delivery
        </div>
        </div>
        <div className='border-2 rounded-2xl flex w-60 gap-1 items-center bg-white'>
       <div className='text-2xl ml-1 '> <IoSearch /></div>
            <input  className='py-2 px-2 rounded-r-2xl' type="text" placeholder='capaciano'/>
        </div>
    </main>
  )
}

export default Header