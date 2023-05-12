import React from 'react'
import { useState } from 'react';
import "./home.css";
import Card from "../cards/Card"
import HomeRight from "./homeright/HomeRight"
import Footer from '../Footer/Footer';
import img3 from './four.jpg';
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
      <div className='slider'>
          <img src={img3} height={"100%"} width={"100%"} style={{borderRadius: "10px"}}/>
      </div>
      <h1 className='head1'>Hey Buddy! Where are you going
      <br/>
      Today
      </h1>
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