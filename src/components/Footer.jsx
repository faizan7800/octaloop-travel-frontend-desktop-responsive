import React from 'react'

const Footer = () => {
  return (
    <div  className='grid grid-cols-3 mx-16 mb-16 gap-10 mt-32'>
        <div className='flex flex-col justify-center items-start gap-4'>
            <img src="/assets/Logo.png" alt="" />
            <p className='text-[#5E6282] w-1/2'>Book your trip in minute, get full
Control for much longer.
</p>
        </div>
        <div className='flex justify-center items-center gap-32'>
        <div className='flex flex-col justify-center items-start gap-4'>
        <p className='text-2xl font-bold'>Company</p>
        <ul className='flex flex-col justify-center items-start gap-3 text-xl text-[#5E6282]'>
            <li>About</li>
            <li>Career</li>
            <li>Mobile</li>
        </ul>
        </div>
        <div className='flex flex-col justify-center items-start gap-4'>
        <p className='text-2xl font-bold'>Contact</p>
        <ul className='flex flex-col justify-center items-start gap-3 text-xl text-[#5E6282]'>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
        </ul>
        </div>
        <div className='flex flex-col justify-center items-start gap-4 w-full'>
        <p className='text-2xl font-bold'>More</p>
        <ul className='flex flex-col justify-center items-start gap-3 text-xl text-[#5E6282] w-full'>
            <li>Airline</li>
            <li>Fee</li>
            <li>Lowfare</li>
        </ul>
        </div>
        </div>

        <div className='flex flex-col justify-center items-end gap-4'>
            <div className='flex justify-start items-center gap-4'>
                <div className='bg-gray-300 p-3 rounded-full'>
                    <img src="/assets/Facebook.png" alt="" className='w-6 h-6 object-contain' />
                </div>
                <div className='bg-gray-300 p-3 rounded-full'>
                    <img src="/assets/instagram.png" alt="" className='w-6 h-6 object-contain' />
                </div>
                <div className='bg-gray-300 p-3 rounded-full'>
                    <img src="/assets/twitter.png" alt="" className='w-6 h-6 object-contain' />
                </div>
            </div>
            <p className='text-[#5E6282] text-xl text-left'>Discover our app</p>
            <div className='flex justify-center items-center gap-2'>
                <img src="/assets/google.png" alt="" />
                <img src="/assets/appstore.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer