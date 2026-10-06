import React, { useEffect,useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getVan } from '../Api'

function VanDetails() {
    const {id} = useParams()
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const location = useLocation()
    
    useEffect(()=>{
        async function loadVan(){
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch (error) {
               setError(error) 
            }
            finally{
                setLoading(false)
            }
        }
        loadVan()
    },[])

    const search = location.state?.search ||""
    const type = location.state?.type || "all"


    if(loading) return <h1 className='my-20 bg-white text-center font-semibold text-2xl h-30 shadow-lg'>Loading van....</h1>
    if (error) return <div className="p-10 text-center text-red-500 font-bold">{error.message}</div>

  return (
        <div className='bg-orange-50 min-h-screen p-6 sm:p-10'>
            <Link to={`..${search}`} relative='path' className="text-sm font-semibold underline text-gray-700 hover:text-black mb-6 inline-block">
                &larr; Back to {type} vans
            </Link>

            {van && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
                    <img 
                        src={van.imageUrl} 
                        alt={van.name} 
                        className="w-full h-72 sm:h-96 object-cover rounded-xl mb-6" 
                    />

                    <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-md mb-4 capitalize hover:bg-black">
                        {van.type}
                    </span>

                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{van.name}</h2>
                    
                    <p className="text-2xl font-bold text-gray-900 mb-4">
                        ${van.price}<span className="text-sm font-normal text-gray-500">/day</span>
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">{van.description}</p>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition cursor-pointer">
                        Rent this van
                    </button>
                </div>
            )}
        </div>
  )
}

export default VanDetails