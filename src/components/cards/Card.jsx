import React from "react";
import img1 from "./room.jpg"
import "./card.css"
import Checkout from "./Checkout/Checkout";
import { useState } from "react";
const Card = () => {
  const [isOpen , setIsOpen]=useState(false);
  
  return (
    <div className="card1" style={{ height: "40vh", width: "170vh" }}>
      <div className="cardImg1" >
  <img src={img1} height="200" style={{maxWidth:"300px", borderRadius:"10px"}} className="d-block w-100" alt="..."/>
</div>

      <div className="content1">
        <h1 style={{fontFamily:"cursive"}}>Novotel Hotels</h1>
        <h2> 2 BHK + Pool </h2>
        <h3>Delhi, Noida</h3>
       <div className="bottom">
         <button className="btn1" onClick={()=>{setIsOpen(true)}}>Book Now</button>
            <h3>18000 -/</h3>
       </div>
      </div>
      <Checkout  open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  );
};

export default Card;