import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Glowing Image on the Left */}
            <div className="absolute left-0 top-0 w-1/4 h-1/2 z-10">
                <img
                    src="/assets/glowside.png"
                    alt="Glowing Decoration"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Blob Image on the Right */}
            <div className="absolute right-0 top-0 h-[80vh] z-10">
                <img
                    src="/assets/Decore.png"
                    alt="Blob Decoration"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Main Content */}
            <div className="relative top-6 z-20 flex items-center justify-between h-full px-16 max-sm:px-8">
                {/* Heading and Text */}
                <div className="max-w-lg max-sm:pt-32 max-sm:pl-0 text-black pl-6">
                    <p className='text-[#DF6951] text-xl font-semibold uppercase py-2'>Best Destinations around the world</p>
                    <h1 className="text-7xl font-bold mb-4 text-[#181E4B]">Travel, <span className="relative inline-block">enjoy
                    <img 
          src="/assets/underline.png" 
          alt="Underline" 
          className="absolute left-0 bottom-[-10px] w-full -z-10" 
        />
                    </span>
                        and live a new
                        and full life</h1>
                    <p className="text-lg text-[#5E6282] my-6 font-semibold">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

                    <div className='flex justify-start items-center gap-4'>
                    <button className='bg-[#F1A501] p-3 text-white rounded-lg'>Find Out More</button>
                    <button className=' flex justify-center items-center gap-3 text-[#686D77]'><span className='bg-[#DF6951] p-4 rounded-full'><img src="/assets/polygon.png" alt="" /></span> PlayDemo</button>
                    </div>
                </div>

                {/* Picture on the Right Overlapping the Blob */}
                <div className="w-[40%] max-sm:hidden h-auto relative z-20 pt-20">
                    <img
                        src="/assets/Traveller.png"
                        alt="Decorative"
                        className="w-[90%] h-auto relative"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection