import React, { useState, useEffect } from 'react';
import './admindashboard.css';
import { useNavigate } from 'react-router-dom';
import Feedback from './feedbackCard/Feedback';
import axios from 'axios';

const AdminDashBoard = () => {
  const [feedback, setFeedback] = useState([]);
  const [home, setHome]=useState({
       hname:"",
       dec:"",
       loc:"",
       price:"",
       img:"",
       noRooms:""
     })
      let name, value;
  const handleInputs=(e)=>{
    name= e.target.name;
    value= e.target.value
    setHome({...home, [name]:value})
  }
const sendData= async(e)=>{
  e.preventDefault()
  const {hname, dec, loc, price,img, noRooms}= home
  const res= await fetch("/admindashboard", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      hname, dec, loc, price, img, noRooms
    })
  });
  const val = await res.json()
  if(res.status===422 || !val)
  {
    window.alert("Data uplodation failed")
  }
  else{
    window.alert("Data uploded successful")
    setHome({
      hname:"",
      dec:"",
      loc:"",
      price:"",
      img:"",
      noRooms:""
    })
  }
}
  //fetaching the feedbacks
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/support');
     setFeedback(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


return (
  <>
  <h1 style={{marginLeft:"28%", marginTop:"5vh", fontFamily:"cursive", fontWeight:"600"}}>WELCOME TO ADMIN PORTAL</h1>
    <div className="box1">
      <div className="header1">
        <h1 className="title1">Enter Room Details</h1>
      </div>
      <form method='POST'>
        <lable className="para1">Name:</lable>
        <input type="text" name="hname" className="inp1" value={home.hname} onChange={handleInputs} placeholder="name" required />
        <lable className="para1">Discription</lable>
        <input type="text" name='dec' className="inp1"value={home.dec} onChange={handleInputs} placeholder="Discription" required />
        <lable className="para1">Location</lable>
        <input type="text" name='loc' className="inp1" value={home.loc}  onChange={handleInputs} placeholder="location" required />
        <lable className="para1">Image URL</lable>
        <input type="text" name='img' className="inp1" value={home.img}  onChange={handleInputs} placeholder="Image" required />
        <lable className="para1">Number Of Rooms</lable>
        <input type="text" name='noRooms' className="inp1" value={home.noRooms}  onChange={handleInputs} placeholder="Number of Rooms" required />
        <lable className="para1">Amount:</lable>
        <input type="number" name='price' className="inp1" value={home.price} onChange={handleInputs} placeholder="amount" required />
        <br />
        <br />
        <button onClick={sendData} className="boxBtn1">Submit</button>
      </form>
    </div>
    <h1 style={{marginLeft:"40%", marginTop:"15vh",fontSize:"4rem" ,fontWeight:"600" ,fontFamily:"curcive"}}>FeedBacks</h1>
    <div className="feedback-container">
  {Object.values(feedback).map((detail, index) => (
    <Feedback key={index} data={detail} />
  ))}
</div>
  </>
  );
};

export default AdminDashBoard;
