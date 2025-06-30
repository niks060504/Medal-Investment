import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar navbar-dark fixed-top custom-navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center px-3">
          <a href="#home" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="Logo" style={{ width: 250, height: 60 }} />
          </a>

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fullscreen-menu">
          <button className="close-btn" onClick={closeMenu}>×</button>
          <ul className="fullscreen-nav">
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
