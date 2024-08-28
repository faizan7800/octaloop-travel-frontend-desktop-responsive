import React from 'react'

const CategoryCard = ({ title, image, desc }) => {
    return (
        <>
            {title.includes("Flights")?
            
            <div className='relative flex flex-col justify-center items-center gap-4 mx-4 my-2 bg-white px-1 py-5 rounded-3xl shadow-xl'>
                <img src={image} alt={image} />
                <h3 className='font-semibold text-[#1E1D4C]'>{title}</h3>
                <p className='text-[#5E6282] text-center'>{desc}</p>

                <img src="/assets/bg-card.png" className='absolute -left-8 -bottom-8 -z-10' alt="" />
            </div>
            
            :<div className='flex flex-col justify-center items-center gap-4 mx-4 my-2'>
                <img src={image} alt={image} />
                <h3 className='font-semibold text-[#1E1D4C]'>{title}</h3>
                <p className='text-[#5E6282] text-center'>{desc}</p>
            </div>}
        </>
    )
}

export default CategoryCard