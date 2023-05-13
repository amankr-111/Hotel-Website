import React from "react";
import img1 from "./room.jpg"
import "./card.css"
import Checkout from "./Checkout/Checkout";
import { Link } from "react-router-dom";
import { useState } from "react";


const Card = ({data,from, to}) => {
  const [isOpen , setIsOpen]=useState(false);
  data={
    name:data.name,
    des:data.des,
    loc:data.loc,
    price:data.price
  }
  return (
    <div className="card1" style={{ height: "40vh", width: "170vh" }}>
      <div className="cardImg1" >
  <img  src={img1} height="200" style={{maxWidth:"300px", borderRadius:"10px"}} className="d-block w-100" alt="..."/>
</div>

      <div className="content1">
        <h1 style={{fontFamily:"cursive"}}>{data.name}</h1>
        <h2>{data.des}</h2>
        <h3>{data.loc}</h3>
       <div className="bottom">
   <button className="btn1"onClick={()=>{setIsOpen(true)}} >Book Now</button>

            <div className="cost">
              <h4 style={{fontWeight:"700"}}>Per Night</h4>
              <h3 className="pysa">{`${data.price} -/`}</h3>
            </div>
       </div>
      </div>
      <Checkout from={from} to={to} data={data} open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  );
};

export default Card;