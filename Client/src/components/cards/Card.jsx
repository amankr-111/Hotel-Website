import React from "react";
import "./card.css"
import Checkout from "./Checkout/Checkout";
import { useState } from "react";
import ShowImg from "./ShowImg/ShowImg";
import hotel from "./hotel.jpg"

const Card = ({from, to, data}) => {
  const [isOpen , setIsOpen]=useState(false);
  const [imgIsOpen , setImgIsOpen]=useState(false);
  const cardData = {
    name: data.hname,
    des: data.dec,
    loc: data.loc,
    price: data.price,
    room:data.noRooms,
    roomImg :data.img
  };
  return (
    <div className="card1" style={{ height: "40vh", width: "170vh" }}>
      <div  className="cardImg1" >
        <img className='boxImg1' onClick={()=>{setImgIsOpen(true)}} src={data.img} height="200" style={{maxWidth:"300px", borderRadius:"10px", cursor:"pointer"}}  alt="anable to get"/>
</div>

      <div className="content1">
        <h1 style={{fontFamily:"cursive"}}>{data.hname}</h1>
        <h2>{data.des}</h2>
        <h3>{data.loc}</h3>
       <div className="bottom">
   <button className="btn1"onClick={()=>{setIsOpen(true)}} >Book Now</button>
        <h4 className="dataDec">{data.dec}</h4>

            <div className="cost">
              <h4 style={{fontWeight:"700"}}>Per Night</h4>
              <h3 className="pysa">{`${data.price} -/`}</h3>
            </div>
       </div>
      </div>
      <Checkout from={from} to={to} data={cardData} open={isOpen} onClose={() => setIsOpen(false)}/>
      <ShowImg data={cardData} openy={imgIsOpen} onClose={() => setImgIsOpen(false)}/>
    </div>
  );
};

export default Card;

