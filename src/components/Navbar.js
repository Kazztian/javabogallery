import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='/images/logo.png' alt='Logo' className='navbar-logo' />
          BoGallery
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Bogota
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Planes
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Conocenos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
