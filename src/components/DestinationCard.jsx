import React from 'react'

const DestinationCard = ({trip, image, place, rate}) => {
  return (
    <div className='flex flex-col justify-center w-full items-center gap-0 py-10'>
            <img src={image} className='rounded-tl-3xl rounded-tr-3xl' alt="" />
            <div className='bg-white shadow-xl w-full rounded-bl-3xl rounded-br-3xl flex p-3 flex-col justify-center gap-4'>
                <div className='flex justify-between items-center'>
                    <p>{place}</p>
                    <p>{rate}</p>
                </div>
                <p className='flex justify-center items-center gap-3'>
                    <img src="/assets/location.png" alt="" />
                    <span>{trip}</span>
                </p>
            </div>
        </div>
  )
}

export default DestinationCard