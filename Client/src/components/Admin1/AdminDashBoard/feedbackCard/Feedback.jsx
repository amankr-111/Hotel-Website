import React, { useState } from 'react'
import { useEffect } from 'react'
import './feedback.css'
import feed from "./feedUser.png"
import axios from 'axios'

const Feedback = ({data}) => {
  return (
 <div className='feedData'>
       <div className="card" style={{width: "18rem", boxShadow:"2px 2px 20px", padding:"20px", backgroundColor:" rgba(255, 255, 255, 0.406)"}}>
    <img src={feed} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h3 className="card-title">{`${data.fname} ${data.lname}`}</h3>
      <p className="card-text">{data.comment}</p>
    </div>
  </div>
 </div>
  )
}

export default Feedback