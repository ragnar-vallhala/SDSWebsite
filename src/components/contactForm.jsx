import React, { useState } from 'react';
import SendButton from './sendButton';

const ContactForm = () => {
  const [form, setForm] = useState({});


  const handleForm=(e)=>{
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/contact-form',{
      method:'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    
    // handle form submission here
  }

  return (
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
    </div>
  );
}

export default ContactForm;