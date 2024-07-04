import React from 'react'

function Cardcomponent({img,title,price,description}) {
  return (
    <div className='w-72 h-max border border-solid bg-gray-500 text-black bg-opacity-20 shadow-md rounded-md'>
            <div className='cursor-pointer'>
            <img src={img} />
            </div>
            <div className='w-72 text-center text-black hover:bg-orange-700 hover:text-white rounded-b-md active:bg-orange-800 cursor-pointer'>
                <p>{title}</p>
                <p>₹ {price}</p>
                <p>{description}</p>
            </div>
    </div>
  )
}

export default Cardcomponent