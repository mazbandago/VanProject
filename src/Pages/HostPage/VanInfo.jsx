import React from 'react'
import { useOutletContext } from 'react-router-dom'

function VanInfo() {
  const { hostVan } = useOutletContext()
    
    return (
        <section className="p-2 w-full max-w-3xl font-bold">
            <h4 className='m-2'>Name: <span className='font-light tracking-wider text-gray-700'>{hostVan.name}</span></h4>
            <h4 className='m-2'>Category: <span className='font-light tracking-wider text-gray-700'>{hostVan.type}</span></h4>
            <h4 className='m-2'>Description: <span className='font-light tracking-wider text-gray-700'>{hostVan.description}</span></h4>
            <h4 className='m-2'>Visibility: <span className='font-light tracking-wider text-gray-700'>Public</span></h4>
            
        </section>
    )
}

export default VanInfo
