import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Pricing() {
 const { hostVan } = useOutletContext()
    return (
        <h3 className="font-bold text-2xl sm:text-3xl p-2 mx-2">${hostVan.price}<span className='italic'>/day</span></h3>
    )
}

export default Pricing