import React from 'react'
import AboutImage from "../assets/images/image-54.png"

function AboutPage() {
  return (
    <section className='bg-yellow-50 min-h-screen text-gray-900'>

          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <img 
              src={AboutImage} 
              alt="About Us Van" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col items-start text-left">

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight mb-6">
                Don't squeeze in a sedan when you could relax in a van
              </h1>
        
              <p className='text-base sm:text-lg text-gray-800 leading-relaxed font-normal mb-10'>
                Our mission is to enliven your road trip with the perfect van rental. our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra😊)
              </p>
         
          <div className='w-full p-8 sm:p-10 bg-amber-400 rounded-2xl shadow-md flex flex-col items-start gap-6'>
            <p className='text-2xl sm:text-3xl font-bold text-gray-900 leading-snug'>Your destination is waiting. Your van is ready</p>
            <button className='px-6 py-3.5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition duration-200 cursor-pointer'>Explore our vans</button>
          </div>

          </div>

       
    </section>
  )
}

export default AboutPage