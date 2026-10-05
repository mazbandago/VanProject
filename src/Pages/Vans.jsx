import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { getVan } from '../Api'


function Vans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading]= useState(false)
    const [errors,setErrors] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    
    const btDesign = "font-semibold text-sm px-3 py-1.5 bg-black text-white rounded-lg hover:bg-amber-300 hover:text-black transition cursor-pointer"
    const selected = "bg-red-900 px-2 py-1 rounded font-bold text-white"
     
    useEffect(()=>{
       async function loadVan(){
            setLoading(true)
            try {
                const data = await getVan()
                setVans(data)
            } catch (error) {
                setErrors(error)
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        loadVan()
    },[])

    const vansFilter = typeFilter
    ? vans.filter(van=>van.type===typeFilter
     ) : vans

     function generateNewFilter(key, value){
        setSearchParams(prevParam=>{
            if(key===null){
                prevParam.delete(key)
            }else{
                prevParam.set(key,value)
            }
            return prevParam
        })
     }

    

     const vanElement = vansFilter.map(van=>{
        return(
            <div key={van.id} className='w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100 flex flex-col p-4'>
                <Link to ={van.id} state={{search:`?${searchParams.toString()}`, type: typeFilter}}>
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
                </Link>
            </div>
        )
            
     })
    
    if (loading) return <div className=" bg-blue-600  h-dvh flex items-center justify-center p-10 text-center font-bold text-xl">Loading vans...</div>
    if (errors) return <div className="p-10 text-center text-red-500 font-bold">{errors.message}</div>
    
    
  return (
    
    <div className='bg-orange-50 min-h-screen px-5 sm:px-10 lg:px-16'>
        <div className='pt-10  mb-10'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>Explore our Van options</h1>
        </div>
        
        <div className='flex items-center justify-between mb-10 flex-wrap gap-4'>
            <div className='flex flex-wrap items-center gap-3'>
                <button className={`btDesign ${typeFilter==="simple"? selected : btDesign}`} onClick={()=>generateNewFilter("type","simple")}>Simple</button>
                <button className={`btDesign ${typeFilter==="luxury"? selected : btDesign}`} onClick={()=>generateNewFilter("type","luxury")}>Luxury</button>
                <button className={`btDesign ${typeFilter==="rugged"? selected : btDesign}`} onClick={()=>generateNewFilter("type","rugged")}>Rugged</button> 
            </div>
            {typeFilter?
            (<button onClick={()=>generateNewFilter("type", null)} className='tex t-sm font-semiboldderline text-gray-700 hover:text-black cursor-pointer'>
                Clear filters
            </button>) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-12">
            {vanElement}
        </div>


    </div>
  )
}

export default Vans