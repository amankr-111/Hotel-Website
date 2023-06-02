import React from 'react'
import './status.css'
import tick from './tick.png'
import thumb from './thumbsUp.png'
import Footer from '../Footer/Footer'
const Success = () => {

const handleClick=()=>{
  window.location.href = '/'
}

  return (
    <>
    <div className='scontainer'>
      <div className='successcontainer'>
        <img style={{marginLeft:"39%", marginBottom:"20px"}} height={70} src={tick}/>
      <h2  style={{color:"green", marginLeft:'15%'}}>Payment Succesfull!</h2>
      _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
      <br />
      <br />
      <h4 style={{marginLeft:"15%"}}>Please Download yout slip</h4>
      <br />
      <button style={{marginTop:"20px", width:"100%"}} onClick={handleClick} className='btn btn-success'>Download</button>
      </div>
      <img style={{marginTop:'20px'}} height={450} src={thumb}/>

    </div>
      <Footer/>
      </>

  )
}

export default Success