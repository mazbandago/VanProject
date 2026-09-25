import React from 'react'
import { useState } from 'react'
import vanImage from "../assets/images/image-54.png"
// import "../index.css"


function Vans() {
    const [vans, setVans] = useState(["fat","cow"])
    const btDesign = "font-semibold text-sm px-3 py-1.5 bg-black text-white rounded-lg hover:bg-amber-300 hover:text-black transition cursor-pointer"
    
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
            <button className='tex  t-sm font-semibold underline text-gray-700 hover:text-black cursor-pointer'>
                Clear filters
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-12">


            <div className='w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100 flex flex-col p-4'>
                <div className='h-56 sm:h-60 w-full overflow-hidden rounded-xl'>
                    <img src={vanImage} alt="vanImage" className='w-full h-full object-cover object-center hover:scale-105 transition duration-300'/>
                </div>
                <div className='mt-4 flex items-baseline justify-between'>
                    <h2 className='font-bold text-xl text-gray-900'>Modest Explorer</h2>
                    <div className='text-right'>
                        <p className='font-bold text-xl text-gray-900'>price</p>
                        <span className="text-xs text-gray-500 font-normal">/day</span>
                    </div>
                </div>
                <div className='mt-3'>
                    <span className='inline-block bg-orange-200 text-white text-2xl font-bold px-3 py-1 rounded-md'>Simple</span>
                </div>
            </div>

       
        </div>


    </div>
  )
}

export default Vans