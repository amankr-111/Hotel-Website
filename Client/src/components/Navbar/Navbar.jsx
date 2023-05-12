import React, { useState } from 'react';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';
import logo from './pngwing.com (1).png'
import img1 from "./WhatsApp_Image_2023-05-11_at_12.19.57_PM-removebg-preview.png"
function Navbar() {
  const [active, setActive] = useState('home');

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
<>
<nav className="navbar1">
      <div className="navbar-container1">
        <Link to="/" className="logo1">
      <img src={img1} height={75}/>
        </Link>
       <h1>Book My Room</h1>
        <ul className="nav-menu1">
          <li className={`nav-item1 ${active === 'home' ? 'active' : ''}`}>
            <Link id="home" to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className={`nav-item1 ${active === 'about' ? 'active' : ''}`}>
            <Link id="about" to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className={`nav-item1 ${active === 'support' ? 'active' : ''}`}>
            <Link id="support" to="/support" onClick={handleClick}>
              Support
            </Link>
          </li>
          <li className={`nav-item1 ${active === 'login' ? 'active' : ''}`}>
            <Link id="login" to="/login" onClick={handleClick}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
</>
  
    );
}

export default Navbar;