import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../../data/links.js'

const Navbar = () => {
  return (
    <nav className='p-4 bg-gray-600 text-white'>
      <ul className='flex space-x-4'>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar