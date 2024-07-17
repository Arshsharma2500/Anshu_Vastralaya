import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/Arshsharma2500') // for optimization we use loader 
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // })
  return (
    <div className=' bg-gray-900 bg-opacity-70 text-white text-3xl mx-auto max-w-screen-xl p-4 flex flex-wrap gap-10'>

      <img src={data.avatar_url} alt='Git picture' width={250}/>

      <div className='flex flex-col gap-5'>
        <p>GitHub UserName : {data.login}</p>

        <a href='https://github.com/Arshsharma2500'>
        <p>Profile Link : https://github.com/Arshsharma2500</p>
        </a>
      </div> 

    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Arshsharma2500')
    return response.json()
}