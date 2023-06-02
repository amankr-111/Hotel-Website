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

  const iamClick =()=>{
    fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 2 },
          { id: 2, quantity: 1 },
        ],
      }),
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        console.log(url)
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })
  }
  
  setTimeout(()=>{
    iamClick()
  },2500)
 
  return (
    <header>
      <div className="container1">
          <h3>
            We are Fteaching resorces do not refresh the page 
          </h3>
          <h4>Please wait</h4>
        </div>
    </header>
  );
}
export default Payment;
