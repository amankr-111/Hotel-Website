import ReactDOM from "react-dom";
import React from "react";
import "./showImg.css";
const ShowImg = ({onClose ,openy}) => {
  if (!openy) return null; 
  return ReactDOM.createPortal(
    <>
      <div className="overLay" />
      <div className="show">
      <button className="bttn" style={{zIndex:"700"}} onClick={onClose}>❌</button>
      <div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"}  height={420} width={300} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg"} height={420} width={300} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg?compress=true&quality=80&w=376&dpr=2.6"} height={420} width={300} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ShowImg;
