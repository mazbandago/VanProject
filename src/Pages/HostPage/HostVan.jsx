import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HostVan() {
  const[van,setVan] = useState([])
  
  useEffect(()=>{
    fetch("/api/host/vans")
    .then(res=>res.json())
    .then(data=>{
      return setVan(data.vans)
    })
  },[])
  const HostVanEl = van.map(item=>(
  <Link key={item.id} to={`/host/van/${item.id}`}>
    <div key={item.id} className='bg-white flex gap-2 mb-5 m-4'>
        <img src={item.imageUrl} alt="" className='h-30 sm:h-40 p-3 rounded-xl'/>
        <div className='flex flex-col justify-center p-4'>
          <h2 className='font-extrabold text-2xl sm:text-3xl'>{item.name}</h2>
          <p className='italic'>${item.price}/day</p>
        </div>
    </div>
  </Link>
  ))
  return (
    <div className='min-h-screen bg-gray-100'>
      <h1 className='py-10 px-4 font-bold text-2xl sm:text-3xl text-gray-900'>Your listed vans</h1>
      {HostVanEl}
    </div>
  )
}

export default HostVan