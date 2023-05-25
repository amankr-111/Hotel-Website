import React from 'react'
import './booked.css'
import Footer from '../Footer/Footer'
const Booked = ({name}) => {
  return (
    <>
    <div className='booked'>
        <h1>Download</h1>
      <div className='down1'>
      <h4 className='paraDown'>
        Congratulation!<br/><br></br>
        Your reservation has been succesfully compleated please click on the button bellow the screen to download your reseervation slip</h4>
        <button className='btn btndown btn-primary'>Download</button>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Booked