import React from "react";
import "./card.css"
import Checkout from "./Checkout/Checkout";
import { useState } from "react";
import ShowImg from "./ShowImg/ShowImg";

const Card = ({data}) => {
  const [isOpen , setIsOpen]=useState(false);
  const [imgIsOpen , setImgIsOpen]=useState(false);
  const cardData = {
    name: data.name,
    des: data.des,
    loc: data.loc,
    price: data.price,
    room:data.rooms,
    roomImg:data.roomImg
  };
  return (
    <div className="card1" style={{ height: "40vh", width: "170vh" }}>
      <div  className="cardImg1" >
      {Object.values(data).map((hotel, index) => (
        <ShowImg key={index} data={hotel} />
        ))}
        <img className='boxImg1' onClick={()=>{setImgIsOpen(true)}} src={data.roomImg} height="200" style={{maxWidth:"300px", borderRadius:"10px", cursor:"pointer"}}  alt="..."/>
</div>

      <div className="content1">
        <h1 style={{fontFamily:"cursive"}}>{data.name}</h1>
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
      <Checkout data={cardData} open={isOpen} onClose={() => setIsOpen(false)}/>
      <ShowImg data={cardData} openy={imgIsOpen} onClose={() => setImgIsOpen(false)}/>
    </div>
  );
};

export default Card;

