import React from 'react'
import { getInitials } from '../../utils/Helper'

function ProfileInfo() {
  return (
    <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center rounded-full text-black bg-gray-600 p-2'>
        {getInitials("Arsh Sharma")}
        </div>

        <div>
            <p className='text-sm font-medium'>Arsh</p>
            <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Logout
            </button>
        </div>
    </div>

  )
}

export default ProfileInfo