import ReactDOM from "react-dom";
import React from "react";
import "./checkout.css";
import img1 from './checkout.jpg'
import Payment from "./Payment/Payment";
const Checkout = ({ onClose, open }) => {
 if (!open) return null; 
  return ReactDOM.createPortal(
    <>
      <div className="over" />
      <div className="check">
        <button className="bttn" onClick={onClose}>❌</button>
       <div className="data">
      <div className="left">
       <h1 style={{fontFamily:"Delicious Handrawn, cursive"}}>CheckOut</h1> 
      <h3>You had booked a room</h3>
        <p>abc hotel</p>
        <p>Numbers of rooms you want to book</p>
        <input type="number" />
          <button type="button" class="btn btn-outline-warning">Continue</button>
      </div>
      <div className="rightCheck">
      <img src={img1} height={200} width={300}/>
      <h3>Total Ammount</h3>
          <h4>Rs- 1800</h4>
      </div>
       </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Checkout;
