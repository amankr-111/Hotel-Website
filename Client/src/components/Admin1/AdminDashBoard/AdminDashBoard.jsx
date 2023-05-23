import React, { useState } from 'react';
import './admindashboard.css';
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
  const Navigate = useNavigate(); 
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
}
}
  return (
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
  );
};

export default AdminDashBoard;
