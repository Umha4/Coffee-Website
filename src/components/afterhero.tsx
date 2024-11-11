import React from 'react'
import Image from 'next/image'
import { BsCartFill } from "react-icons/bs";


const AfterHero = () => {
  return (
   <main className=' h-[450px] w-full bg-orange-100'>
         <div className='text-2xl bg-orange-100 pl-40 '>
          <h1>Popular <span className='text-orange-500'>Now</span></h1>
        </div>
        <div className='flex h-[350px] gap-10 mx-32 rounded-2xl mt-8'>
        <div className=' flex-1 bg-white shadow-orange-200 shadow-lg'>
            <div className='mx-4 mt-4'>
                <Image
            className='h-120 w-120 rounded-lg mt-6'
            height={500}
            width={500}
            src="/p3.png"
            alt='logoImage'/></div>
            <div className='flex justify-between px-5 pt-4'>
                <p className='font-semibold text-1xl'>Vanila Latte</p>
                <p className='font-semibold text-1xl'>21K</p>
            </div>
            <div className='flex justify-between px-5'>
                <div className='justify-between  text-orange-300 border-orange-300 mt-4'>
                    <button className='font-semibold border-2 px-3 border-orange-300 hover:text-orange-500 hover:border-orange-500'>Hot</button>
                    <button className='font-semibold border-2 px-3 ml-5 border-orange-300 hover:text-orange-500 hover:border-orange-500'>Cold</button>
                    </div>
                <div className='bg-orange-500 rounded-full p-2 text-2xl text-white mt-2'>
                    <BsCartFill />
                </div>
            </div>
        </div>
        <div className=' flex-1 bg-white shadow-orange-200 shadow-lg'>
        <div className='mx-4 mt-4'>
            <Image
            className='h-120 w-120 rounded-lg mt-6'
            height={500}
            width={500}
            src="/p2.png"
            alt='logoImage'/></div>
            <div className='flex justify-between px-5 pt-4'>
                <p className='font-semibold text-1xl'>Espresso</p>
                <p className='font-semibold text-1xl'>12K</p>
            </div>
            <div className='flex justify-between px-5'>
                <div className='justify-between  text-orange-300 border-orange-300 mt-4'>
                    <button className='font-semibold border-2 px-3 border-orange-300 hover:text-orange-500 hover:border-orange-500'>Hot</button>
                    <button className='font-semibold border-2 px-3 ml-5 border-orange-300 hover:text-orange-500 hover:border-orange-500'>Cold</button>
                    </div>
                <div className='bg-orange-500 rounded-full p-2 text-2xl text-white mt-2'>
                    <BsCartFill />
                </div>
            </div>
        </div>
        <div className=' flex-1 bg-white shadow-orange-200 shadow-lg'>
        <div className='mx-4 mt-4'>
            <Image
            className='h-120  rounded-lg mt-7'
            height={500}
            width={500}
            src="/zzz.png"
            alt='logoImage'/></div>
            <div className='flex justify-between px-5 pt-4'>
                <p className='font-semibold text-1xl'>Hazlenut Latte</p>
                <p className='font-semibold text-1xl'>23K</p>
            </div>
            <div className='flex justify-between px-5'>
                <div className='justify-between  text-orange-300 border-orange-300 mt-4'>
                    <button className='font-semibold border-2 px-3 border-orange-300 hover:text-orange-500 hover:border-orange-500'>Hot</button>
                    <button className='font-semibold border-2 px-3 ml-5 border-orange-300 hover:text-orange-500 hover:border-orange-500'>Cold</button>
                    </div>
                <div className='bg-orange-500 rounded-full p-2 text-2xl text-white mt-2'><BsCartFill />
                </div>
            </div>
        </div>
        </div>
   </main>
  )
}

export default AfterHero