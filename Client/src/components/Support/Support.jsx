import React from 'react'
import "./support.css"
const Support = () => {
  return (
    <div class="container">
    <div>
      <h2>Contact Us</h2>
      <p>Now, you can get in touch with ITC's Hotel Group in case of any queries or reservation requests. You can call us on our toll-free number</p>
    </div>
    <div class="row">
      <div class="column">
          <img src="business-phone-service-pbx-prestige-260nw-1103926964.webp"/>
      </div>
      <div class="column">
        <form >
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="india">india</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default Support