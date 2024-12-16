import React, { useState } from 'react';
import './css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const NavBar = ({ cartCount, toggleCartVisibility }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/coleccion">Colección</Link>
        <Link to="/about">Historia</Link>
      </nav>
      <button className="cart-button" onClick={toggleCartVisibility}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
};

export default NavBar;
