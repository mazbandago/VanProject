import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='min-h-dvh overflow-hidden bg-gray-100 flex items-center justify-center'>
        <div className='border mx-10 h-90 w-3xl bg-white shadow-lg border-amber-100 flex flex-col items-center justify-center'>
            <h1 className='text-2xl mx-4 text-center font-bold text-gray-900 font-mono'>
                Sorry, the page you were looking for was not found
            </h1>
        <Link to="/" className='my-3 border-0 px-3 py-2 text-white bg-black text-xl font-medium rounded w-fit cursor-pointer hover:bg-amber-200 hover:text-black'>
            Return to Home page
        </Link>
        </div>

    </div>
  )
}

export default NotFound