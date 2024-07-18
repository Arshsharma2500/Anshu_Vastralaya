import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'
function PasswordInput({value, onChange, placeholder}) {
    const [ispassword,setIsPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsPassword(!ispassword);
    }

    const InputStyle = {
      backgroundColor: 'rgba(1, 1, 1, 0.01)',
      border: 'none',
      borderBottom: 'solid white thin',
      borderLeft: 'none',
      color: 'white',
      borderRadius: 'none'
    };

  return (
    <div>

        <input 
        value={value}
        onChange={onChange}
        type={ispassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className='w-full border rounded p-2'
        style={InputStyle}
        />

        {ispassword ? <FaRegEye 
        size={22}
        className="text-blue-600 cursor-pointer relative left-80 bottom-8"
        onClick={() => toggleShowPassword()} /> 
        :
        <FaRegEyeSlash
        size={22}
        className='text-gray-600 cursor-pointer relative left-80 bottom-8'
        onClick={() => toggleShowPassword()} />
        }

    </div>
  )
}

export default PasswordInput