import React, { useState, useRef } from 'react';
import BC from '../images/BC.png';
import menu from '../images/menu.png';
import '../components/styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header>
      <div className="logo-title">
        <img className="logo" src={BC} alt="" />
        <h1>drawing platform.</h1>
        <img className="menu" src={menu} alt="" onClick={toggleMenu} />
      </div>

      <nav ref={navRef} className={isMenuOpen ? 'open' : ''}>
        <button className="nav_bar_button" id="signupButton" onClick={() => handleButtonClick('/signup')}>
          Sign Up
        </button>
        <button className="nav_bar_button" id="signinButton" onClick={() => handleButtonClick('/signin')}>
          Sign In
        </button>
        <button className="nav_bar_button" id="contactButton" onClick={() => handleButtonClick('/contact')}>
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
