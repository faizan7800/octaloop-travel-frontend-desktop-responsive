import React from 'react'

const BookingSection = () => {
  return (
    <div className='flex max-sm:flex-col justify-center items-center mx-16 max-sm:mx-4 mb-16 gap-20  mt-32'>
        <div className='flex flex-col justify-center items-start gap-6 w-1/2 max-sm:w-full'>
        <h2 className='uppercase text-[#5E6282] font-semibold'>Easy and Fast</h2>
        <h1 className='text-6xl text-[#14183E] font-bold max-sm:w-full max-sm:text-4xl'>Book your next trip <br /> 
        in 3 easy steps</h1>
        <div className='flex flex-col justify-center items-center gap-10 mt-10'>
            <div className='flex justify-center items-center gap-6'>
                <img src="/assets/icon1.png" alt="" />
                <div className='flex flex-col justify-center items-start gap-0'>
                    <h3 className='text-[#5E6282] font-semibold'>Choose Destination</h3>
                    <p className='text-[#5E6282] w-[70%]'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <img src="/assets/icon3.png" alt="" />
                <div className='flex flex-col justify-center items-start gap-0'>
                    <h3 className='text-[#5E6282] font-semibold'>Make Payment</h3>
                    <p className='text-[#5E6282] w-[70%]'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <img src="/assets/icon2.png" alt="" />
                <div className='flex flex-col justify-center items-start gap-0'>
                    <h3 className='text-[#5E6282] font-semibold'>Reach Airport on Selected Date</h3>
                    <p className='text-[#5E6282] w-[70%]'>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
        </div>
        </div>
        <div className='relative bg-white shadow-xl rounded-2xl p-3 flex flex-col justify-center items-start gap-6 '>
            <img className='absolute -top-[5.5rem] -right-[6rem] -z-10' src="/assets/glow.png" alt="" />
            <img src="/assets/greece.jpg" alt="" className=''/>
            <div className='pl-2'>
            <p className='text-[#080809] font-semibold text-xl pl-2'>Trip to Greece</p>
            <p className='text-[#84829A] text-xl pl-2 font-semibold'>14-29 June| by Robbin joseph</p>
            </div>
            <div className='flex justify-start items-center gap-4 pl-2'>
            <div className='p-3 bg-[#F5F5F5] rounded-full'>
                <img src="/assets/leaf.png" alt="" />
            </div>
            <div className='p-3 bg-[#F5F5F5] rounded-full'>
                <img src="/assets/map.png" alt="" />
            </div>
            <div className='p-3 bg-[#F5F5F5] rounded-full'>
                <img src="/assets/send.png" alt="" />
            </div>
            </div>
            <div className='flex justify-between items-center w-full px-2'>
            <p className='pl-2 text-xl flex justify-center items-center gap-4 text-[#84829A]'>
                <img src="/assets/building.png" alt="" />
                <span>24 people going</span>
            </p>
            <img src="/assets/heart.png" alt="" />
            </div>
            <div className='absolute  flex justify-center items-center gap-4 bg-white shadow-xl p-4 -right-[5.5rem] rounded-2xl bottom-10 max-sm:hidden'>
                <img src="/assets/infra.png" alt="" className='rounded-full' />
                <div className='flex flex-col justify-center items-start gap-1'>
                    <p className='text-sm text-[#84829A] font-semibold'>Ongoing</p>
                    <p className='text-[#080809] font-semibold text-xl'>Trip to rome</p>
                    <p className='text-[#080809] font-semibold text-xl'><span className='text-[#8A79DF]'>40%</span> completed</p>
                    <p className='relative bg-[#F5F5F5] w-full rounded-3xl h-2'>
                    <p className='absolute bg-[#8A79DF] w-[40%] rounded-3xl h-2'></p>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingSection