import React from 'react'
import { useState } from 'react';
import "./home.css";
import Card from "../cards/Card"
import HomeRight from "./homeright/HomeRight"
import Footer from '../Footer/Footer';
import img3 from './four.jpg';
import data from '../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredData, setHoveredData] = useState(null);

  const handleMouseOver = (event) => {
    setIsHovering(true);  
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick=()=>{
    const search= document.querySelector('.searchme').value
  }

  return (
    <div className='main1'>
      <div className='slider'>
        <img src={img3} height={"100%"} width={"100%"} style={{borderRadius: "10px"}}/>
      </div>
      <h1 className='head1' style={{color:'black'}}>Lets Dive Deep!<br/>Today</h1>
      <div className="search1">
        <label htmlFor="search" id='searcher'>Search</label>
        <input type="text" className='searchme' />
        <label htmlFor="fromDate" id='from'>From</label>
        <input type="date" />
        <label htmlFor="toDdate" id='to'>To</label>
        <input type="date" />
        <button className='submit' onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
      <div className="cardDetails1">
        <div className="homeCard"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {Object.values(data).map((hotel, index) => (
            <Card key={index} data={hotel} />
            ))}
        </div>
        <div className="right1">
          {isHovering && <HomeRight />}
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
