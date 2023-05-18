import React from 'react'
import './portel.css'
import user from './user.png'
import admin from './admin.png'
import { Link } from 'react-router-dom';
const Portel = () => {
  return (
        <div className="box">
            <h1 style={{fontSize:"3rem", fontWeight:1000}}>Who are you</h1>
      <div className='index'>
      <div className='portelBtn'style={{marginRight:"100px"}}>
        <Link to="/loginme">
        <img src={admin} height={100} width={100}/>
 <button style={{backgroundColor:"transparent",border:"none"}} className=' admin'>Admin</button>
</Link>
</div>
<div className='portelBtn' style={{marginLeft:"100px"}}>
	<Link to="/login" >
<img src={user} height={100} width={100}/>
<button style={{backgroundColor:"transparent", border:"none"}} className=' user' >User</button>
</Link>
        </div>
      </div>
 </div>

  )
}

export default Portel