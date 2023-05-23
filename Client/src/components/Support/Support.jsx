import React, { useState } from 'react';
import './support.css';

const Support = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [comment, setComment] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
     const res= await fetch("/login", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstName, lastName, comment
      })
     });
     const data = await res.json()
     if(res.status===422 || !data)
     {
      window.alert("Enter data properly!")
     }
     else{
       window.alert("Your FeedBack Submited successful")
       console.log("registration suq")
     }
  };

  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <form method='POST'>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Support;
