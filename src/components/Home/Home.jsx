import React from 'react'
import "./home.css";
import Card from "../cards/Card"
import HomeRight from './right/HomeRight';
const Home = () => {
  return (
    <div className='main'>
        <div className="search">
          <label htmlFor="search">Search</label>
          <input type="text" />
          <label htmlFor="fromDate">From</label>
          <input type="date" />
          <label htmlFor="toDdate">To</label>
          <input type="date" />
        </div>
      <div className="cardDetails">
        <Card/> 
    <div className="right">
      <HomeRight/>
    </div>
      </div>
    </div>
  )
}

export default Home