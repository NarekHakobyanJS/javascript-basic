import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className='nav'>
        <div>
            <NavLink to="/introduction">Ներածություն</NavLink>
        </div>
        <div>
            <NavLink to="/basic">Հիմնական</NavLink>
        </div>
    </nav>
  )
}

export default Nav