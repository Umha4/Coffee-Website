import React from 'react'
import { BsCart } from "react-icons/bs";
import Image from 'next/image';


const Hero = () => {
  return (
    <main className='flex h-[450px]  bg-orange-100'>
        {/* left */}
        <div className='w-[100px] flex-1 pl-24'>
            <h1 className=' text-5xl ml-20 mt-20 '>Enjoy your<span className=' text-orange-500'>Coffe</span>
            <br /> before your activity</h1>
            <p className='text-gray-500 mt-7 ml-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Unde expedita consequatur similique placeat nostrum temporibus,<br /> est cupiditate ipsa laudantium accusamus fuga,<br /> ea, quisquam adipisci ducimus sequi? Dolorum atque vitae blanditiis.</p>
           <div className='flex items-center font-bold '> 
                      <button className='items-center flex font-bold bg-zinc-800 hover:bg-zinc-700  text-white	ml-20 mt-6 border-2xl px-6 py-2 rounded-3xl'>order now 
              <span className='bg-orange-500 rounded-full p-2 text-1xl font-bold ml-2'><BsCart /></span>
            </button>
            <button className='mt-5 font-bold ml-7 text-orange-500 hover:text-orange-400 hover:bg-gray-100 px-3 py-2 hover:rounded-3xl text-center'>More menu</button></div>
        </div>

        {/* right */}
        <div className='flex-1'>
        <Image
            className='h-120 w-120 mt-9 rounded-full'
            height={500}
            width={500}
            src="/cup.png"
            alt='this is image'/>
        </div>
    </main>
  )
}

export default Hero