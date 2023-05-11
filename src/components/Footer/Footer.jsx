import React from 'react'
import "./footer.css"
import img2 from "./WhatsApp_Image_2023-05-11_at_12.19.57_PM-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <div className='cont'>
        <div className='fst'>
          <img src={img2} height={75}/>
          <p>AVP Room</p>
        </div>
        <div className='snd'>
            <p style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta, quo beatae voluptate, repudiandae rem velit, quod in odio laboriosam laudantium ab obcaecati! Magni ea deserunt similique debitis quos perspiciatis.</p>
        </div>
        <div className='trd' style={{fontSize:"2rem"}}>
  <FontAwesomeIcon icon={faFacebook} />
  <FontAwesomeIcon icon={faInstagram} />
  <FontAwesomeIcon icon={faYoutube} />
  <FontAwesomeIcon icon={faLinkedin} />
</div>

      </div>
    </>
  )
}

export default Footer