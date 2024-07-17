import React, { useEffect, useState } from 'react'
import { getInitials } from '../../utils/Helper'

function ProfileInfo({userInfo, onLogout}) {

  const[username,setUserName] = useState(null);

  useEffect(() => {
    if (userInfo) {
        setUserName(userInfo.fullName);
    }
  }, [userInfo]);

  return (
    <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center rounded-full text-black bg-gray-400 p-2'>
        {getInitials(username)}
        </div>

        <div>
            <p className='text-sm font-medium'>{username}</p>
            <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            onClick={onLogout}>
                Logout
            </button>
        </div>
    </div>

  )
}

export default ProfileInfo