import ReactDOM from "react-dom";
import React from "react";
import "./checkout.css";
import { useState } from "react";
import { Link } from "react-router-dom";




const Checkout = ({data, onClose, open}) => {
  const [roomCount, setRoomCount] = useState(1);
  function handleAddRoom() {
    setRoomCount(roomCount + 1);
  }

  function handleSubtractRoom() {
    if (roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  }

  if (!open) return null; 
  return ReactDOM.createPortal(
    <>
      <div className="over" />
      <div className="check">
        <button className="bttn" onClick={onClose}>❌</button>
       <h1 className="headCheck" style={{fontFamily:"Delicious Handrawn, cursive"}}>CheckOut</h1> 
       <div className="data">
      <div className="left">
        <h3 style={{fontWeight:"700",fontSize:"3rem", fontFamily:"curcive"}}>{data.name}</h3>
        <br/>
        <br/>
      <h5>You had booked a room</h5>
        <br/>
        <br/>
        <h5>Numbers of rooms you want to book</h5>
        <div className="rooms">
      <button className="sub" onClick={handleSubtractRoom}>-</button>
      <div className="dis">{roomCount}</div>
      <button className="add" onClick={handleAddRoom}>+</button>
    </div>
    <Link to={{
  pathname: '/payment',
  state:{
    data:{
      name:data.name,
      work: "developer"
    }
  }
}} target="/payment">
    <button type="button" class="btn btn-outline-warning">Continue</button>
    </Link>
      </div>
      <div className="rightCheck">
      <div className="dates">
        <label htmlFor="fromDate" id='from'>From</label>
        <input type="date" />
        <label htmlFor="toDdate" id='to'>To</label>
        <input type="date" />
      </div>
      <div className="pay">
      <h3 style={{fontSize:"2rem", color:"red"}}>Total Ammount</h3>
          <h4 style={{fontWeight:"400",}}>{`Rs ${roomCount*data.price} `}</h4>
      </div>
      </div>
       </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Checkout;
