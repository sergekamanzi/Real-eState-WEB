import { useState } from 'react';
import './navbar.css';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='main-navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#listing">Listings</a></li>
          <li><a href="#place">Places</a></li>
          <li><a href="#service">Our Services</a></li>
          <li><a href="#feedback">Feedbacks</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className='btn'>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
