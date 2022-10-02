import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Nikhil
            <i class="fa-solid fa-screwdriver-wrench"></i>
            Datar
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href = 'https://github.com/nmdatar/nikhildatar.com/blob/main/src/Nikhil_Datar_Resume.pdf'
                target = '_blank'
                rel='noopener noreferrer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;