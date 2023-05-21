import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import card1 from "./cards.jpeg"
import card2 from "./lock.png"

function Payment() {


  
  const nagivate= useNavigate();

  const callPaymentPage= async()=>{
    try{
      const res= await fetch("/payment",{
        method:"GET",
        headers:{
              Accept: "application/json",
              "Content-Type": "application/json"
        },
        credentials:"include"
      })

      const data= await res.json()
      console.log("I am the second Cookie")
      if(!res.status === 200)
      {
        const error= new Error(res.error)
        throw error
      }

    }catch(error){
      console.log(error)
      nagivate('/login')
      console.log("we are facing some error")
    }
  }

    useEffect(()=>{
       callPaymentPage();
    },[])

  function handleSubmit(event) {
    event.preventDefault();
    alert("Your payment was successful");
  }
 
  return (
    <header>
      <div className="container1">
        <div className="pay1">
          <form method="GET" onSubmit={handleSubmit}>
            <h3 className="head" style={{font:"3rem curcive 1000"}}>Payments</h3>
            <label className="labe1">
              Accepted card
              <img style={{marginLeft:"20px"}} src={card1} width="170" alt="card img" />
            </label>
            <input className="cardDetails" type="text" placeholder="Name on Card*" />
            <input className="cardDetails" type="text" placeholder="Card Number*" />
            <input className="cardDetails" type="text" placeholder="Expiry Date*" />
            <input className="cardDetails" type="text" placeholder="Security Code*" />
            <button type="submit">
              <img
                src={card2}
                height="20px"
                alt="Lock icon"
                onSubmit={handleSubmit}
              />
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
export default Payment;
