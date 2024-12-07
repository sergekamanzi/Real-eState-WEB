import React from 'react'
import './navbar.css'
import { FaPhoneVolume } from "react-icons/fa6";
import logo from '/logo.png'
const navbar = () => {
  return (
    <div className='main-navbar'>
       <div className='logo'>
          <img src={logo} alt="" />
        </div>
       <div className='nav-links'>
             <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Listings</a></li>
                <li><a href="">Members</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
             </ul>
       </div>
       <div className='phone'>
          <FaPhoneVolume /> +250 788 888 888
          <button>Add Property</button>
       </div>
    </div>
  )
}

export default navbar
