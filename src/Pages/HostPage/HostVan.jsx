import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHostVans } from '../../Api'

function HostVan() {
  const[van,setVan] = useState([])
  const[loading, setloading]=useState(false)
  const[errors, setErrors]=useState(null)
  
  useEffect(()=>{
    async function loadHostVan(){
      setloading(true)
      try {
        const data = await getHostVans()
        setVan(data)
      } catch (error) {
        setErrors(error)
      }
      finally{
        setloading(false)
      }
    }
    loadHostVan()
  },[])

  const HostVanEl = van.map(item=>(
  <Link key={item.id} to={`${item.id}`}>
    <div key={item.id} className='bg-white flex gap-2 mb-5 m-4'>
        <img src={item.imageUrl} alt="" className='h-30 sm:h-40 p-3 rounded-xl'/>
        <div className='flex flex-col justify-center p-4'>
          <h2 className='font-extrabold text-2xl sm:text-3xl'>{item.name}</h2>
          <p className='italic'>${item.price}/day</p>
        </div>
    </div>
  </Link>
  ))

  if(loading) return <h1 className='my-20 bg-white text-center font-semibold text-2xl h-30 shadow-lg'>Loading van....</h1>
  if (errors) return <div className="p-10 text-center text-red-500 font-bold">There was an error: {error.message}</div>
  
  return (
    <div className='min-h-screen bg-gray-100'>
      <h1 className='py-10 px-4 font-bold text-2xl sm:text-3xl text-gray-900'>Your listed vans</h1>
      {HostVanEl}
    </div>
  )
}

export default HostVan