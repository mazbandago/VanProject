import React from 'react'
import { Outlet } from 'react-router-dom'
import NavHost from "./NavHost"



function HostLayout() {
  return (
    <>
        <NavHost/>
        <Outlet/>
    </>
  )
}

export default HostLayout