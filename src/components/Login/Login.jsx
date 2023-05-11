import React from 'react'

const Login = () => {
  return (
    <div className='container' style={{display:"flex",justifyContent:"center", margin:"20vh"}}>
      <div className='loginBox' style={{ borderRadius:"10px", boxShadow: "2px 2px 40px black"
, padding:"20px" , height: "60vh" , width: "50vh"}}>
      <div className='login'>
        <h2>Email Id</h2>
        <input type='email' className='emailInput' required placeholder='Email'/>
        <h2>password</h2>
        <input type='password' className='emailInput' required placeholder='Email'/>
      </div>
    <button className='btn btn-success border'>Login</button>
    <h6>Register</h6>

      </div>
    </div>
  )
}

export default Login