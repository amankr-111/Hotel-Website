import React from "react";
import img1 from "./room.jpg"
import img2 from "./hotel1.jpg"
import img3 from "./hotel2.jpg"
import "./card.css"

const Card = () => {
  return (
    <div className="card1" style={{ height: "40vh", width: "170vh" }}>
      <div className="cardImg1">
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} height="200" style={{maxWidth:"300px", borderRadius:"10px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} height="200" style={{maxWidth:"300px" ,borderRadius:"10px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} height="200" style={{maxWidth:"300px", borderRadius:"10px"}} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div className="content1">
        <h1 style={{fontFamily:"cursive"}}>Novotel Hotels</h1>
        <h2> 2 BHK + Pool </h2>
        <h3>Delhi, Noida</h3>
        <button className="btn1">Book Now</button>
      </div>
    </div>
  );
};

export default Card;
