import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function VanDetails() {
    const param = useParams()
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch(`/api/vans/${param.id}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error("The server is down")
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data.vans)
            setVan(data.vans)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
    },[])


    if(loading) return <p className='p-10 text-center font-bold text-xl'>Loading Details Page.....</p>
    if(error) return <p className="p-10 text-center text-red-500 font-bold">{error}</p>

  return (
        <div className='bg-orange-50 min-h-screen p-6 sm:p-10'>
            <Link to="/vans" className="text-sm font-semibold underline text-gray-700 hover:text-black mb-6 inline-block">
                &larr; Back to all vans
            </Link>

            {van && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
                    <img 
                        src={van.imageUrl} 
                        alt={van.name} 
                        className="w-full h-72 sm:h-96 object-cover rounded-xl mb-6" 
                    />

                    <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-md mb-4 capitalize">
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