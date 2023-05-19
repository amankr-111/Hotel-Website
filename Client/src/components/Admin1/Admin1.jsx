import React from 'react'
import './admin1.css'
import { Navigation, useNavigate } from 'react-router-dom'
const Admin = () => {
    const nagivate = useNavigate()
  const handleClick=()=>{
   const email= document.getElementById('adminEmail').value
   const password= document.getElementById('adminPass').value
   if(email==='admin@123' && password==='admin123')
   {
    alert("Login sucessfully")
    nagivate('/adminDashBoard')
   }
   else{
    alert("Invalid credentials")
   }
  }
  return (
    <div className='admin1'>
    <form className='adminform'>
        <h1 className='login'>LOGIN</h1>
        <label className='loginLable'>Email</label>
        <input className='loginName' id='adminEmail' placeholder='Email' type="username" required/>
        <label className='loginLable'>Password</label>
        <input className='loginName' id='adminPass' placeholder='Password' type="password" required/>
        <button className='loginBtn' onClick={handleClick}>SUBMIT</button>
       <br/>
    </form>
    </div>
  )
}

export default Admin