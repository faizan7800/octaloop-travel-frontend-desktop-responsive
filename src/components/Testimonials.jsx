import React from 'react'

const Testimonials = () => {
  return (
    <div className=' flex justify-center items-center mx-16 mb-16 gap-10 mt-32'>
    <div className='flex flex-col justify-center items-start gap-6 w-[50%]'>
    <h2 className='uppercase text-[#5E6282] font-semibold'>Easy and Fast</h2>
    <h1 className='text-6xl text-[#14183E] font-bold'>Book your next trip <br /> 
    in 3 easy steps</h1>
    <div className='mt-10 flex justify-start items-center gap-5'>
        <p className='rounded-full p-1 bg-[#39425D]'></p>
            <p className='rounded-full p-1 bg-[#E5E5E5]'></p>
            <p className='rounded-full p-1 bg-[#E5E5E5]'></p>
        </div>
    </div>
    <div className='relative flex justify-center items-center gap-10 w-[31%]  '>
        <img src="/assets/Image.png" className='absolute -top-10 -left-10' alt="" />
        <div className='flex flex-col justify-center items-start gap-10 rounded-2xl shadow-xl  px-4 bg-white w-[100%] py-8'>
            <p className='text-[#5E6282]'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <div className='flex flex-col'>
                <p className='text-[#5E6282] text-xl font-bold'>Mike Taylor</p>
                <p className='text-[#5E6282]'>Lahore, Pakistan</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 ml-4'>
            <img src="/assets/arrowup.png" alt="" className='w-4 h-4 object-contain' />
            <img src="/assets/arrowdown.png" alt="" className='w-4 h-4 object-contain' />
        </div>
        <div className='flex flex-col justify-center items-start absolute -z-20 rounded-2xl border border-gray-500 -bottom-14 w-[80%] px-4 py-2'>
            <p className='text-[#5E6282]'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <div className='flex flex-col'>
                <p className='text-[#5E6282] text-xl font-bold'>Mike Taylor</p>
                <p className='text-[#5E6282]'>Lahore, Pakistan</p>
            </div>
        </div>
        
        </div>
</div>
  )
}

export default Testimonials