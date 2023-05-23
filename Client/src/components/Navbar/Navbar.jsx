import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from "./LOGO.png";
import moon from "./moon.png";
import sun from "./sun.png";
import './navbar.css';

function Navbar(props) {
  const [active, setActive] = useState('home');

  const [mode, setMode]=useState(sun)

  const handlechange = () => {
    props.toggleTheme();
    if(mode===moon)
    {setMode(sun)}
    else{setMode(moon)}
  };

  const handleClick = (e) => {
    setActive(e.target.id);
  };
 const handleLogout=()=>{

 }

  return (
    <nav className="navbar1">
      <div className="navbar-container1">
        <NavLink to="/" className="logo1" activeClassName="">
          <img src={img1} height={80} alt="Book My Room logo" />
        </NavLink>
        <h1 style={{fontWeight:"900"}}>Book My Room</h1>
        <ul className="nav-menu1">
          <li>
            <button className='togle' onClick={handlechange}>
              <img src={mode} height={50}/>
            </button>
          </li>
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
              to="/portel"
              id="login"
              onClick={handleLogout}
              activeClassName="active"
              exact
            >
              Login
            </NavLink>
              </li>
            <li className={`nav-item1`}>
            <NavLink
              to="/logout"
              id="logout"
              onClick={handleLogout}
              activeClassName="active"
              exact
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
