import React from 'react';
import './righthome.css';
import img from "./tick.png";

const HomeRight = () => {
  console.log()
  return (
    <div className='rightDiv'>
        <div className='img'>
          <img src={img} style={{boxShadow:'none'}} height="70px" width="80px"/>
          </div>
          <hr/>
          <h3>random</h3>
          <div className="para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut praesentium molestiae cumque veritatis. Laudantium ullam iusto ipsa nam quos?</p>
          </div>
    </div>
  )
}

export default HomeRight;
