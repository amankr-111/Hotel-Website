import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './pngwing.com (1).png';
import img1 from "./WhatsApp_Image_2023-05-11_at_12.19.57_PM-removebg-preview.png";
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <nav className="navbar1">
      <div className="navbar-container1">
        <NavLink to="/" className="logo1" activeClassName="">
          <img src={img1} height={75} alt="Book My Room logo" />
        </NavLink>
        <h1>Book My Room</h1>
        <ul className="nav-menu1">
          <li className={`nav-item1`}>
            <NavLink
              to="/"
              id="home"
              onClick={handleClick}
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className={`nav-item1`}>
            <NavLink
              to="/about"
              id="about"
              onClick={handleClick}
              activeClassName="active"
              exact
            >
              About
            </NavLink>
          </li>
          <li className={`nav-item1`}>
            <NavLink
              to="/support"
              id="support"
              onClick={handleClick}
              activeClassName="active"
              exact
            >
              Support
            </NavLink>
          </li>
          <li className={`nav-item1`}>
            <NavLink
              to="/login"
              id="login"
              onClick={handleClick}
              activeClassName="active"
              exact
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
