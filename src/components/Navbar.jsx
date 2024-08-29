import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-30 px-20 max-sm:px-8 py-10 max-sm:pt-20">
    <img src='/assets/Logo.png'/>
    <div className="space-x-10 font-semibold text-[#212832] max-sm:hidden">
      <a href="#home">Destinations</a>
      <a href="#about">Hotels</a>
      <a href="#contact">Flights</a>
      <a href="#services">Bookings</a>
      <a href="#services">Login</a>
      <a href="#services" className='border border-[#212832] rounded-lg px-3 py-2'>Sign Up</a>
      <a href="#services">EN</a>
    </div>
  </nav>
  )
}

export default Navbar