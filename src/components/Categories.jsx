import React from 'react'
import CategoryCard from './CategoryCard'
import { cardsData } from '../constants'

const Categories = () => {
  return (
    <div className='my-16 flex flex-col justify-center items-center gap-6'>
        <h2 className='uppercase text-[#5E6282] font-semibold'>Category</h2>
        <h1 className='text-4xl text-[#14183E] font-bold'>We Offer Best Services</h1>
        <div className='grid grid-cols-4 max-sm:grid-cols-1 max-sm:space-y-10 gap-4 mx-8 py-6'>
           {cardsData.map((c)=>(
                <CategoryCard title={c.title} desc={c.desc} image={c.image}/>
           ))
           }
        </div>
    </div>
  )
}

export default Categories