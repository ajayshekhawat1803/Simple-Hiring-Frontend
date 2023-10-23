import React from 'react'
import './Header.css'
import logo from '../../Assests/FSL_Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo-cont'>
        <img src={logo} alt='Failed to load Logo'/>
      </div>
      <nav>
        <ul className='nav'>
          <li><Link>Home</Link></li>
          <li><Link>Categories</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
