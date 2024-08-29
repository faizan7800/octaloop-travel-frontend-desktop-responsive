import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' relative flex flex-col justify-center items-center mx-16 max-sm:mx-6 mb-16 gap-20 mt-32 bg-[#DFD7F9] rounded-tl-[7rem] p-10 py-20'>

        <img src="/assets/telegram.png" alt="" className='absolute -right-6 -top-8 z-10' />
        <img src="/assets/ringtopright.png" alt="" className='absolute right-0 top-0' />
        <h1 className='text-[#5E6282] text-center text-3xl font-bold'>Subscribe to get information, latest news and other <br />
        interesting offers about Jadoo</h1>
        <div className='flex max-sm:flex-col justify-center items-center gap-6 w-1/2 max-sm:w-full max-sm:z-10'>
        <div className='relative w-full'>
            <input type="text" placeholder='your Email' className='w-full p-5 rounded-2xl ' />
        </div>
        <button className='bg-gradient-to-r bg-[#FF946D] p-5 px-10 rounded-2xl text-xl font-semibold text-white max-sm:w-full '>Subscribe</button>
        </div>
        <img src="/assets/ringbottomleft.png" alt="" className='absolute bottom-0 left-0' />
        <img src="/assets/stars.png" alt="" className='absolute -bottom-16 -right-16 -z-10' />
    </div>
  )
}

export default NewsLetter