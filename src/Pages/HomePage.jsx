import React from 'react'
import bgImage from "../assets/images/image-53.png"

function HomePage(){
  return ( 
    <section className='bg-black h-screen'>
      <div style={{backgroundImage:`url(${bgImage})`}} className="bg-cover bg-center w-full min-h-screen flex items-center justify-center">
        <div className="text-white mx-5 sm:w-4xl">
          <h1 className='text-3xl font-bold tracking-tight my-8 sm:text-4xl'>You got the travel plans, we got the travel vans</h1>
          <p className='tracking-wide text-xl sm:text-2xl my-8 font-medium'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button className='border-0 px-3 py-4 w-full text-center bg-amber-400 rounded-2xl text-2xl font-bold'>Find your van</button>
        </div>

      </div>
        
        
    </section>
  )
}

export default HomePage