import React, { useState } from 'react';
import './support.css';

const Support = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [comment, setComment] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
     const res= await fetch("/support", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        fname: firstName,
        lname: lastName,
        comment: comment
      })
     });
     const data = await res.json()
     if(res.status===500 || !data)
     {
      window.alert("Enter data properly!")
     }
     else{
       window.alert("Your FeedBack Submited successful")
       setFirstName("")
       setLastName("")
       setComment("")
     }
  };

  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <form method='POST'>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name='fname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name='lname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name='comment' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Support;
