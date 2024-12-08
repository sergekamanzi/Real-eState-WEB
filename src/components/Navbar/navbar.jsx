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
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </div>

      <div className='btn'>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
