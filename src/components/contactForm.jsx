import React, { useState } from 'react';
import SendButton from './sendButton';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const [form, setForm] = useState({});
  
  const [isSubmitted,setSubmit] = useState(false);
  
  const toggleSubmit=()=>{
    setSubmit(true)
    toast('Response Submitted!');
  };

  const handleForm=(e)=>{
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleSubmit();
    if(!isSubmitted)
    {  const response = await fetch('https://api.frankdispatchingservices.com/contact-form',{
        method:'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })}
    console.log(isSubmitted);
    // handle form submission here
  }

  return (
    <div>
         <ToastContainer/>
        {!isSubmitted&&(
        <div>
          <p className='center-text'>CONTACT US!</p>
          <div className='flex justify-center'>
              <form onSubmit={handleSubmit} className='flex-col' method='POST'>
              <input
                  required
                  type="text"
                  id="name"
                  name='Name'
                  onChange={handleForm}
                  placeholder='Name'
                  className='input-field m-8'
              />
              
              <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder='Email*'
                  required
                  onChange={handleForm}
                  className='input-field m-8'
              />

              <textarea
                  required
                  name="Message"
                  id="message"
                  placeholder='Message'
                  onChange={handleForm}
                  className='input-field-message m-8'
              />
              <div className='flex justify-center'>
              <button type="submit"><SendButton/></button>
              </div>
              </form>
          </div>
        </div>)}
    </div>
  );
}

export default ContactForm;