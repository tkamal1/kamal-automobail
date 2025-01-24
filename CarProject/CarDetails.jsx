import React from 'react'

const CarDetails = ({name,brand,year,price,premium}) => {
  return (
    <div className='h-38 w-55  content-center rounded-b-md shadow shadow-zinc-800 bg-white'>
      <ul className='p-3'>
        <li className=' text-black font-bold font-sans'>Name:{name}</li>
        <li className=' text-black font-bold font-sans'>Brand:{brand}</li>
        <li className=' text-black font-bold font-sans'>Year:{year}</li>
        <li className=' text-black font-bold font-sans'>Price:{price}</li>
        <li className=' text-black font-bold font-sans'>Premium:{premium}</li>
      </ul>
      
    </div>
  )
}

export default CarDetails