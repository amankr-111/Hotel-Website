import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

const Login1 = () => {
    const nagivate=useNavigate();
  
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')

    const loginUser= async (e)=>{
        e.preventDefault();
      const res = await  fetch('/loginme',{
        method: 'POST',
        headers:{ "Content-Type":"application/json"},
            body: JSON.stringify({
                email ,password
            })
      })

        const data= res.json();
        if(res.status===400 || !data){
            window.alert("invalid credentials")
        }else{
            window.alert("login successful")
            nagivate('/')
        }
    }
  return (
    <div className="container">
        <div className="fbox">
            <h1 id="vs">Login</h1>
            <form method='POST'>
                <div className="inp">
                    <div className="inpf">
                        <input type="email" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div className="inpf">
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="password"/>
                    </div>

                </div>
                <div className="btf">
                <Link to="/login"><button type="button" id="signupbt">Sign up</button></Link>
                    <button type="button" id="signinbt" className="disa" >login</button>
                </div>
                <div className="click">
                    <button onClick={loginUser} className="click1">submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login1
