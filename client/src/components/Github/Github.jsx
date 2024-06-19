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
    <div className='text-center bg-gray-900 bg-opacity-70 text-white text-3xl mx-auto max-w-screen-xl p-4'>
        Github follower : {data.followers}
     <img src={data.avatar_url} alt='Git picture' width={250}/>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Arshsharma2500')
    return response.json()
}