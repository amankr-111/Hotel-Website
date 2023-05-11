import React from 'react'
import { useState } from 'react';
import "./home.css";
import Card from "../cards/Card"
import HomeRight from "./homeright/HomeRight"
import Footer from '../Footer/Footer';
const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className='main1'>
        <div className="search1">
          <label htmlFor="search">Search</label>
          <input type="text" />
          <label htmlFor="fromDate">From</label>
          <input type="date" />
          <label htmlFor="toDdate">To</label>
          <input type="date" />
        </div>
      <div className="cardDetails1">
        <div className="homeCard"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    <div className="right1">
     {isHovering ? <HomeRight/> : ""} 
    </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home