import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from './pngwing.com (1).png'
function Navbar() {
  const [active, setActive] = useState('home');

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
      <img src={logo} height={75}/>
        </Link>
       <h1>Book My Room</h1>
        <ul className="nav-menu">
          <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
            <Link id="home" to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className={`nav-item ${active === 'about' ? 'active' : ''}`}>
            <Link id="about" to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className={`nav-item ${active === 'support' ? 'active' : ''}`}>
            <Link id="support" to="/support" onClick={handleClick}>
              Support
            </Link>
          </li>
          <li className={`nav-item ${active === 'login' ? 'active' : ''}`}>
            <Link id="login" to="/login" onClick={handleClick}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
