import React, { useState } from 'react'
import axios from 'axios';

function AddProduct() {

  const [file, setFile] = useState();

  const handleOnChange = (e) => {
    const formdata = new FormData()
    formdata.append('file', file)
    axios.post('/upload', formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className='flex flex-col gap-4 mx-auto max-w-7xl py-4'>
        <input type='file' placeholder='upload image' onChange={(e) => {setFile(e.target.files[0])}}/>
        <input type='text' placeholder='title of image' className='border border-black w-max p-2'/>
        <input type='text' placeholder='price of item' className='border border-black w-max p-2'/>
        <input type='text' placeholder='shirt/t-shirt/kurta' className='border border-black w-max p-2'/>
        <button className='p-2 rounded bg-slate-700 w-max text-white' onClick={handleOnChange}>submit</button>
    </div>
  )
}

export default AddProduct