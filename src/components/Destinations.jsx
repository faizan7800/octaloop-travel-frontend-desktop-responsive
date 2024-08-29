import React from 'react'
import DestinationCard from './DestinationCard'

const Destinations = () => {
  return (
    <div className='mb-16 mt-32 flex flex-col justify-center items-center gap-6'>
    <h2 className='uppercase text-[#5E6282] font-semibold'>Top Sellings</h2>
    <h1 className='text-4xl text-[#14183E] font-bold'>Top Destinations</h1>
    <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-10 mx-8 max-sm:mx-2'>
       <DestinationCard place="Rome, Italty" rate={"5,42K"} trip={"10 Days Trip"} image={"/assets/dest3.png"}/>
       <DestinationCard place="London, UK" rate={"5,2K"} trip={"12 Days Trip"} image={"/assets/dest3.png"}/>
       <DestinationCard place="Full Europe" rate={"15K"} trip={"28 Days Trip"} image={"/assets/dest1.png"}/>
    </div>
    </div>
  )
}

export default Destinations