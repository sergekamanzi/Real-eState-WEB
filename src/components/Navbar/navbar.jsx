import React, { useState } from 'react';
import './navbar.css';
import { FaPhoneVolume, FaBars, FaTimes } from "react-icons/fa";
import logo from '/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Listings</a></li>
          <li><a href="#">Members</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      
      <div className="phone">
        <FaPhoneVolume /> +250 788 888 888
        <button>Add Property</button>
      </div>

      {/* Hamburger menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
