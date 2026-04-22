import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCafeOutline, IoCarOutline, IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav-bar'>
      <div className='inner-nav'>
        <div className='nav-left'>
          <Link to={'/'} className='brand-name'> <h1><span>Z</span>aptro</h1></Link>
          <div className='nav-location'>
            <MapPin className='' />
            <span>{location ? <div></div> : "Add Address"}</span>
            <FaCaretDown />
          </div>
        </div>
        <nav>
            <ul>
              <NavLink to={'/'} className={({isActive})=> isActive ? "activee" : ""}><li>Home</li></NavLink>
              <NavLink to={'/product'} className={({isActive})=> isActive ? "activee" : ""} ><li>Product</li></NavLink>
              <NavLink to={'/about'} className={({isActive})=> isActive ? "activee" : ""} ><li>About</li></NavLink>
              <NavLink to={'/contact'} className={({isActive})=> isActive ? "activee" : ""} ><li>Contact</li></NavLink>
            </ul>

            <Link to={'/cart'} className='link'>
            <IoCartOutline className='icon-nav'/> <span className='cart-number'>2</span>
            </Link>

            <button className='nav-btn'>Sign in</button>



          </nav>
      </div>
    </div>
  )
}

export default Navbar
