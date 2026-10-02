import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'

function NavHost() {
  const hostLinks = ({isActive})=> 
  `font-bold text-gray-700 sm:text-xl border-b-2 ${isActive
    ? 'border-amber-800 text-gray-950'
    : 'border-transparent hover:text-amber-900 hover:border-amber-800'
  }`
  return (
    <header className='bg-gray-100 flex items-center h-20 p-2 shadow-lg'>
       <nav className='w-full flex flex-wrap justify-start gap-3 sm:gap-5 p-2 '>
        <NavLink className={hostLinks} to="." end>Dashboard</NavLink>
        <NavLink className={hostLinks} to="income">Income</NavLink>
        <NavLink className={hostLinks} to="van">Van</NavLink> 
        <NavLink className={hostLinks} to="review">Review</NavLink>
       </nav> 
    </header>
  )
}
 
export default NavHost