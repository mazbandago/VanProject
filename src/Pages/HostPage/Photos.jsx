import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Photos() {
 const { hostVan } = useOutletContext()
    return (
        <img src={hostVan.imageUrl} className="object-center object-cover h-50 w-60 sm:h-60 sm:w-70 rounded hover:hover:scale-105 transition duration-300 my-3" />
    )
} 

export default Photos