import React, { useEffect } from 'react'
import { Outlet, useParams, NavLink, Link} from 'react-router-dom'
import { useState } from 'react'
import { getHostVans } from '../../Api'

function HostVanDetails() {
 const hostLinks = ({isActive})=> 
  `font-bold text-gray-700 sm:text-xl border-b-2 ${isActive
    ? 'border-amber-800 text-gray-950'
    : 'border-transparent hover:text-amber-900 hover:border-amber-800'
  }`
    const {id} = useParams()
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState(null)
    const [hostVan, setHostVan] = useState(null)
   
    useEffect(()=>{
        async function loadVanDetails(){
            setLoading(true)
            try {
               const data = await getHostVans(id) 
               setHostVan(data)
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }
        loadVanDetails()
    },[])

    if(loading) return <h1 className='my-20 bg-white text-center font-semibold text-2xl h-30 shadow-lg'>Loading van....</h1>
    if (error) return <div className="p-10 text-center text-red-500 font-bold">{error.message}</div>
  return (
    
    <section className='min-h-screen bg-amber-50 py-5'>
        <Link to=".." relative="path" className="text-sm font-semibold underline text-gray-700 hover:text-black mb-4 mx-6 inline-block">
                &larr; Back to  Hostvan
        </Link>
        {hostVan && <div className='bg-white m-5 p-4'>
            <div className='flex gap-3'>
                <img src={hostVan.imageUrl} alt={hostVan.name} className='h-45 max-w-md rounded-lg p-4'/>
                <div className='flex flex-col justify-center'>
                    <button className='text-xl font-bold border p-2 rounded bg-amber-300 mb-2'>{hostVan.type}</button>
                    <h2 className='font-bold text-2xl text-gray-900'>{hostVan.name}</h2>
                    <p className='text-xl font-semibold mt-1'>${hostVan.price}<span className='text-base font-normal'>/day</span></p>
                </div>
            </div>
                <div className='flex justify-start gap-3 mx-3 my-3'>
                    <NavLink to="." end  className={hostLinks}>Details</NavLink>
                    <NavLink to="pricing" className={hostLinks}>Pricing</NavLink>
                    <NavLink to="photos" className={hostLinks}>Photos</NavLink>
                </div> 
                <Outlet/>
        </div>}
    </section>
  ) 
}
export default HostVanDetails
