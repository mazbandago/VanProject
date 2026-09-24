import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  // Utility function to dynamically style active links
  const getLinkStyle = ({ isActive }) =>
    `font-semibold text-base sm:text-lg transition-colors py-1 border-b-2 ${
      isActive
        ? 'border-amber-800 text-amber-950'
        : 'border-transparent text-gray-800 hover:text-amber-900 hover:border-amber-700'
    }`

  return (
    <header className="bg-amber-200 rounded-t-lg px-4 py-3 sm:px-6 sm:py-4">
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="font-extrabold text-2xl sm:text-3xl text-amber-950 tracking-tight text-center sm:text-left"
        >
          #VANLIFE
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-6">
          <NavLink to="/" className={getLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkStyle}>
            About
          </NavLink>
          <NavLink to="/vans" className={getLinkStyle}>
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar