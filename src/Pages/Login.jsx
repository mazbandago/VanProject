import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { loginUser } from '../Api'

function Login() {
    const location = useLocation()
    const [details, setDetails]= useState({email: "", password: ""})
    const[status, setStatus]=useState("idle")
    const[error, setError]=useState(null)
    
    async function handleSubmit(event){
        event.preventDefault()
        setStatus("submitting")
        try {
            const data= await loginUser(details)
            setError(null)
        } catch (error) {
            setError(error)
        } finally{
            setStatus("idle")
        }
    }

    function handleChange(event){
        const{name,value} = event.target
        setDetails(prev=>({
            ...prev,
            [name]:value
        })) 
    }
    
    const isSubmitting = status==="submitting"
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
        {location.state?.message && <h2 className='text-center text-2xl text-red-600 mb-10'>{location.state?.message}</h2>}
        <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-6'>
            {error?.message && <h2 className='text-center text-2xl text-red-600 mb-10'>{error?.message}</h2>}
            <div>
                    <h1 className='text-2xl font-bold text-center text-gray-900'>
                        Sign in to your account
                    </h1>
            </div>
            <form onSubmit={handleSubmit} className=' space-y-4'>
                <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            value={details.email} 
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 placeholder-gray-400'
                        />
                </div>
                <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            value={details.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 placeholder-gray-400'
                        />
                </div>
                <button 
                        type="submit"
                        disabled={isSubmitting}
                        className='w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md shadow transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:opacity-70 disabled:cursor-none'
                    >
                        {isSubmitting?"Logging...": "Log in"}
                </button>
            </form>
            <p className='text-center text-sm text-gray-600'>
                    Don't have an account?{' '}
                    {/* <a href="#" className='font-medium text-amber-600 hover:text-amber-500 underline'>
                        Create one now
                    </a> */}
            </p>
        </div>


    </div>
  )
}

export default Login