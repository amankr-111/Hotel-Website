import React from 'react';
import Footer from '../Footer/Footer';
import cross from './failed.png';
import sorry from './sorry.png';
import './status.css';

const Cancel = () => {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className='scontainer'>
        <div className='successcontainer'>
          <img style={{ marginLeft: "39%", marginBottom: "20px" }} height={70} src={cross} alt="Failed" />
          <h2 style={{ color: "Red", marginLeft: '19%' }}>Payment Failed!!</h2>
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          <br />
          <br />
          <h4>Unable to proceed with your payment request, <br /> please try again.</h4>
          <br />
          <button style={{ marginTop: "20px", width: "100%" }} onClick={handleClick} className='btn btn-danger'>Go Back</button>
        </div>
        <img style={{ marginTop: '20px' }} height={450} src={sorry} alt="Sorry" />
      </div>
      <Footer />
    </>
  );
};

export default Cancel;
