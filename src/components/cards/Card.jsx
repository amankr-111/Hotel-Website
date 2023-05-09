import React from "react";
import img from "./room.jpg"
import "./card.css"

const Card = () => {
  return (
    <div className="card" style={{ height: "40vh", width: "170vh" }}>
      <div className="cardImg">
      <img src={img} height="250" width="300"  style={{borderRadius:"10px"}}/>
      </div>
      <div className="content">
        <h1 style={{fontFamily:"cursive"}}>Novotel Hotels</h1>
        <h2> 2 BHK + Pool </h2>
        <h3>Delhi, Noida</h3>
        <button className="btn">Book Now</button>
      </div>
    </div>
  );
};

export default Card;
