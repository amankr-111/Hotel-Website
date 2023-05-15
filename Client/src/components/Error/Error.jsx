import React from 'react';
import './error.css'

const Error = () => {
  return (
    <div className='err'>
      <h1>404 Error: Page Not Found</h1>
      <h3>The requested page could not be found.
        <br />
        Please nagivate through navbar</h3>
    </div>
  );
};

export default Error;
