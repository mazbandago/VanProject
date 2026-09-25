import React, { useEffect } from 'react'
import { useState } from 'react'





function Vans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading]= useState(true)
    const [errors,setErrors] = useState(null)
    const btDesign = "font-semibold text-sm px-3 py-1.5 bg-black text-white rounded-lg hover:bg-amber-300 hover:text-black transition cursor-pointer"

     const vanElement = vans.map(van=>{
        console.log(van)
        return(
            <div key={van.id} className='w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100 flex flex-col p-4'>
                    <div className='h-56 sm:h-60 w-full overflow-hidden rounded-xl'>
                        <img src={van.imageUrl} alt={van.name} className='w-full h-full object-cover object-center hover:scale-105 transition duration-300'/>
                    </div>
                    <div className='mt-4 flex items-baseline justify-between'>
                        <h2 className='font-bold text-xl text-gray-900'>{van.name}</h2>
                        <div className='text-right'>
                            <p className='font-bold text-xl text-gray-900'>{van.price}</p>
                            <span className="text-xs text-gray-500 font-normal">/day</span>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <span className='inline-block bg-orange-200 text-white text-2xl font-bold px-3 py-1 rounded-md'>{van.type}</span>
                    </div>
            </div>
        )
            
     })
    useEffect(()=>{
        fetch("/api/vans")
        .then((res)=>{
            if(!res.ok){
                throw new Error("The server is down")
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data.vans)
            setVans(data.vans)
            setLoading(false)
        })
        .catch((err)=>{
            setErrors(err.message)
            setLoading(false)
        })
    },[])


    if (loading) return <div className="p-10 text-center font-bold text-xl">Loading vans...</div>
    if (errors) return <div className="p-10 text-center text-red-500 font-bold">{errors}</div>
    
    
  return (
    
    <div className='bg-orange-50 min-h-screen px-5 sm:px-10 lg:px-16'>
        <div className='pt-10  mb-10'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>Explore our Van options</h1>
        </div>
        
        <div className='flex items-center justify-between mb-10 flex-wrap gap-4'>
            <div className='flex flex-wrap items-center gap-3'>
                <div className={btDesign}>Simple</div>
                <div className={btDesign}>Luxury</div>
                <div className={btDesign}>Rugged</div>
            </div>
            <button className='tex t-sm font-semibold underline text-gray-700 hover:text-black cursor-pointer'>
                Clear filters
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-12">
            {vanElement}
        </div>


    </div>
  )
}

export default Vans