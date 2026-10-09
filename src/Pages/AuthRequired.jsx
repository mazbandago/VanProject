import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function AuthRequired() {
    const location = useLocation()

    const isLoggedIn= localStorage.getItem("logged")
    if(!isLoggedIn){
        return  <Navigate to="/login" state={{message:"You must log in first", from: location}} replace/>
    }
    return <Outlet/>
  
}

export default AuthRequired