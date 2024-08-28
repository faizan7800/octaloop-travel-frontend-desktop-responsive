import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-30 px-20 py-10">
    <img src='/assets/Logo.png'/>
    <div className="space-x-10 font-semibold text-[#212832]">
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