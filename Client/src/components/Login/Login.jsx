import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
  const Navigate = useNavigate();
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })
  let name, value;
  const handleInputs=(e)=>{
    name= e.target.name;
    value= e.target.value
    setUser({...user, [name]:value})
  }
  const postData= async(e)=>{
      e.preventDefault()
     const {name, email, password}= user
     const res= await fetch("/login", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, password
      })
     });
      const data = await res.json()
      if(res.status===422 || !data)
      {
        window.alert("registration failed")
       console.log("registration failed")
      }
      else{
        window.alert("registration successful")
        console.log("registration suq")
        Navigate('/loginme');
      }
  }
  return (
    <div className="container">
        <div className="fbox">
            <h1 id="vs">Sign up</h1>
            <form method='POST'>
                <div className="inp">
                    <div className="inpf" id="namfi">
                        <input type="text" name="name" required value={user.name} onChange={handleInputs} placeholder="name"/>
                    </div>
                    <div className="inpf">
                        <input type="email" name="email" required value={user.email} onChange={handleInputs} placeholder="Email"/>
                    </div>
                    <div className="inpf">
                        <input type="password" name="password" required value={user.password} onChange={handleInputs} placeholder="password"/>
                    </div>
                </div>
                <div className="btf">
                    <button type="button" id="signupbt">Sign up</button>
                   <Link to={'/loginme'}> <button type="button" id="signinbt" className="disa" >login</button></Link>
                </div>
                <div className="click">
                    <button onClick={postData} className="click1">submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
