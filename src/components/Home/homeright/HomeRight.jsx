import React from 'react'
import './righthome.css'
import img from "./tick.png"
const HomeRight = () => {
  return (
    <div className='rightDiv'>
        <div className='img'>
          <img src={img} height="70px" width="80px"/>
          </div>
          <hr/>
          <div className="para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut praesentium molestiae cumque veritatis. Laudantium ullam iusto ipsa nam quos?</p>
          </div>
    </div>
  )
}

export default HomeRight