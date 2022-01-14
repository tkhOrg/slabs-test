import React, {useState, useRef } from 'react';
import Arrow from '../images/arrow.png';

import '../pages/Home.css';

const EmailModal = ({setShowModal}) => {
  const [mCData, setMCData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    const userEmail = emailRef.current.value
    const regexFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (userEmail === '' || !regexFormat.test(userEmail)) {
        alert('Please submit a valid email.');
      return
    }

    fetch('/api/emailSubmit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
      }),
    })
    .then((data) => JSON.stringify(data))
    .then((data) => {
      setMCData(data.status)
    });

    emailRef.current.value = '';

    setSubmitted(true)
    setTimeout(()=> setShowModal(prev => !prev), 10000)
  }
    const backClick = () => {
      setShowModal(prev => !prev)
  }

  return(
    <div className='modalDiv'>
      <div class="modal-content">
        {submitted ?
        <>
        <span className='submitMsg'>Submitted.</span>
        <img src={Arrow} alt='arrow' className='arrow'/>
        </>
        :
        <>
        <h1 className='emailFormTitle'>stay updated.</h1>
        <form className='emailForm' onSubmit={handleSubmit}>
          <input className='emailInput' ref={emailRef} placeholder='Your Email' autoComplete="off"></input>
          <br></br>
          <input className='emailSubmit' type="Submit" value="Sign Up"></input>
        </form>
          <p className='backBtn' onClick={backClick}>close</p>
        </>
        }
      </div>
    </div>
  )
};

export default EmailModal;